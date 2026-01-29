/**
 * Validation: 1.7 Investigación Web
 *
 * Verifica que el estudiante ha enriquecido datos internos
 * con información de fuentes externas.
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

  // Check 1: Archivo con investigación creado
  const possibleOutputs = [
    'investigacion.md',
    'research.md',
    'benchmark.md',
    'analisis-mercado.md',
    'contexto-externo.md',
    'informe-enriquecido.md'
  ];

  let researchFound = false;
  let researchPath = null;
  let researchContent = '';

  // Buscar en el directorio principal y subcarpetas
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
        researchFound = true;
        researchPath = fullPath;
        researchContent = fs.readFileSync(fullPath, 'utf-8');
        break;
      }
    }
    if (researchFound) break;
  }

  results.checks.research_file_created = researchFound;

  if (researchContent) {
    // Check 2: Contiene información externa (fuentes, links, referencias)
    const externalIndicators = ['fuente', 'según', 'estudio', 'informe', 'mercado', 'industria', 'sector', 'tendencia', 'estadística'];
    const hasExternalData = externalIndicators.some(ind =>
      researchContent.toLowerCase().includes(ind)
    );
    results.checks.has_external_data = hasExternalData;

    // Check 3: Conecta datos externos con internos
    const connectionIndicators = ['compar', 'context', 'relación', 'mientras', 'en contraste', 'similar', 'nuestro'];
    const connectsData = connectionIndicators.some(ind =>
      researchContent.toLowerCase().includes(ind)
    );
    results.checks.connects_internal_external = connectsData;

    // Check 4: Tiene fuentes o referencias
    const hasReferences = /fuente|referencia|según|source|http|www\./i.test(researchContent);
    results.checks.has_references = hasReferences;

    // Check 5: Aporta valor adicional (insights, recomendaciones)
    const valueIndicators = ['oportunidad', 'riesgo', 'recomend', 'consider', 'important', 'clave', 'destacar'];
    const addsValue = valueIndicators.some(ind =>
      researchContent.toLowerCase().includes(ind)
    );
    results.checks.adds_value = addsValue;
  } else {
    results.checks.has_external_data = false;
    results.checks.connects_internal_external = false;
    results.checks.has_references = false;
    results.checks.adds_value = false;
  }

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.6;

  // Feedback
  if (results.passed) {
    results.feedback.push("✅ Investigación completada con éxito");
    if (results.checks.has_external_data) {
      results.feedback.push("🌐 Buena incorporación de datos externos");
    }
    if (results.checks.connects_internal_external) {
      results.feedback.push("🔗 Excelente conexión entre datos internos y externos");
    }
    if (results.checks.adds_value) {
      results.feedback.push("💡 La investigación aporta valor adicional");
    }
  } else {
    if (!results.checks.research_file_created) {
      results.feedback.push("❌ No encontré el archivo de investigación");
      results.feedback.push("💡 Pide a Claude que investigue sobre el sector del cliente");
    }
    if (results.checks.research_file_created && !results.checks.has_external_data) {
      results.feedback.push("⚠️ Falta información de fuentes externas");
    }
    if (!results.checks.connects_internal_external) {
      results.feedback.push("⚠️ Conecta la investigación con los datos del cliente");
    }
  }

  return results;
}

/**
 * Preguntas conceptuales para esta microlección
 */
export const conceptualQuestions = [
  {
    question: "¿Por qué es valioso combinar datos internos con investigación externa?",
    acceptableAnswers: ["contexto", "perspectiva", "comparar", "benchmark", "completo", "valor"],
    hint: "¿Qué le falta a un análisis que solo mira datos internos?"
  },
  {
    question: "¿Cómo validas la calidad de la información que encuentras?",
    acceptableAnswers: ["fuente", "fecha", "credibilidad", "verificar", "contrastar", "oficial"],
    hint: "No toda la información en internet es confiable"
  }
];
