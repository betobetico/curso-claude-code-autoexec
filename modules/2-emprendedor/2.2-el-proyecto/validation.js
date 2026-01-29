/**
 * Validation: 2.2 El Proyecto
 *
 * Verifica que el estudiante ha creado un CLAUDE.md
 * personalizado para su proyecto.
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

  // Check 1: Carpeta .claude existe
  const claudeDir = path.join(projectDir, '.claude');
  results.checks.claude_dir_exists = fs.existsSync(claudeDir);

  if (!results.checks.claude_dir_exists) {
    results.feedback.push("❌ No encuentro la carpeta .claude/");
    results.feedback.push("💡 Créala con: mkdir .claude");
    return results;
  }

  // Check 2: CLAUDE.md existe
  const claudeMdPath = path.join(claudeDir, 'CLAUDE.md');
  results.checks.claude_md_exists = fs.existsSync(claudeMdPath);

  if (!results.checks.claude_md_exists) {
    results.feedback.push("❌ No encuentro .claude/CLAUDE.md");
    results.feedback.push("💡 Este archivo es el 'cerebro' de tu proyecto");
    return results;
  }

  // Check 3: CLAUDE.md tiene contenido
  const claudeContent = fs.readFileSync(claudeMdPath, 'utf-8');
  results.checks.has_content = claudeContent.length > 100;

  if (!results.checks.has_content) {
    results.feedback.push("⚠️ Tu CLAUDE.md parece muy corto");
    results.feedback.push("💡 Incluye contexto, reglas y comportamiento");
  }

  // Check 4: Tiene secciones importantes
  const importantSections = [
    { name: 'contexto', patterns: ['contexto', 'context', '## Sobre', '## Qué es'] },
    { name: 'reglas', patterns: ['regla', 'rule', 'comportamiento', 'debe', 'no debe'] },
    { name: 'tono', patterns: ['tono', 'estilo', 'personalidad', 'voz'] }
  ];

  const contentLower = claudeContent.toLowerCase();

  for (const section of importantSections) {
    const hasSection = section.patterns.some(p => contentLower.includes(p.toLowerCase()));
    results.checks[`has_${section.name}`] = hasSection;

    if (!hasSection) {
      results.feedback.push(`💡 Considera añadir ${section.name} a tu CLAUDE.md`);
    }
  }

  // Check 5: Es personalizado (no copia del curso)
  const isCopy = claudeContent.includes('Consultor Abrumado') ||
                 claudeContent.includes('REBUNDLE') ||
                 claudeContent.includes('inbox-caos');
  results.checks.is_personalized = !isCopy;

  if (!results.checks.is_personalized) {
    results.feedback.push("⚠️ Parece una copia del CLAUDE.md del curso");
    results.feedback.push("💡 Personalízalo para TU proyecto");
  }

  // Check 6: Menciona el proyecto del estudiante
  const readmePath = path.join(projectDir, 'README.md');
  if (fs.existsSync(readmePath)) {
    const readmeContent = fs.readFileSync(readmePath, 'utf-8');
    // Buscar si el nombre del proyecto aparece en el CLAUDE.md
    const firstLine = readmeContent.split('\n')[0].replace('#', '').trim();
    if (firstLine && claudeContent.includes(firstLine.substring(0, 20))) {
      results.checks.references_project = true;
    } else {
      results.checks.references_project = false;
      results.feedback.push("💡 Menciona el nombre de tu proyecto en CLAUDE.md");
    }
  }

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.6;

  if (results.passed) {
    results.feedback.push("✅ ¡Tienes un CLAUDE.md personalizado!");
  }

  // Pregunta conceptual
  results.conceptualQuestion = {
    question: "¿Por qué es importante definir reglas de comportamiento en CLAUDE.md?",
    goodAnswers: [
      "Para que Claude sea consistente en todas las interacciones",
      "Para no tener que repetir las mismas instrucciones cada vez",
      "Para que el proyecto tenga una 'personalidad' definida",
      "Es parte del Context Engineering - dar contexto persistente"
    ],
    hint: "Piensa en qué pasaría si cada vez que abres el proyecto Claude se comportara diferente"
  };

  return results;
}
