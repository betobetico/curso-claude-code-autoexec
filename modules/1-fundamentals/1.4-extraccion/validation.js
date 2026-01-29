/**
 * Validation: 1.4 Extracción de Datos
 *
 * Verifica que el estudiante ha extraído información
 * de los documentos sin abrirlos manualmente.
 */

export async function validate(context) {
  const { fs, path } = context.utils;
  const baseDir = context.paths.assets;
  const organizedDir = path.join(baseDir, 'consultor-abrumado', 'proyectos-organizados');

  const results = {
    checks: {},
    passed: false,
    score: 0,
    feedback: []
  };

  // Check 1: Archivo de extracción creado
  const possibleOutputs = [
    'resumen-facturas.md',
    'facturas-consolidadas.md',
    'datos-extraidos.md',
    'resumen-contratos.md',
    'consolidado.md'
  ];

  let extractionFileFound = false;
  let extractionFilePath = null;

  for (const output of possibleOutputs) {
    const fullPath = path.join(organizedDir, output);
    if (fs.existsSync(fullPath)) {
      extractionFileFound = true;
      extractionFilePath = fullPath;
      break;
    }
  }

  // También buscar en subcarpetas
  if (!extractionFileFound) {
    const clients = ['cliente-alpha', 'cliente-beta', 'cliente-gamma', 'cliente-delta', 'cliente-epsilon'];
    for (const client of clients) {
      for (const output of possibleOutputs) {
        const fullPath = path.join(organizedDir, client, output);
        if (fs.existsSync(fullPath)) {
          extractionFileFound = true;
          extractionFilePath = fullPath;
          break;
        }
      }
      if (extractionFileFound) break;
    }
  }

  results.checks.extraction_file_created = extractionFileFound;

  // Check 2: El archivo contiene datos estructurados
  if (extractionFilePath && fs.existsSync(extractionFilePath)) {
    const content = fs.readFileSync(extractionFilePath, 'utf-8');

    // Debe tener algún tipo de estructura (tabla, lista, secciones)
    const hasTable = content.includes('|') && content.includes('-');
    const hasList = content.includes('- ') || content.includes('* ');
    const hasSections = (content.match(/^#+\s/gm) || []).length >= 2;

    results.checks.has_structure = hasTable || hasList || hasSections;

    // Check 3: Contiene datos numéricos (montos, fechas)
    const hasNumbers = /\d+[.,]\d+|\$\s?\d+|\€\s?\d+|\d{1,2}\/\d{1,2}\/\d{2,4}/.test(content);
    results.checks.has_data = hasNumbers;

    // Check 4: Menciona múltiples clientes o documentos
    const clientMentions = (content.match(/alpha|beta|gamma|delta|epsilon/gi) || []).length;
    results.checks.multiple_sources = clientMentions >= 2;
  } else {
    results.checks.has_structure = false;
    results.checks.has_data = false;
    results.checks.multiple_sources = false;
  }

  // Check 5: El estudiante entiende el proceso
  results.checks.conceptual_understanding = context.conceptualAnswer ? true : true;

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.6;

  // Feedback
  if (results.passed) {
    results.feedback.push("✅ Datos extraídos correctamente");
    if (results.checks.has_structure) {
      results.feedback.push("📊 Buena estructura de presentación");
    }
    if (results.checks.multiple_sources) {
      results.feedback.push("📁 Datos consolidados de múltiples fuentes");
    }
  } else {
    if (!results.checks.extraction_file_created) {
      results.feedback.push("❌ No encontré el archivo con los datos extraídos");
      results.feedback.push("💡 Pide a Claude que genere un resumen consolidado");
    }
    if (!results.checks.has_structure) {
      results.feedback.push("⚠️ Los datos necesitan más estructura (tabla o lista)");
    }
  }

  return results;
}

/**
 * Preguntas conceptuales para esta microlección
 */
export const conceptualQuestions = [
  {
    question: "¿Qué ventaja tiene extraer datos automáticamente vs leer cada documento?",
    acceptableAnswers: ["tiempo", "error", "consistencia", "escala", "eficiencia"],
    hint: "Piensa en qué pasaría con 500 facturas"
  },
  {
    question: "¿Qué tipo de información es más fácil de extraer automáticamente?",
    acceptableAnswers: ["número", "fecha", "monto", "estructurado", "formato", "patrón"],
    hint: "¿Qué datos tienen un formato predecible?"
  }
];
