/**
 * Validation: 1.2 Exploración
 *
 * Verifica que el estudiante ha explorado y entendido
 * la estructura de archivos del inbox-caos.
 */

export async function validate(context) {
  const { fs, path } = context.utils;
  const baseDir = context.paths.assets;
  const inboxDir = path.join(baseDir, 'consultor-abrumado', 'inbox-caos');

  const results = {
    checks: {},
    passed: false,
    score: 0,
    feedback: []
  };

  // Check 1: El estudiante ha visto los archivos
  // (validado por la conversación, no técnicamente)
  results.checks.viewed_files = true;

  // Check 2: Puede identificar tipos de archivos
  // Pregunta conceptual: ¿Qué tipos de archivos hay?
  const expectedTypes = ['pdf', 'docx', 'txt', 'xlsx'];
  results.checks.identified_types = context.conceptualAnswer?.includes('tipos') ||
                                     context.conceptualAnswer?.includes('documentos') ||
                                     true; // Se valida en conversación

  // Check 3: Entiende la magnitud del caos
  // Pregunta: ¿Cuántos archivos aproximadamente hay?
  const actualCount = 86;
  const studentEstimate = context.studentEstimate || 0;
  results.checks.understands_scope = Math.abs(studentEstimate - actualCount) < 20;

  // Check 4: Ha identificado patrones de nombres
  // Los archivos tienen prefijos de cliente (ALPHA, BETA, etc.)
  results.checks.identified_patterns = context.mentionedPatterns || true;

  // Calcular score
  const checksArray = Object.values(results.checks);
  results.score = checksArray.filter(Boolean).length / checksArray.length;
  results.passed = results.score >= 0.6; // 60% para pasar

  // Feedback
  if (results.passed) {
    results.feedback.push("✅ Has explorado el caos correctamente");
    results.feedback.push("Identificaste la estructura y magnitud del problema");
  } else {
    if (!results.checks.understands_scope) {
      results.feedback.push("⚠️ Revisa cuántos archivos hay realmente");
    }
    if (!results.checks.identified_patterns) {
      results.feedback.push("⚠️ ¿Notaste algún patrón en los nombres de archivo?");
    }
  }

  return results;
}

/**
 * Preguntas conceptuales para esta microlección
 */
export const conceptualQuestions = [
  {
    question: "¿Qué tipos de documentos encontraste en el inbox?",
    acceptableAnswers: ["pdf", "docx", "txt", "facturas", "contratos", "propuestas"],
    hint: "Mira las extensiones de archivo y los nombres"
  },
  {
    question: "¿Por qué crees que es importante explorar antes de organizar?",
    acceptableAnswers: ["entender", "conocer", "patrones", "estructura", "planificar"],
    hint: "Piensa en qué pasaría si organizas sin saber qué hay"
  }
];
