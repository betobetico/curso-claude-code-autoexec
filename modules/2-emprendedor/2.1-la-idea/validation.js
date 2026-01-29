/**
 * Validation: 2.1 La Idea
 *
 * Verifica que el estudiante ha estructurado su idea
 * de negocio en un README.md válido.
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

  // Check 1: README.md existe
  const readmePath = path.join(projectDir, 'README.md');
  results.checks.readme_exists = fs.existsSync(readmePath);

  if (!results.checks.readme_exists) {
    results.feedback.push("❌ No encuentro README.md en tu proyecto");
    results.feedback.push("💡 Crea el archivo con tu idea estructurada");
    return results;
  }

  // Check 2: README tiene contenido sustancial
  const readmeContent = fs.readFileSync(readmePath, 'utf-8');
  results.checks.has_content = readmeContent.length > 200;

  if (!results.checks.has_content) {
    results.feedback.push("⚠️ El README parece muy corto");
    results.feedback.push("💡 Desarrolla más tu idea");
  }

  // Check 3: Tiene secciones clave
  const requiredSections = [
    { name: 'problema', patterns: ['problema', 'pain point', 'dolor', '## El Problema'] },
    { name: 'solucion', patterns: ['solución', 'soluciona', '## La Solución', '## Qué hace'] },
    { name: 'usuario', patterns: ['usuario', 'cliente', 'para quién', 'target', 'audiencia'] }
  ];

  const contentLower = readmeContent.toLowerCase();

  for (const section of requiredSections) {
    const hasSection = section.patterns.some(p => contentLower.includes(p.toLowerCase()));
    results.checks[`has_${section.name}`] = hasSection;

    if (!hasSection) {
      results.feedback.push(`⚠️ No veo claramente el ${section.name} definido`);
    }
  }

  // Check 4: Tiene título claro
  const hasTitle = readmeContent.startsWith('#') || readmeContent.includes('\n#');
  results.checks.has_title = hasTitle;

  if (!hasTitle) {
    results.feedback.push("⚠️ Falta un título claro para tu proyecto");
  }

  // Check 5: No es el README por defecto
  const isDefault = readmeContent.includes('# curso-claude-code') ||
                    readmeContent.includes('REBUNDLE');
  results.checks.is_original = !isDefault;

  if (!results.checks.is_original) {
    results.feedback.push("❌ Parece que es el README del curso, no de tu proyecto");
    results.feedback.push("💡 Crea un README nuevo para TU idea");
  }

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.7;

  if (results.passed) {
    results.feedback.push("✅ ¡Tu idea está bien estructurada!");
  }

  // Pregunta conceptual
  results.conceptualQuestion = {
    question: "¿Cuál es la diferencia entre el problema que describes y el síntoma del problema?",
    goodAnswers: [
      "El síntoma es lo que el usuario ve/siente, el problema es la causa raíz",
      "El problema es más profundo que lo que el usuario describe inicialmente",
      "Hay que preguntarse 'por qué' varias veces para llegar al problema real"
    ],
    hint: "Piensa en alguien que dice 'necesito un taladro'. ¿Es ese el problema o el síntoma?"
  };

  return results;
}
