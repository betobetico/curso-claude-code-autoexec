/**
 * Validation: 2.3 Los Comandos
 *
 * Verifica que el estudiante ha creado al menos
 * un Skill (comando personalizado) funcional.
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

  // Check 1: Carpeta commands existe
  const commandsDir = path.join(projectDir, '.claude', 'commands');
  results.checks.commands_dir_exists = fs.existsSync(commandsDir);

  if (!results.checks.commands_dir_exists) {
    results.feedback.push("❌ No encuentro la carpeta .claude/commands/");
    results.feedback.push("💡 Créala con: mkdir -p .claude/commands");
    return results;
  }

  // Check 2: Tiene al menos un archivo .md
  const commandFiles = fs.readdirSync(commandsDir)
    .filter(f => f.endsWith('.md'));

  results.checks.has_commands = commandFiles.length > 0;

  if (!results.checks.has_commands) {
    results.feedback.push("❌ No hay comandos en .claude/commands/");
    results.feedback.push("💡 Crea al menos un archivo .md como tu primer Skill");
    return results;
  }

  results.feedback.push(`📁 Encontré ${commandFiles.length} comando(s)`);

  // Check 3: Los comandos tienen contenido válido
  let validCommands = 0;
  const commandDetails = [];

  for (const file of commandFiles) {
    const filePath = path.join(commandsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    const commandName = file.replace('.md', '');
    const hasContent = content.length > 50;
    const hasTitle = content.includes('#');
    const hasInstructions = content.toLowerCase().includes('cuando') ||
                           content.toLowerCase().includes('debes') ||
                           content.toLowerCase().includes('instruc');

    const isValid = hasContent && (hasTitle || hasInstructions);

    if (isValid) {
      validCommands++;
      commandDetails.push(`✅ /${commandName} - válido`);
    } else {
      commandDetails.push(`⚠️ /${commandName} - necesita más contenido`);
    }
  }

  results.checks.has_valid_commands = validCommands > 0;
  results.feedback.push(...commandDetails);

  // Check 4: Al menos un comando tiene uso práctico
  const practicalPatterns = [
    'genera', 'crea', 'analiza', 'busca', 'extrae',
    'lista', 'resume', 'envía', 'calcula', 'formatea'
  ];

  let hasPracticalCommand = false;
  for (const file of commandFiles) {
    const content = fs.readFileSync(path.join(commandsDir, file), 'utf-8').toLowerCase();
    if (practicalPatterns.some(p => content.includes(p))) {
      hasPracticalCommand = true;
      break;
    }
  }

  results.checks.has_practical_command = hasPracticalCommand;

  if (!hasPracticalCommand) {
    results.feedback.push("💡 Tus comandos serían más útiles si hacen algo concreto");
    results.feedback.push("   (generar, crear, analizar, extraer, etc.)");
  }

  // Check 5: Tiene más de un comando (opcional pero recomendado)
  results.checks.has_multiple_commands = commandFiles.length >= 2;

  if (commandFiles.length === 1) {
    results.feedback.push("💡 Considera crear un segundo comando complementario");
  }

  // Calcular score
  const checksArray = Object.values(results.checks);
  const passedChecks = checksArray.filter(Boolean).length;
  results.score = passedChecks / checksArray.length;
  results.passed = results.score >= 0.6;

  if (results.passed) {
    results.feedback.push("✅ ¡Tienes Skills personalizados funcionando!");
  }

  // Pregunta conceptual
  results.conceptualQuestion = {
    question: "¿Cuál es la diferencia entre un Skill y simplemente escribir la instrucción cada vez?",
    goodAnswers: [
      "El Skill guarda la instrucción para reutilizarla fácilmente",
      "No tengo que recordar o reescribir instrucciones complejas",
      "Puedo compartir el Skill con otras personas o proyectos",
      "Es más rápido y consistente"
    ],
    hint: "Piensa en la diferencia entre cocinar cada vez desde cero vs tener una receta guardada"
  };

  return results;
}
