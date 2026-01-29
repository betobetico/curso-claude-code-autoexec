/**
 * Validation: 2.4 La Automatización
 *
 * Verifica que el estudiante ha configurado al menos
 * un Hook funcional.
 */
export async function validate(context) {
  const { fs, path } = context.utils;
  const projectDir = context.paths.studentProject;

  const results = {
    checks: {},
    passed: false,
    score: 0,
    feedback: [],
    conceptualQuestion: null
  };

  // Check 1: Archivo settings.json existe
  const settingsPath = path.join(projectDir, '.claude', 'settings.json');
  const settingsLocalPath = path.join(projectDir, '.claude', 'settings.local.json');

  const hasSettings = fs.existsSync(settingsPath);
  const hasLocalSettings = fs.existsSync(settingsLocalPath);

  results.checks.settings_exists = hasSettings || hasLocalSettings;

  if (!results.checks.settings_exists) {
    results.feedback.push("❌ No encuentro configuración de hooks");
    results.feedback.push("💡 Crea .claude/settings.json o .claude/settings.local.json");
    return results;
  }

  // Check 2: Settings tiene hooks configurados
  const settingsFile = hasSettings ? settingsPath : settingsLocalPath;
  let settings;

  try {
    settings = JSON.parse(fs.readFileSync(settingsFile, 'utf-8'));
    results.checks.valid_json = true;
  } catch (e) {
    results.checks.valid_json = false;
    results.feedback.push("❌ El archivo de configuración tiene errores de JSON");
    results.feedback.push(`💡 Error: ${e.message}`);
    return results;
  }

  // Check 3: Tiene sección de hooks
  results.checks.has_hooks_section = settings.hooks && typeof settings.hooks === 'object';

  if (!results.checks.has_hooks_section) {
    results.feedback.push("❌ No hay sección 'hooks' en la configuración");
    results.feedback.push('💡 Añade: "hooks": { ... }');
    return results;
  }

  // Check 4: Tiene al menos un hook definido
  const hookTypes = Object.keys(settings.hooks);
  results.checks.has_hook_defined = hookTypes.length > 0;

  if (!results.checks.has_hook_defined) {
    results.feedback.push("❌ La sección hooks está vacía");
    results.feedback.push("💡 Define al menos un hook como 'PreToolUse' o 'PostToolUse'");
    return results;
  }

  results.feedback.push(`📋 Hooks encontrados: ${hookTypes.join(', ')}`);

  // Check 5: Los hooks tienen comandos válidos
  let validHooks = 0;
  const hookDetails = [];

  for (const hookType of hookTypes) {
    const hookConfig = settings.hooks[hookType];

    // Puede ser un array de hooks o un objeto
    const hooks = Array.isArray(hookConfig) ? hookConfig : [hookConfig];

    for (const hook of hooks) {
      if (hook.command && typeof hook.command === 'string') {
        validHooks++;
        const matcher = hook.matcher || 'todos los eventos';
        hookDetails.push(`✅ ${hookType}: "${hook.command.substring(0, 30)}..." (${matcher})`);
      }
    }
  }

  results.checks.has_valid_hooks = validHooks > 0;

  if (validHooks === 0) {
    results.feedback.push("⚠️ Los hooks no tienen comandos válidos");
    results.feedback.push('💡 Cada hook necesita un "command"');
  } else {
    results.feedback.push(...hookDetails);
  }

  // Check 6: Hook tiene sentido práctico
  const allHooksContent = JSON.stringify(settings.hooks).toLowerCase();
  const practicalPatterns = [
    'echo', 'log', 'notify', 'git', 'test', 'lint',
    'format', 'backup', 'timestamp', 'validate'
  ];

  results.checks.is_practical = practicalPatterns.some(p => allHooksContent.includes(p));

  if (!results.checks.is_practical) {
    results.feedback.push("💡 Considera hooks que hagan algo útil (log, notify, git, etc.)");
  }

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.6;

  if (results.passed) {
    results.feedback.push("✅ ¡Tienes hooks configurados!");
  }

  // Pregunta conceptual
  results.conceptualQuestion = {
    question: "¿Cuándo usarías un Hook en vez de un Skill?",
    goodAnswers: [
      "Cuando quiero que algo pase AUTOMÁTICAMENTE sin tener que invocarlo",
      "Hooks se disparan solos, Skills los invoco yo con /comando",
      "Para tareas que siempre deben ocurrir (como logging o validación)",
      "Hooks son para automatización, Skills son para acciones bajo demanda"
    ],
    hint: "Un Skill es como un botón que presionas. Un Hook es como un sensor que se activa solo"
  };

  return results;
}
