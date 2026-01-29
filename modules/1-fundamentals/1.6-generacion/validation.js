/**
 * Validation: 1.6 Generación de Contenido
 *
 * Verifica que el estudiante ha creado documentos
 * profesionales automáticamente.
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

  // Check 1: Documento generado existe
  const possibleOutputs = [
    'informe-cliente.md',
    'propuesta.md',
    'resumen-proyecto.md',
    'entregable.md',
    'documento-final.md',
    'reporte.md'
  ];

  let documentFound = false;
  let documentPath = null;
  let documentContent = '';

  // Buscar en el directorio principal y en carpetas de cliente
  const searchDirs = [organizedDir];
  const clients = ['cliente-alpha', 'cliente-beta', 'cliente-gamma', 'cliente-delta', 'cliente-epsilon'];
  clients.forEach(client => {
    searchDirs.push(path.join(organizedDir, client));
  });

  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const output of possibleOutputs) {
      const fullPath = path.join(dir, output);
      if (fs.existsSync(fullPath)) {
        documentFound = true;
        documentPath = fullPath;
        documentContent = fs.readFileSync(fullPath, 'utf-8');
        break;
      }
    }
    if (documentFound) break;
  }

  results.checks.document_created = documentFound;

  if (documentContent) {
    // Check 2: Tiene estructura markdown profesional
    const hasTitle = /^#\s+.+/m.test(documentContent);
    const hasSections = (documentContent.match(/^##\s+.+/gm) || []).length >= 2;
    results.checks.professional_structure = hasTitle && hasSections;

    // Check 3: Longitud razonable (mínimo 200 caracteres)
    results.checks.adequate_length = documentContent.length >= 200;

    // Check 4: Usa datos del contexto (menciona clientes o documentos)
    const usesContext = /alpha|beta|gamma|delta|epsilon|factura|contrato|propuesta/i.test(documentContent);
    results.checks.uses_context = usesContext;

    // Check 5: Tiene tono profesional
    const professionalIndicators = ['estimado', 'adjunto', 'resumen', 'objetivo', 'conclusión', 'atentamente'];
    const hasProfessionalTone = professionalIndicators.some(ind =>
      documentContent.toLowerCase().includes(ind)
    );
    results.checks.professional_tone = hasProfessionalTone;
  } else {
    results.checks.professional_structure = false;
    results.checks.adequate_length = false;
    results.checks.uses_context = false;
    results.checks.professional_tone = false;
  }

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.6;

  // Feedback
  if (results.passed) {
    results.feedback.push("✅ Documento profesional generado");
    if (results.checks.professional_structure) {
      results.feedback.push("📄 Estructura clara y profesional");
    }
    if (results.checks.uses_context) {
      results.feedback.push("🎯 Integra datos del contexto correctamente");
    }
  } else {
    if (!results.checks.document_created) {
      results.feedback.push("❌ No encontré el documento generado");
      results.feedback.push("💡 Pide a Claude que genere un informe para un cliente");
    }
    if (results.checks.document_created && !results.checks.professional_structure) {
      results.feedback.push("⚠️ El documento necesita mejor estructura (títulos, secciones)");
    }
    if (!results.checks.uses_context) {
      results.feedback.push("⚠️ El documento debería usar datos de los archivos del cliente");
    }
  }

  return results;
}

/**
 * Preguntas conceptuales para esta microlección
 */
export const conceptualQuestions = [
  {
    question: "¿Por qué es importante que el documento use datos reales del contexto?",
    acceptableAnswers: ["personalizado", "específico", "relevante", "credibilidad", "valor", "útil"],
    hint: "¿Qué diferencia hay entre un documento genérico y uno personalizado?"
  },
  {
    question: "¿Qué elementos hacen que un documento sea profesional?",
    acceptableAnswers: ["estructura", "tono", "formato", "claro", "organizado", "secciones"],
    hint: "Piensa en los documentos que recibes de profesionales"
  }
];
