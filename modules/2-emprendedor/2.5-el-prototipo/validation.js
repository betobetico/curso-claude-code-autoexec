/**
 * Validation: 2.5 El Prototipo
 *
 * Verifica que el estudiante ha creado una landing page
 * funcional para su proyecto.
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

  // Posibles ubicaciones de la landing page
  const possiblePaths = [
    'index.html',
    'landing.html',
    'public/index.html',
    'site/index.html',
    'web/index.html'
  ];

  // Check 1: Existe algún archivo HTML
  let landingPath = null;
  for (const p of possiblePaths) {
    const fullPath = path.join(projectDir, p);
    if (fs.existsSync(fullPath)) {
      landingPath = fullPath;
      break;
    }
  }

  results.checks.html_exists = landingPath !== null;

  if (!results.checks.html_exists) {
    results.feedback.push("❌ No encuentro una landing page (index.html)");
    results.feedback.push("💡 Crea un archivo index.html en tu proyecto");
    return results;
  }

  results.feedback.push(`📄 Landing encontrada: ${path.basename(path.dirname(landingPath))}/${path.basename(landingPath)}`);

  // Check 2: El HTML tiene estructura válida
  const htmlContent = fs.readFileSync(landingPath, 'utf-8');

  results.checks.has_doctype = htmlContent.toLowerCase().includes('<!doctype html');
  results.checks.has_html_tag = htmlContent.includes('<html');
  results.checks.has_head = htmlContent.includes('<head');
  results.checks.has_body = htmlContent.includes('<body');

  const structureValid = results.checks.has_html_tag &&
                         results.checks.has_head &&
                         results.checks.has_body;

  if (!structureValid) {
    results.feedback.push("⚠️ El HTML parece incompleto");
    if (!results.checks.has_head) results.feedback.push("   - Falta <head>");
    if (!results.checks.has_body) results.feedback.push("   - Falta <body>");
  }

  // Check 3: Tiene título
  const titleMatch = htmlContent.match(/<title>(.+?)<\/title>/i);
  results.checks.has_title = titleMatch !== null && titleMatch[1].length > 0;

  if (!results.checks.has_title) {
    results.feedback.push("💡 Añade un <title> a tu página");
  } else {
    results.feedback.push(`📌 Título: "${titleMatch[1]}"`);
  }

  // Check 4: Tiene contenido relevante (no es solo boilerplate)
  const hasHeading = /<h1|<h2/i.test(htmlContent);
  const hasParagraph = /<p/i.test(htmlContent);
  const hasButton = /<button|<a.*class.*btn/i.test(htmlContent);

  results.checks.has_heading = hasHeading;
  results.checks.has_content = hasParagraph;
  results.checks.has_cta = hasButton;

  if (!hasHeading) {
    results.feedback.push("💡 Añade un titular principal (<h1>)");
  }
  if (!hasParagraph) {
    results.feedback.push("💡 Añade texto descriptivo (<p>)");
  }
  if (!hasButton) {
    results.feedback.push("💡 Considera añadir un botón de llamada a la acción");
  }

  // Check 5: Tiene estilos (CSS inline o enlazado)
  const hasStyles = htmlContent.includes('<style') ||
                    htmlContent.includes('stylesheet') ||
                    htmlContent.includes('tailwind') ||
                    htmlContent.includes('style=');

  results.checks.has_styles = hasStyles;

  if (!hasStyles) {
    results.feedback.push("💡 La página no tiene estilos CSS visibles");
  }

  // Check 6: Menciona el proyecto (coherencia con README)
  const readmePath = path.join(projectDir, 'README.md');
  if (fs.existsSync(readmePath)) {
    const readmeContent = fs.readFileSync(readmePath, 'utf-8');
    const projectName = readmeContent.split('\n')[0].replace('#', '').trim();

    if (projectName && htmlContent.includes(projectName.substring(0, 15))) {
      results.checks.matches_project = true;
    } else {
      results.checks.matches_project = false;
      results.feedback.push("💡 La landing debería mencionar el nombre de tu proyecto");
    }
  }

  // Check 7: Tiene contenido mínimo viable
  const contentLength = htmlContent.replace(/<[^>]*>/g, '').trim().length;
  results.checks.has_substantial_content = contentLength > 100;

  if (!results.checks.has_substantial_content) {
    results.feedback.push("⚠️ La página tiene muy poco contenido de texto");
  }

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.5;

  if (results.passed) {
    results.feedback.push("✅ ¡Tienes una landing page funcional!");
    results.feedback.push("🌐 Ábrela en tu navegador para verla");
  }

  // Pregunta conceptual
  results.conceptualQuestion = {
    question: "¿Qué es 'Vibe Coding' y por qué funciona para crear prototipos?",
    goodAnswers: [
      "Describir lo que quieres y que Claude lo genere, sin escribir código",
      "Iterar rápidamente pidiendo cambios en lenguaje natural",
      "No necesitas saber programar para crear algo visual",
      "El código es el medio, no el fin - lo importante es el resultado"
    ],
    hint: "Piensa en cómo creaste esta página: ¿escribiste cada línea de HTML o describiste lo que querías?"
  };

  return results;
}
