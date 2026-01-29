/**
 * Validation: 1.3 Organización (WOW Moment)
 *
 * Verifica que los 86 archivos del inbox-caos
 * han sido organizados correctamente por cliente.
 */

export async function validate(context) {
  const { fs, path } = context.utils;
  const baseDir = context.paths.assets;
  const inboxDir = path.join(baseDir, 'consultor-abrumado', 'inbox-caos');
  const organizedDir = path.join(baseDir, 'consultor-abrumado', 'proyectos-organizados');

  const results = {
    checks: {},
    passed: false,
    score: 0,
    feedback: []
  };

  // Check 1: Carpetas de cliente creadas
  const expectedClients = ['cliente-alpha', 'cliente-beta', 'cliente-gamma', 'cliente-delta', 'cliente-epsilon'];
  let clientFoldersCreated = 0;

  for (const client of expectedClients) {
    const clientPath = path.join(organizedDir, client);
    if (fs.existsSync(clientPath)) {
      clientFoldersCreated++;
    }
  }

  results.checks.client_folders = clientFoldersCreated >= 4; // Al menos 4 de 5

  // Check 2: Subcarpetas de tipo creadas
  const expectedSubfolders = ['contratos', 'facturas', 'propuestas', 'correspondencia'];
  let subfoldersFound = 0;

  for (const client of expectedClients) {
    for (const subfolder of expectedSubfolders) {
      const subPath = path.join(organizedDir, client, subfolder);
      if (fs.existsSync(subPath)) {
        subfoldersFound++;
      }
    }
  }

  results.checks.subfolders = subfoldersFound >= 10; // Al menos 10 subcarpetas

  // Check 3: Archivos movidos del inbox
  const remainingFiles = fs.existsSync(inboxDir)
    ? fs.readdirSync(inboxDir).filter(f => !f.startsWith('.')).length
    : 0;

  results.checks.files_moved = remainingFiles < 10; // Menos de 10 archivos sin organizar

  // Check 4: Archivos en carpetas correctas (spot check)
  let correctPlacements = 0;
  const spotChecks = [
    { file: 'contrato', folder: 'contratos' },
    { file: 'factura', folder: 'facturas' },
    { file: 'propuesta', folder: 'propuestas' }
  ];

  for (const client of expectedClients) {
    for (const check of spotChecks) {
      const folderPath = path.join(organizedDir, client, check.folder);
      if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath);
        if (files.some(f => f.toLowerCase().includes(check.file))) {
          correctPlacements++;
        }
      }
    }
  }

  results.checks.correct_placement = correctPlacements >= 5;

  // Check 5: Índice generado (opcional pero deseable)
  const indexPath = path.join(organizedDir, 'INDICE.md');
  results.checks.index_created = fs.existsSync(indexPath);

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.6; // 60% para pasar (3 de 5 checks)

  // Feedback detallado
  if (results.passed) {
    results.feedback.push("✅ ¡WOW! Has organizado el caos exitosamente");
    results.feedback.push(`📁 ${clientFoldersCreated} carpetas de cliente creadas`);
    results.feedback.push(`📂 ${subfoldersFound} subcarpetas organizadas`);
    if (results.checks.index_created) {
      results.feedback.push("📋 Índice generado - excelente iniciativa");
    }
  } else {
    if (!results.checks.client_folders) {
      results.feedback.push("❌ Faltan carpetas de cliente");
    }
    if (!results.checks.files_moved) {
      results.feedback.push(`⚠️ Quedan ${remainingFiles} archivos sin organizar en inbox`);
    }
    if (!results.checks.correct_placement) {
      results.feedback.push("⚠️ Algunos archivos no están en la carpeta correcta");
    }
  }

  // Stats para mostrar
  results.stats = {
    clientFolders: clientFoldersCreated,
    subfolders: subfoldersFound,
    remainingInInbox: remainingFiles,
    correctPlacements: correctPlacements
  };

  return results;
}

/**
 * Preguntas conceptuales para esta microlección
 */
export const conceptualQuestions = [
  {
    question: "¿Por qué organizamos primero por cliente y luego por tipo de documento?",
    acceptableAnswers: ["cliente", "proyecto", "contexto", "relacionados", "juntos"],
    hint: "Piensa en cómo buscas información cuando trabajas con un cliente"
  },
  {
    question: "¿Qué ventaja tiene organizar automáticamente vs manualmente?",
    acceptableAnswers: ["tiempo", "rápido", "consistencia", "error", "escala"],
    hint: "Imagina hacer esto con 1000 archivos"
  }
];
