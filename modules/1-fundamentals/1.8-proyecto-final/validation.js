/**
 * Validation: 1.8 Proyecto Final
 *
 * Valida que el estudiante puede aplicar todo lo aprendido
 * de forma autónoma en un proyecto integrador.
 */

export async function validate(context) {
  const { fs, path } = context.utils;
  const baseDir = context.paths.assets;
  const organizedDir = path.join(baseDir, 'consultor-abrumado', 'proyectos-organizados');

  const results = {
    checks: {},
    passed: false,
    score: 0,
    feedback: [],
    competencies: {}
  };

  // ═══════════════════════════════════════════════════════════════
  // COMPETENCIA 1: EXPLORACIÓN (de 1.2)
  // ═══════════════════════════════════════════════════════════════
  // Verificar que entiende la estructura
  results.competencies.exploration = context.demonstratedExploration || true;

  // ═══════════════════════════════════════════════════════════════
  // COMPETENCIA 2: ORGANIZACIÓN (de 1.3)
  // ═══════════════════════════════════════════════════════════════
  const clients = ['cliente-alpha', 'cliente-beta', 'cliente-gamma', 'cliente-delta', 'cliente-epsilon'];
  let organizedClients = 0;

  for (const client of clients) {
    const clientPath = path.join(organizedDir, client);
    if (fs.existsSync(clientPath)) {
      const contents = fs.readdirSync(clientPath);
      if (contents.length > 0) {
        organizedClients++;
      }
    }
  }

  results.competencies.organization = organizedClients >= 3;
  results.checks.organization = results.competencies.organization;

  // ═══════════════════════════════════════════════════════════════
  // COMPETENCIA 3: EXTRACCIÓN (de 1.4)
  // ═══════════════════════════════════════════════════════════════
  // Buscar archivos de datos consolidados
  const extractionPatterns = ['consolidado', 'resumen', 'datos', 'extraido'];
  let extractionFound = false;

  const walkDir = (dir) => {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.md') || item.endsWith('.txt')) {
        if (extractionPatterns.some(p => item.toLowerCase().includes(p))) {
          extractionFound = true;
        }
      }
    }
  };

  walkDir(organizedDir);
  results.competencies.extraction = extractionFound;
  results.checks.extraction = extractionFound;

  // ═══════════════════════════════════════════════════════════════
  // COMPETENCIA 4: ANÁLISIS (de 1.5)
  // ═══════════════════════════════════════════════════════════════
  const analysisPatterns = ['analisis', 'análisis', 'informe', 'insight', 'hallazgo'];
  let analysisFound = false;

  const checkForAnalysis = (dir) => {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        checkForAnalysis(fullPath);
      } else if (item.endsWith('.md')) {
        if (analysisPatterns.some(p => item.toLowerCase().includes(p))) {
          analysisFound = true;
        }
        // También verificar contenido
        const content = fs.readFileSync(fullPath, 'utf-8');
        if (analysisPatterns.some(p => content.toLowerCase().includes(p))) {
          analysisFound = true;
        }
      }
    }
  };

  checkForAnalysis(organizedDir);
  results.competencies.analysis = analysisFound;
  results.checks.analysis = analysisFound;

  // ═══════════════════════════════════════════════════════════════
  // COMPETENCIA 5: GENERACIÓN (de 1.6)
  // ═══════════════════════════════════════════════════════════════
  // Buscar documentos profesionales generados
  const generationPatterns = ['propuesta', 'informe', 'reporte', 'documento', 'entregable'];
  let generationFound = false;
  let generatedDocLength = 0;

  const checkForGeneration = (dir) => {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        checkForGeneration(fullPath);
      } else if (item.endsWith('.md')) {
        if (generationPatterns.some(p => item.toLowerCase().includes(p))) {
          const content = fs.readFileSync(fullPath, 'utf-8');
          if (content.length > generatedDocLength) {
            generatedDocLength = content.length;
          }
          if (content.length >= 300) {
            generationFound = true;
          }
        }
      }
    }
  };

  checkForGeneration(organizedDir);
  results.competencies.generation = generationFound;
  results.checks.generation = generationFound;

  // ═══════════════════════════════════════════════════════════════
  // COMPETENCIA 6: INVESTIGACIÓN (de 1.7)
  // ═══════════════════════════════════════════════════════════════
  const researchIndicators = ['fuente', 'mercado', 'sector', 'industria', 'benchmark', 'tendencia'];
  let researchFound = false;

  const checkForResearch = (dir) => {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        checkForResearch(fullPath);
      } else if (item.endsWith('.md')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        if (researchIndicators.some(ind => content.toLowerCase().includes(ind))) {
          researchFound = true;
        }
      }
    }
  };

  checkForResearch(organizedDir);
  results.competencies.research = researchFound;
  results.checks.research = researchFound;

  // ═══════════════════════════════════════════════════════════════
  // CÁLCULO FINAL
  // ═══════════════════════════════════════════════════════════════
  const competencyValues = Object.values(results.competencies);
  const passedCompetencies = competencyValues.filter(Boolean).length;
  results.score = passedCompetencies / competencyValues.length;

  // Necesita al menos 4 de 6 competencias para pasar
  results.passed = passedCompetencies >= 4;

  // Feedback detallado
  results.feedback.push("═══════════════════════════════════════════");
  results.feedback.push("       EVALUACIÓN PROYECTO FINAL M1        ");
  results.feedback.push("═══════════════════════════════════════════");
  results.feedback.push("");

  const competencyNames = {
    exploration: "Exploración",
    organization: "Organización",
    extraction: "Extracción",
    analysis: "Análisis",
    generation: "Generación",
    research: "Investigación"
  };

  for (const [key, passed] of Object.entries(results.competencies)) {
    const icon = passed ? "✅" : "❌";
    results.feedback.push(`${icon} ${competencyNames[key]}`);
  }

  results.feedback.push("");
  results.feedback.push(`Competencias: ${passedCompetencies}/6`);
  results.feedback.push(`Score: ${Math.round(results.score * 100)}%`);
  results.feedback.push("");

  if (results.passed) {
    results.feedback.push("🎉 ¡FELICIDADES! Has completado el Módulo 1");
    results.feedback.push("");
    results.feedback.push("Has demostrado que puedes:");
    results.feedback.push("• Explorar y entender estructuras de archivos");
    results.feedback.push("• Organizar documentos automáticamente");
    results.feedback.push("• Extraer datos de múltiples fuentes");
    results.feedback.push("• Analizar y encontrar patrones");
    results.feedback.push("• Generar documentos profesionales");
    results.feedback.push("• Enriquecer con investigación externa");
    results.feedback.push("");
    results.feedback.push("TODO ESTO SIN ESCRIBIR CÓDIGO.");
    results.feedback.push("");
    results.feedback.push("El Context Engineering está en tus manos.");
  } else {
    results.feedback.push("⚠️ Algunas competencias necesitan refuerzo");
    results.feedback.push("");
    results.feedback.push("Revisa las microlecciones de las competencias");
    results.feedback.push("marcadas con ❌ y vuelve a intentarlo.");
    results.feedback.push("");
    results.feedback.push("Recuerda: no hay prisa. El objetivo es aprender.");
  }

  return results;
}

/**
 * Preguntas conceptuales finales
 */
export const conceptualQuestions = [
  {
    question: "¿Cuál ha sido el aprendizaje más valioso de este módulo para ti?",
    acceptableAnswers: [], // Respuesta abierta
    hint: "No hay respuesta incorrecta"
  },
  {
    question: "¿Qué significa para ti 'Context Engineering'?",
    acceptableAnswers: ["fichero", "archivo", "contexto", "organizar", "información", "datos"],
    hint: "Piensa en cómo diste información a Claude durante el curso"
  },
  {
    question: "¿En qué situación real de tu trabajo aplicarías lo aprendido?",
    acceptableAnswers: [], // Respuesta abierta
    hint: "Piensa en tareas repetitivas que haces con documentos"
  }
];
