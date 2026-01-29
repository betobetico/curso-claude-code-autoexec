/**
 * Validation: 2.6 El Sistema (Final del Módulo 2)
 *
 * Evaluación comprehensiva del proyecto completo.
 * Verifica que el estudiante tiene un "toolkit de emprendedor" funcional.
 */
export async function validate(context) {
  const { fs, path } = context.utils;
  const projectDir = context.paths.studentProject;

  const results = {
    checks: {},
    passed: false,
    score: 0,
    feedback: [],
    conceptualQuestion: null,
    competencies: {}
  };

  // ============================================
  // COMPETENCIA 1: Documentación del Proyecto
  // ============================================
  const readmePath = path.join(projectDir, 'README.md');
  const hasReadme = fs.existsSync(readmePath);

  let readmeQuality = 0;
  if (hasReadme) {
    const content = fs.readFileSync(readmePath, 'utf-8');
    if (content.length > 200) readmeQuality += 0.3;
    if (content.includes('##')) readmeQuality += 0.2; // Tiene secciones
    if (content.toLowerCase().includes('problema')) readmeQuality += 0.25;
    if (content.toLowerCase().includes('solución')) readmeQuality += 0.25;
  }

  results.competencies.documentation = {
    name: "Documentación",
    score: readmeQuality,
    passed: readmeQuality >= 0.6
  };

  // ============================================
  // COMPETENCIA 2: Configuración de Claude
  // ============================================
  const claudeMdPath = path.join(projectDir, '.claude', 'CLAUDE.md');
  const hasClaudeMd = fs.existsSync(claudeMdPath);

  let claudeQuality = 0;
  if (hasClaudeMd) {
    const content = fs.readFileSync(claudeMdPath, 'utf-8');
    if (content.length > 100) claudeQuality += 0.4;
    if (content.toLowerCase().includes('contexto') || content.includes('##')) claudeQuality += 0.3;
    if (content.toLowerCase().includes('regla') || content.toLowerCase().includes('debe')) claudeQuality += 0.3;
  }

  results.competencies.claude_config = {
    name: "CLAUDE.md",
    score: claudeQuality,
    passed: claudeQuality >= 0.6
  };

  // ============================================
  // COMPETENCIA 3: Skills Personalizados
  // ============================================
  const commandsDir = path.join(projectDir, '.claude', 'commands');
  const hasCommands = fs.existsSync(commandsDir);

  let skillsQuality = 0;
  let skillsCount = 0;
  if (hasCommands) {
    const commands = fs.readdirSync(commandsDir).filter(f => f.endsWith('.md'));
    skillsCount = commands.length;
    if (skillsCount >= 1) skillsQuality += 0.5;
    if (skillsCount >= 2) skillsQuality += 0.3;
    if (skillsCount >= 3) skillsQuality += 0.2;
  }

  results.competencies.skills = {
    name: "Skills",
    score: skillsQuality,
    passed: skillsQuality >= 0.5,
    count: skillsCount
  };

  // ============================================
  // COMPETENCIA 4: Hooks
  // ============================================
  const settingsPath = path.join(projectDir, '.claude', 'settings.json');
  const settingsLocalPath = path.join(projectDir, '.claude', 'settings.local.json');
  const hasSettings = fs.existsSync(settingsPath) || fs.existsSync(settingsLocalPath);

  let hooksQuality = 0;
  if (hasSettings) {
    try {
      const settingsFile = fs.existsSync(settingsPath) ? settingsPath : settingsLocalPath;
      const settings = JSON.parse(fs.readFileSync(settingsFile, 'utf-8'));
      if (settings.hooks) {
        const hookCount = Object.keys(settings.hooks).length;
        if (hookCount >= 1) hooksQuality += 0.6;
        if (hookCount >= 2) hooksQuality += 0.4;
      }
    } catch (e) {
      hooksQuality = 0;
    }
  }

  results.competencies.hooks = {
    name: "Hooks",
    score: hooksQuality,
    passed: hooksQuality >= 0.5
  };

  // ============================================
  // COMPETENCIA 5: Landing Page
  // ============================================
  const possibleLandings = ['index.html', 'landing.html', 'public/index.html'];
  let landingPath = null;
  for (const p of possibleLandings) {
    if (fs.existsSync(path.join(projectDir, p))) {
      landingPath = path.join(projectDir, p);
      break;
    }
  }

  let landingQuality = 0;
  if (landingPath) {
    const content = fs.readFileSync(landingPath, 'utf-8');
    if (content.includes('<html')) landingQuality += 0.2;
    if (content.includes('<h1') || content.includes('<h2')) landingQuality += 0.2;
    if (content.includes('<p')) landingQuality += 0.2;
    if (content.includes('<style') || content.includes('stylesheet')) landingQuality += 0.2;
    if (content.length > 500) landingQuality += 0.2;
  }

  results.competencies.landing = {
    name: "Landing Page",
    score: landingQuality,
    passed: landingQuality >= 0.6
  };

  // ============================================
  // COMPETENCIA 6: Coherencia del Sistema
  // ============================================
  // Verifica que todo el proyecto tiene coherencia
  let coherenceScore = 0;
  const components = [hasReadme, hasClaudeMd, hasCommands, hasSettings, landingPath !== null];
  const componentCount = components.filter(Boolean).length;

  coherenceScore = componentCount / 5;

  results.competencies.coherence = {
    name: "Sistema Completo",
    score: coherenceScore,
    passed: coherenceScore >= 0.6,
    components: componentCount
  };

  // ============================================
  // CALCULAR RESULTADO FINAL
  // ============================================
  const competencyScores = Object.values(results.competencies).map(c => c.score);
  const avgScore = competencyScores.reduce((a, b) => a + b, 0) / competencyScores.length;
  const passedCompetencies = Object.values(results.competencies).filter(c => c.passed).length;

  results.score = avgScore;
  results.passed = passedCompetencies >= 4; // 4 de 6 competencias

  // ============================================
  // GENERAR FEEDBACK
  // ============================================
  results.feedback.push("═══════════════════════════════════════");
  results.feedback.push("         EVALUACIÓN FINAL - MÓDULO 2    ");
  results.feedback.push("═══════════════════════════════════════");
  results.feedback.push("");

  for (const [key, comp] of Object.entries(results.competencies)) {
    const status = comp.passed ? "✅" : "⚠️";
    const percentage = Math.round(comp.score * 100);
    let extra = "";
    if (comp.count !== undefined) extra = ` (${comp.count} creados)`;
    if (comp.components !== undefined) extra = ` (${comp.components}/5 componentes)`;

    results.feedback.push(`${status} ${comp.name}: ${percentage}%${extra}`);
  }

  results.feedback.push("");
  results.feedback.push("───────────────────────────────────────");
  results.feedback.push(`   Competencias aprobadas: ${passedCompetencies}/6`);
  results.feedback.push(`   Score total: ${Math.round(avgScore * 100)}%`);
  results.feedback.push("───────────────────────────────────────");

  if (results.passed) {
    results.feedback.push("");
    results.feedback.push("🎉 ¡MÓDULO 2 COMPLETADO!");
    results.feedback.push("");
    results.feedback.push("Has construido tu toolkit de emprendedor:");
    results.feedback.push("• README.md → Tu idea documentada");
    results.feedback.push("• CLAUDE.md → Las reglas de tu proyecto");
    results.feedback.push("• Skills → Tus comandos personalizados");
    results.feedback.push("• Hooks → Automatización que trabaja por ti");
    results.feedback.push("• Landing → Tu proyecto visible al mundo");
    results.feedback.push("");
    results.feedback.push("De consultor abrumado a emprendedor equipado. 🚀");
  } else {
    results.feedback.push("");
    results.feedback.push("⚠️ Casi lo tienes");
    results.feedback.push("Revisa las competencias marcadas con ⚠️");
  }

  // Pregunta conceptual final
  results.conceptualQuestion = {
    question: "¿Qué significa 'Context Engineering' y cómo lo has aplicado en tu proyecto?",
    goodAnswers: [
      "Dar contexto a Claude a través de ficheros, no solo prompts",
      "README, CLAUDE.md, Skills y Hooks son todos formas de dar contexto",
      "Los ficheros son el nuevo prompt - organizan la información para Claude",
      "En vez de escribir instrucciones cada vez, las estructuro en archivos"
    ],
    hint: "Piensa en todos los archivos que creaste y cómo cada uno le da información a Claude"
  };

  return results;
}
