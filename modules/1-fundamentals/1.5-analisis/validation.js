/**
 * Validation: 1.5 Análisis y Síntesis
 *
 * Verifica que el estudiante ha analizado datos
 * y encontrado patrones/insights accionables.
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

  // Check 1: Archivo de análisis creado
  const possibleOutputs = [
    'analisis.md',
    'informe-analisis.md',
    'insights.md',
    'hallazgos.md',
    'resumen-ejecutivo.md',
    'dashboard.md'
  ];

  let analysisFileFound = false;
  let analysisFilePath = null;
  let analysisContent = '';

  // Buscar en el directorio principal
  for (const output of possibleOutputs) {
    const fullPath = path.join(organizedDir, output);
    if (fs.existsSync(fullPath)) {
      analysisFileFound = true;
      analysisFilePath = fullPath;
      analysisContent = fs.readFileSync(fullPath, 'utf-8');
      break;
    }
  }

  results.checks.analysis_file_created = analysisFileFound;

  if (analysisContent) {
    // Check 2: Contiene hallazgos/insights
    const insightKeywords = ['hallazgo', 'insight', 'encontr', 'observ', 'patrón', 'tendencia', 'destaca'];
    const hasInsights = insightKeywords.some(kw =>
      analysisContent.toLowerCase().includes(kw)
    );
    results.checks.has_insights = hasInsights;

    // Check 3: Tiene datos cuantitativos
    const hasQuantitative = /\d+%|\d+\s?(facturas|contratos|documentos|total|promedio)/i.test(analysisContent);
    results.checks.has_quantitative_data = hasQuantitative;

    // Check 4: Compara o relaciona datos
    const comparisonKeywords = ['mayor', 'menor', 'más', 'menos', 'comparado', 'versus', 'vs', 'entre'];
    const hasComparison = comparisonKeywords.some(kw =>
      analysisContent.toLowerCase().includes(kw)
    );
    results.checks.has_comparisons = hasComparison;

    // Check 5: Incluye conclusiones o recomendaciones
    const conclusionKeywords = ['conclusión', 'recomend', 'suger', 'acción', 'siguiente paso', 'próximo'];
    const hasConclusions = conclusionKeywords.some(kw =>
      analysisContent.toLowerCase().includes(kw)
    );
    results.checks.has_conclusions = hasConclusions;
  } else {
    results.checks.has_insights = false;
    results.checks.has_quantitative_data = false;
    results.checks.has_comparisons = false;
    results.checks.has_conclusions = false;
  }

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.6;

  // Feedback
  if (results.passed) {
    results.feedback.push("✅ Análisis completado con éxito");
    if (results.checks.has_insights) {
      results.feedback.push("💡 Buenos insights identificados");
    }
    if (results.checks.has_conclusions) {
      results.feedback.push("🎯 Recomendaciones incluidas - excelente");
    }
  } else {
    if (!results.checks.analysis_file_created) {
      results.feedback.push("❌ No encontré el archivo de análisis");
      results.feedback.push("💡 Pide a Claude que analice los datos y genere un informe");
    }
    if (results.checks.analysis_file_created && !results.checks.has_insights) {
      results.feedback.push("⚠️ El análisis necesita más insights/hallazgos");
    }
    if (!results.checks.has_quantitative_data) {
      results.feedback.push("⚠️ Incluye datos numéricos para dar peso al análisis");
    }
  }

  return results;
}

/**
 * Preguntas conceptuales para esta microlección
 */
export const conceptualQuestions = [
  {
    question: "¿Cuál es la diferencia entre datos e insights?",
    acceptableAnswers: ["interpretar", "significado", "acción", "decisión", "contexto", "valor"],
    hint: "Los datos son hechos, los insights son..."
  },
  {
    question: "¿Por qué es importante incluir recomendaciones en un análisis?",
    acceptableAnswers: ["acción", "decisión", "siguiente paso", "útil", "aplicable", "valor"],
    hint: "¿Qué puede hacer el cliente con solo datos?"
  }
];
