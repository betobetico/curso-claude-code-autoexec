# Especificación Técnica: Curso de Claude Code Adaptativo
**Versión:** 1.0
**Fecha:** 2026-01-18
**Autor:** Alberto Benbunan

---

## Visión General

Curso interactivo y personalizado de Claude Code que se ejecuta completamente dentro del terminal, usando un sistema de skills adaptativas, ejercicios dinámicos, spaced repetition vía WhatsApp, y una comunidad activa. Inspirado en ccforeveryone.com pero más dinámico, contextual y orientado a resultados medibles.

### Diferenciadores Clave
- ✅ **Adaptativo**: Ejercicios generados según nivel, errores y contexto del usuario
- ✅ **Scenario-based**: Narrativa inmersiva para aprendizaje contextual
- ✅ **Multicanal**: Terminal + WhatsApp + Discord/comunidad
- ✅ **Progreso persistente**: Local-first con backup en la nube
- ✅ **Freemium**: M1 gratis como lead magnet, resto monetizado

---

## 1. Arquitectura del Sistema

### 1.1 Modelo de Datos: Local-First + Cloud Backup

```
curso-claude-code/
├── .claude/
│   ├── commands/              # Slash commands personalizados
│   │   ├── ejercicio.md
│   │   ├── ayuda.md
│   │   ├── skip.md
│   │   └── progreso.md
│   └── CLAUDE.md             # Context global del proyecto
├── modules/
│   ├── 1-fundamentals/       # GRATIS
│   │   ├── 1.1-bienvenida/
│   │   │   ├── CLAUDE.md     # Script de lección interactiva
│   │   │   ├── assets/       # Archivos del escenario
│   │   │   └── validation.js # Lógica de auto-check
│   │   ├── 1.2-exploracion/
│   │   └── ...
│   ├── 2-vibe-coding/        # PREMIUM
│   └── 3-advanced-agents/    # PREMIUM
├── memory/
│   ├── learning/
│   │   ├── progress.json     # Estado: nivel, ejercicios completados, timestamps
│   │   ├── struggles.json    # Errores, conceptos difíciles, intentos
│   │   ├── preferences.json  # Ritmo, estilo, intereses
│   │   └── checkpoints.json  # Resultados de validaciones cualitativas
│   └── auth/
│       └── session.json      # Token de sesión, email, cohort_id
├── exercises/
│   └── templates/            # Plantillas de ejercicios dinámicos
│       ├── file-ops.md
│       ├── data-analysis.md
│       └── automation.md
└── README.md
```

### 1.2 Backend: Serverless (Vercel/Netlify Functions)

**Stack:**
- Runtime: Node.js 20+
- Framework: Vercel Functions / Netlify Edge Functions
- Base de datos: Supabase (PostgreSQL + Auth + Storage)
- WhatsApp: Twilio API
- Email: Resend o SendGrid

**Endpoints principales:**

```typescript
// API Routes
POST   /api/auth/magic-link     // Enviar magic link por email
GET    /api/auth/verify         // Validar token y crear sesión
POST   /api/progress/sync       // Backup de progreso local
GET    /api/progress/restore    // Recuperar progreso
POST   /api/analytics/event     // Trackear eventos (anónimo)
GET    /api/exercises/generate  // Generar ejercicio dinámico
POST   /api/whatsapp/schedule   // Programar recordatorio
POST   /api/community/review    // Enviar peer review
GET    /api/cohort/info         // Info del cohort actual
```

### 1.3 Persistencia: Híbrido

**Local (prioritario):**
- Todos los archivos en `memory/` se actualizan en tiempo real
- Git repo local del estudiante
- No requiere conexión para funcionar

**Cloud (backup opcional):**
- POST a `/api/progress/sync` al completar ejercicio
- GET de `/api/progress/restore` al iniciar si `session.json` existe
- Permite continuar en otra máquina

---

## 2. Sistema de Nivelación

### 2.1 Híbrido: Contador + Checkpoints Cualitativos

**Contador lineal:**
- Ejercicio completado = +1 punto
- 8 ejercicios = Módulo 1 completo
- 20 ejercicios totales = Curso completo

**Checkpoints cualitativos:**

Después de cada módulo, activar evaluación cualitativa:

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| **M1 Checkpoint** | Proyecto abierto | "Automatiza la organización de estos 50 archivos sin instrucciones paso a paso" |
| **M2+ Checkpoints** | Pair programming | Sesión interactiva donde Claude hace preguntas socráticas mientras resuelven |

**Criterios de validación:**
- ✅ Funciona técnicamente (auto-check)
- ✅ Arquitectura razonable (review de Claude)
- ✅ Puede explicar decisiones (preguntas conceptuales)

Si falla checkpoint → no avanza a siguiente módulo, debe reforzar.

### 2.2 Tracking de Struggles

En `memory/learning/struggles.json`:

```json
{
  "concepts": {
    "file_operations": {
      "attempts": 3,
      "errors": ["permission_denied", "path_not_found"],
      "last_struggle": "2026-01-15T10:30:00Z"
    },
    "pipe_usage": {
      "attempts": 5,
      "errors": ["syntax_error"],
      "last_struggle": "2026-01-16T14:00:00Z"
    }
  },
  "exercises_failed": [
    {
      "id": "1.3.2",
      "attempts": 2,
      "reason": "Confusión entre grep y find"
    }
  ]
}
```

Esto alimenta el generador de ejercicios para reforzar conceptos débiles.

---

## 3. Módulo 1: Fundamentals (Non-Programmers)

### 3.1 Escenario Narrativo: "El Archivo Familiar Perdido"

**Premisa:**
Heredaste las cajas digitales de tu abuelo/a: 30 años de fotos, cartas digitalizadas, recetas escaneadas, notas de voz, videos familiares... todo desorganizado en 2000+ archivos sin nombre coherente.

**Objetivo del módulo:**
Organizar, analizar y crear un "archivo familiar digital" hermoso y navegable, sin escribir una línea de código.

**Por qué funciona:**
- ✅ **Emotivo**: Todos tenemos historias familiares que preservar
- ✅ **Práctico**: Skills transferibles a cualquier organización de archivos
- ✅ **Wow-factor inmediato**: Ver caos convertirse en orden
- ✅ **No requiere conocimiento técnico**: Solo curiosidad

### 3.2 Estructura del Módulo 1 (8 lecciones)

| Lección | Nombre | Objetivo | Wow Moment |
|---------|--------|----------|------------|
| 1.1 | Bienvenida | Orientación, escenario, primer comando | Claude abre carpeta y muestra preview visual |
| 1.2 | Exploración | Navegar archivos, entender estructura | Generar árbol visual de 2000 archivos en segundos |
| 1.3 | **Organización Automática** | Renombrar/mover archivos masivamente | **PRIMER WOW: Organizar 500 fotos por fecha en 10 segundos** |
| 1.4 | Extracción de Datos | OCR de cartas, transcripción de audios | Convertir 20 cartas escaneadas en texto buscable |
| 1.5 | Análisis y Síntesis | Encontrar patrones, crear timeline | Generar línea de tiempo de eventos familiares de los archivos |
| 1.6 | Generación de Contenido | Crear índice, álbum digital, README | Documento hermoso con estructura del archivo |
| 1.7 | Investigación Web | Buscar contexto histórico de fechas/lugares | Enriquecer timeline con datos externos |
| 1.8 | Checkpoint Final | Proyecto integrador sin guía | Crear "cápsula del tiempo" digital completa |

### 3.3 Lección 1.3: Organización Automática (El Primer Wow)

**OBJETIVO:** En 10 minutos, el estudiante ve Claude organizar caos en orden perfecto.

**Flujo:**

```markdown
# 1.3: Organización Automática - El Momento Mágico ✨

Miras las 500 fotos con nombres como "IMG_2847.jpg", "DSC00391.jpg"...
¿Cuánto tardarías en organizarlas manualmente por año y mes?

STOP: ¿Cuánto crees? 1 hora? ¿2 horas?

USER: Respuesta

Tienes razón, sería eterno. Hagamos esto juntos en 30 segundos.

STOP: Dime "organiza las fotos" y observa.

USER: organiza las fotos

ACTION:
1. Leer metadata EXIF de cada foto
2. Crear estructura: fotos/YYYY/MM/
3. Mover y renombrar: fotos/2010/03/2010-03-15_cumpleaños_abuela.jpg
4. Generar reporte: "500 fotos organizadas en 23 carpetas (1995-2023)"

[Terminal muestra progreso en tiempo real]

✅ 500 fotos organizadas en 8 segundos.

STOP: ¿Cómo se siente? 🚀

USER: Respuesta

Esto es Claude Code. Acabas de hacer en 8 segundos lo que tomaría horas.
Y no escribiste una línea de código. Solo pediste lo que querías.

[Continúa con explicación de qué pasó, cómo replicarlo...]
```

**Criterio de completación:**
- ✅ Auto-check: Verificar que `fotos/` tiene estructura YYYY/MM/
- ✅ Checkpoint conceptual: "¿Por qué organizamos por fecha en vez de nombre?"

---

## 4. Módulo 2+: Pair Programming con Agente

### 4.1 Modos de Interacción

**Sistema de Hints Progresivos:**

```
/hint 1  → Pista sutil: "¿Qué herramienta usarías para filtrar líneas?"
/hint 2  → Pista directa: "Revisa el comando grep con la flag -i"
/hint 3  → Casi solución: "Prueba: grep -i 'error' archivo.log"
/hint 4  → Solución + explicación
```

**Preguntas Socráticas (modo default):**

```
Estudiante: ¿Cómo filtro errores de este log?

Claude: Buena pregunta. Antes de darte la solución, piensa:
¿Qué característica común tienen las líneas de error?

Estudiante: Todas tienen la palabra "ERROR"

Claude: Exacto. Ahora, ¿qué comando de terminal conoces que busque texto?

[Guía sin dar respuesta directa]
```

**Code Review en Tiempo Real:**

Mientras escribe código, Claude comenta:

```
# Código del estudiante:
cat archivo.txt | grep "texto"

Claude (observador):
💡 Funciona, pero podrías hacer lo mismo sin 'cat'.
   grep puede leer archivos directamente: grep "texto" archivo.txt

   ¿Quieres intentarlo?
```

**Modo Observador:**

- Claude está silencioso hasta que:
  - Detecta patrón de error (>2 intentos fallidos)
  - Pasa >5 min sin progreso
  - Estudiante comete error conceptual importante

Entonces interviene con pregunta, no solución.

---

## 5. Sistema de Spaced Repetition (WhatsApp)

### 5.1 Algoritmo: Basado en Curva de Olvido (Ebbinghaus)

**Premisa:** Las personas olvidan el 50% de un concepto nuevo en 24 horas, 70% en 7 días.

**Implementación:**

```javascript
// Intervalos de recordatorio
const spacedIntervals = {
  // Después de completar una lección:
  firstReview: 1,      // 1 día después
  secondReview: 3,     // 3 días después
  thirdReview: 7,      // 1 semana después
  fourthReview: 14,    // 2 semanas después
  fifthReview: 30,     // 1 mes después
};

// Ajuste dinámico según engagement
function adjustInterval(lastInterval, responseTime) {
  if (responseTime < 60) {  // Respondió en <1 min
    return lastInterval * 1.5;  // Alargar intervalo (recuerda bien)
  } else if (responseTime > 3600) {  // >1 hora
    return lastInterval * 0.7;  // Acortar (necesita refuerzo)
  }
  return lastInterval;
}
```

### 5.2 Tipos de Mensajes WhatsApp

**1. Recordatorio de Repaso:**

```
Hola Alberto 👋

Hace 3 días aprendiste sobre *organización de archivos con metadata*.

Mini-desafío (2 min):
Tienes 100 documentos PDF en Downloads.
¿Qué comando usarías para organizarlos por fecha de creación?

Responde aquí o ignora si ya lo dominas ✅
```

**2. Motivación y Progreso:**

```
¡7 días consecutivos! 🔥

Has completado:
✅ Módulo 1: Fundamentals (100%)
🚧 Módulo 2: Vibe Coding (40%)

Siguiente: 2.3 - Build & Iterate
Tiempo estimado: 25 min

¿Listo para continuar hoy?
```

**3. Contenido Exclusivo (Premium):**

```
💎 TIP EXCLUSIVO - Atajos de Claude Code

¿Sabías que puedes usar /think antes de tu prompt?

/think ¿Cómo optimizar este script?

Claude analizará más profundamente antes de responder.

Pruébalo en tu próximo ejercicio 🚀
```

### 5.3 Configuración del Usuario

En `.claude/commands/whatsapp-config.md`:

```markdown
## Configuración de WhatsApp

Frecuencia de recordatorios:
- [ ] Diario
- [x] Cada 2-3 días (recomendado)
- [ ] Semanal
- [ ] Solo hitos importantes

Horario preferido:
- Mañana (8-10am): [ ]
- Mediodía (12-2pm): [x]
- Tarde (6-8pm): [ ]

Tipo de contenido:
- [x] Recordatorios de repaso
- [x] Motivación y progreso
- [x] Tips exclusivos
- [ ] Ninguno (desactivar WhatsApp)
```

---

## 6. Sistema de Validación de Ejercicios

### 6.1 Validación Híbrida: Auto-Check + Checkpoint Conceptual

**Paso 1: Auto-check Técnico**

Cada ejercicio tiene `validation.js`:

```javascript
// exercises/1.3-organize-photos/validation.js

export async function validate() {
  const checks = {
    structure: await checkFolderStructure('fotos/'),
    naming: await checkFileNaming('fotos/**/*.jpg'),
    completeness: await checkPhotoCount()
  };

  return {
    passed: checks.structure && checks.naming && checks.completeness,
    details: checks,
    score: calculateScore(checks)
  };
}
```

Claude ejecuta esto automáticamente cuando estudiante dice "listo" o "/done".

**Paso 2: Checkpoint Conceptual**

Si auto-check ✅, Claude pregunta:

```
¡Excelente! Las 500 fotos están organizadas correctamente ✅

Última pregunta antes de continuar:
¿Por qué crees que organizamos por YYYY/MM/ en vez de por nombre de evento?

[Espera respuesta]

[Si respuesta demuestra comprensión → COMPLETO]
[Si respuesta confusa → Da feedback, repite pregunta de otra forma]
```

**Criterio de aprobación:**
- ✅ Pasa auto-check técnico
- ✅ Puede explicar razonamiento (no necesita respuesta perfecta, solo entendimiento)

### 6.2 Sistema de Ayuda en Múltiples Niveles

**Si estudiante se atasca:**

```
Timeout detectado (>20 min sin progreso)

Claude:
Veo que llevas un rato en esto. Varias opciones:

1️⃣ /hint - Dame una pista
2️⃣ /stuck - Explícame qué intentaste y dónde te atascaste
3️⃣ /skip - Saltar este ejercicio por ahora
4️⃣ /discord - Pedir ayuda en la comunidad

¿Qué prefieres?
```

**Opción /stuck (Sub-agente Tutor):**

```markdown
# .claude/commands/stuck.md

Eres un tutor paciente especializado en debugging de aprendizaje.

Cuando un estudiante dice /stuck:
1. Pregunta: "¿Qué intentaste hacer?"
2. Pregunta: "¿Qué pasó en vez de lo esperado?"
3. Pregunta: "¿Qué crees que podría estar mal?"

NO des la solución. Haz preguntas socráticas para guiarlos.

Si después de 3 intentos siguen atascados:
→ Ofrece /hint 3
→ O sugiere /discord para peer help
```

**Opción /skip:**

```
Entendido, saltando ejercicio 1.3.

⚠️ Marcado como 'skipped' - podrás volver después con /review-skipped

Continuamos con 1.4: Extracción de Datos
```

En `memory/learning/progress.json`:

```json
{
  "exercises": {
    "1.3": {
      "status": "skipped",
      "attempts": 3,
      "last_attempt": "2026-01-18T15:30:00Z",
      "reason": "Struggled with EXIF metadata extraction"
    }
  }
}
```

---

## 7. Comunidad y Peer Review

### 7.1 Estructura de la Comunidad

**Discord/Foro:**
- `#general` - Chat general
- `#ejercicios-m1` - Preguntas sobre Módulo 1
- `#ejercicios-m2` - Preguntas sobre Módulo 2
- `#showcase` - Compartir proyectos completados
- `#peer-review` - Solicitar reviews de código

**Activación de Peer Review:**

Solo se desbloquea después de completar Módulo 2:

```
¡Felicidades por terminar Módulo 2! 🎉

Nuevo feature desbloqueado: Peer Review

Ahora puedes:
- Revisar ejercicios de estudiantes de M1
- Recibir reviews de tu código de estudiantes avanzados

Esto te ayuda a:
✅ Reforzar tu aprendizaje enseñando
✅ Ganar karma en la comunidad
✅ Ver diferentes enfoques al mismo problema

¿Quieres activarlo? (puedes desactivar después)
```

### 7.2 Sistema de Karma/Reputación

```json
{
  "user_id": "user_123",
  "karma": 47,
  "breakdown": {
    "helpful_reviews": 15,      // +3 karma cada uno
    "solutions_shared": 4,       // +2 karma
    "questions_answered": 8      // +1 karma
  },
  "badges": [
    "Helpful Reviewer",   // 10 reviews útiles
    "Fast Learner",       // Completó M1 en <2 días
    "Community Helper"    // 20 respuestas en Discord
  ],
  "review_quality_score": 4.2  // 1-5, promedio de ratings
}
```

**Moderación de Reviews por Agente:**

Antes de enviar peer review, Claude lo analiza:

```javascript
// Validación pre-envío
const review = `
Tu código funciona pero podrías usar find en vez de ls | grep
`;

const validation = await claude.analyze(review, {
  rubric: {
    constructive: true,   // ¿Es constructivo o solo crítica?
    specific: true,       // ¿Da ejemplos específicos?
    respectful: true,     // ¿Tono respetuoso?
    actionable: true      // ¿Sugiere mejoras concretas?
  }
});

if (!validation.passed) {
  return "⚠️ Review rechazado: Reescríbelo siendo más específico y constructivo";
}
```

### 7.3 Leaderboard

**Visible en `/progreso` o web dashboard:**

```
🏆 Top Learners - Semana del 13 Ene

1. @maria_dev      - 92 karma, M3 completo
2. @carlos_learns  - 78 karma, M2 85%
3. @tu_usuario     - 47 karma, M2 40% ← Tú
4. @ana_code       - 41 karma, M2 30%
5. @jose_builder   - 38 karma, M1 completo

🎯 Siguiente badge: "Fast Learner"
   → Completa M2 en <3 días
```

---

## 8. Cohorts y Ritmo de Aprendizaje

### 8.1 Modelo: Ritmo Flexible dentro de Fechas

**Cohort Example:**

```
Cohort #3 - Febrero 2026
Inicio: 1 Feb 2026
Fin: 28 Feb 2026

Ritmo sugerido:
- Semana 1: Módulo 1 (8 lecciones)
- Semana 2: Módulo 2 (5 lecciones)
- Semana 3-4: Módulo 3 + Proyecto Final

Office Hours (opcionales):
- Martes 7pm CET: Q&A en vivo
- Jueves 7pm CET: Pair programming grupal
```

**Flexibilidad:**
- Puedes ir más rápido o más lento
- Office hours grabados si no puedes asistir
- Sin penalización por rezago
- Acceso al contenido permanente después del cohort

### 8.2 Tracking de Cohort

En `memory/auth/session.json`:

```json
{
  "user_id": "user_123",
  "email": "alberto@example.com",
  "cohort": {
    "id": "cohort_3_feb2026",
    "start_date": "2026-02-01",
    "end_date": "2026-02-28",
    "timezone": "Europe/Madrid"
  },
  "access_tier": "premium"  // free | premium
}
```

Dashboard web muestra:

```
Tu Cohort: Febrero 2026

📊 Progreso del grupo:
- 42% completó M1
- 18% completó M2
- 5% completó curso completo

📍 Tu posición: Top 30%

⏰ Próximo office hour:
   Martes 20 Ene, 7pm CET
   Tema: "Agents avanzados y sub-agentes custom"
```

---

## 9. Privacidad y Analytics

### 9.1 Datos Almacenados

**Backend (Supabase):**

```sql
-- Tabla users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,  -- Opcional, solo si activa WhatsApp
  whatsapp_consent BOOLEAN DEFAULT FALSE,
  cohort_id TEXT,
  access_tier TEXT DEFAULT 'free',
  created_at TIMESTAMP,
  last_seen TIMESTAMP
);

-- Tabla progress (backup de local)
CREATE TABLE progress (
  user_id UUID REFERENCES users(id),
  module_id TEXT,
  lesson_id TEXT,
  status TEXT,  -- completed | skipped | in_progress
  attempts INT,
  completion_time INT,  -- segundos
  checkpoint_score FLOAT,
  synced_at TIMESTAMP,
  PRIMARY KEY (user_id, module_id, lesson_id)
);

-- Tabla analytics (anonimizado)
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY,
  event_type TEXT,  -- lesson_start | lesson_complete | hint_used | stuck_called
  module_id TEXT,
  lesson_id TEXT,
  metadata JSONB,
  created_at TIMESTAMP
  -- NO hay user_id, es anónimo
);
```

**Datos que NO se almacenan:**
- ❌ Código escrito por el usuario
- ❌ Archivos personales
- ❌ Contenido de prompts específicos
- ❌ IPs o datos de localización

### 9.2 Opción de Borrado Completo

En `.claude/commands/delete-data.md`:

```markdown
Comando: /delete-my-data

⚠️ ADVERTENCIA: Esto borrará permanentemente:
- Tu progreso guardado en el servidor
- Tu cuenta y email
- Tus peer reviews
- Tu karma y badges

Tu progreso LOCAL se mantendrá en esta máquina.

¿Estás seguro? Escribe "CONFIRMAR BORRADO" para proceder.

USER: Respuesta

[Si confirma]
ACTION:
1. DELETE FROM progress WHERE user_id = ?
2. DELETE FROM users WHERE id = ?
3. Marcar reviews como "usuario eliminado"
4. Borrar memory/auth/session.json local

✅ Cuenta eliminada. Tus datos ya no existen en nuestro servidor.
```

---

## 10. Generación Dinámica de Ejercicios

### 10.1 Engine de Ejercicios Contextuales

**Flujo cuando estudiante pide `/ejercicio`:**

```markdown
# .claude/commands/ejercicio.md

Cuando el estudiante pida un ejercicio:

1. Lee `memory/learning/progress.json` → nivel actual
2. Lee `memory/learning/struggles.json` → conceptos débiles
3. Ejecuta `ls -la` → contexto de archivos actuales
4. Lee `memory/learning/preferences.json` → intereses

Luego genera ejercicio que:
- Sea apropiado al nivel
- Refuerce conceptos donde falló
- Use archivos reales si existen o cree escenario relevante
- Incluya validación clara

Formato:
- Título descriptivo
- Contexto (2-3 líneas)
- Objetivo específico
- Criterio de éxito
- Tiempo estimado
```

**Ejemplo de Ejercicio Generado:**

Contexto detectado:
- Nivel: Intermediate (completó M1, 40% de M2)
- Struggle: Pipes y redirección
- Archivos actuales: Proyecto web con logs/

```
📝 Ejercicio Dinámico #12

Título: Análisis de Logs de Producción

Contexto:
Tu directorio logs/ tiene archivos de las últimas 7 días.
El equipo reporta errores esporádicos pero no saben cuándo.

Objetivo:
1. Encuentra todos los errores (líneas con "ERROR" o "FAIL")
2. Guárdalos en logs/errors-summary.txt
3. Cuenta cuántos errores hubo por día

Pista: Combina grep, sort, uniq y redirección >

Criterio de éxito:
✅ errors-summary.txt contiene solo líneas de error
✅ Incluye count por día al final del archivo

Tiempo estimado: 15 min

¿Listo? Cuando termines, di "listo" y verifico.
```

### 10.2 Plantillas de Ejercicios

En `exercises/templates/`:

**Plantilla para File Operations:**

```markdown
# Template: file-operations-{{LEVEL}}.md

## Variables
- LEVEL: beginner | intermediate | advanced
- USER_PROJECT: [detectado de ls]
- STRUGGLE_AREA: [de struggles.json]

## Generación

{{#if LEVEL == "beginner"}}
Encuentra todos los archivos .md en {{USER_PROJECT}} y cuéntalos.
Pista: usa `find . -name "*.md" | wc -l`
{{/if}}

{{#if LEVEL == "intermediate"}}
En {{USER_PROJECT}}, busca archivos que contengan "TODO" y genera
un reporte en todo-report.md con:
- Nombre del archivo
- Línea donde aparece
- Contexto (3 líneas alrededor)

{{#if STRUGGLE_AREA == "pipes"}}
💡 Este ejercicio practica pipes - recuerda: comando1 | comando2
{{/if}}
{{/if}}

{{#if LEVEL == "advanced"}}
Crea un sub-agente que analice {{USER_PROJECT}} y proponga
refactorizaciones basadas en:
- Archivos duplicados
- Código repetido
- Oportunidades de abstracción

Guarda el informe en reports/refactor-suggestions.md
{{/if}}

## Validación
{{validation_script}}
```

---

## 11. Modelo de Negocio

### 11.1 Tiers de Acceso

**Free Tier:**
- ✅ Módulo 1 completo (8 lecciones)
- ✅ Ejercicios básicos
- ✅ Progreso local
- ✅ Acceso a Discord (solo lectura)
- ❌ Sin WhatsApp
- ❌ Sin peer review
- ❌ Sin cohorts

**Premium Tier ($49/mes o $399/año):**
- ✅ Todos los módulos (M1, M2, M3+)
- ✅ Ejercicios dinámicos ilimitados
- ✅ WhatsApp con spaced repetition
- ✅ Backup en la nube
- ✅ Discord completo + peer review
- ✅ Acceso a cohorts con office hours
- ✅ Leaderboard y gamificación
- ✅ Tips exclusivos semanales

### 11.2 Flujo de Conversión

```
Usuario descubre curso (orgánico, redes)
    ↓
Instala repo: git clone ...
    ↓
Ejecuta: claude /start
    ↓
Completa M1 gratis (8 lecciones, ~3 horas)
    ↓
Al terminar M1:
    "¡Felicidades! 🎉

     Módulo 1 completo. Has aprendido:
     ✅ Organización de archivos
     ✅ Extracción de datos
     ✅ Generación de contenido
     ✅ Investigación web

     ¿Listo para el siguiente nivel?

     Módulo 2: Vibe Coding - Construir apps reales
     Módulo 3: Advanced Agents - Automatización completa

     Upgrade a Premium: $49/mes
     + WhatsApp diario
     + Comunidad activa
     + Cohort con office hours

     /upgrade - Ver planes
     /continue-free - Explorar M1 más a fondo"
    ↓
[Si elige /upgrade]
    → Redirect a web de pago (Stripe)
    → Magic link por email
    → Sincroniza progreso a backend
    → Desbloquea M2+
```

### 11.3 Activación de Premium

**Proceso:**

1. Usuario visita https://curso-claude.com/upgrade
2. Pago con Stripe → genera `access_token`
3. Email con magic link: `https://curso-claude.com/auth/activate?token=XXX`
4. Claude detecta token, actualiza `memory/auth/session.json`:

```json
{
  "user_id": "user_123",
  "email": "alberto@example.com",
  "access_tier": "premium",
  "token": "sk_prod_XXXX",
  "expires_at": "2027-01-18",  // 1 año después si anual
  "features": {
    "whatsapp": true,
    "cloud_backup": true,
    "peer_review": true,
    "cohort_access": true
  }
}
```

5. Claude confirma:

```
✅ Premium activado

Nuevas funcionalidades desbloqueadas:
📱 WhatsApp: Primer mensaje en 1 hora
☁️ Cloud backup: Progreso guardándose automáticamente
👥 Peer review: Disponible en /review
📅 Cohort: Próximo inicia 1 Feb - /join-cohort

Continuemos con Módulo 2: Vibe Coding 🚀
```

---

## 12. Arquitectura de Actualización sin Romper Progreso

### 12.1 Rolling Updates Transparentes

**Problema:** Estudiantes activos no deben perder progreso al actualizar.

**Solución:**

```javascript
// En cada inicio de sesión, Claude verifica:
const localVersion = readFile('.claude/VERSION');  // "1.2.0"
const latestVersion = await fetch('/api/version/latest');  // "1.3.0"

if (semver.gt(latestVersion, localVersion)) {
  console.log("🆕 Actualización disponible: v" + latestVersion);
  console.log("Cambios:");
  const changelog = await fetch('/api/version/changelog?from=1.2.0&to=1.3.0');
  console.log(changelog);

  console.log("\n/update - Actualizar ahora");
  console.log("/skip-update - Continuar con versión actual");
}
```

**Comando /update:**

```markdown
# .claude/commands/update.md

Actualizando curso a v{{NEW_VERSION}}...

1. Haciendo backup de tu progreso local → .backup/
2. Descargando nuevas lecciones y ejercicios...
3. Migrando tu progreso al nuevo formato...
4. Validando integridad...

✅ Actualización completa

Novedades en v{{NEW_VERSION}}:
- ✨ Nueva lección 2.6: Deployment avanzado
- 🐛 Fix: Validación de ejercicio 1.3
- 📝 Mejoras en explicaciones de pipes

Tu progreso intacto:
- M1: 100% ✅
- M2: 40% (antes de update)

¿Listo para continuar?
```

### 12.2 Migración de Progreso

```javascript
// migrations/1.2.0-to-1.3.0.js

export async function migrate(oldProgress) {
  const newProgress = { ...oldProgress };

  // Ejemplo: En v1.3.0 añadimos campo 'checkpoints'
  if (!newProgress.checkpoints) {
    newProgress.checkpoints = {};

    // Inferir checkpoints de ejercicios completados
    Object.entries(newProgress.exercises).forEach(([id, ex]) => {
      if (ex.status === 'completed') {
        const moduleId = id.split('.')[0];
        newProgress.checkpoints[moduleId] = {
          passed: true,
          score: ex.checkpoint_score || 0.8,
          date: ex.completed_at
        };
      }
    });
  }

  return newProgress;
}
```

---

## 13. Métricas de Éxito del Curso

### 13.1 KPIs a Trackear

**Engagement:**
- Tasa de completación M1 (objetivo: >70%)
- Tasa de conversión Free → Premium (objetivo: >15%)
- DAU/MAU ratio (objetivo: >40%)
- Tiempo promedio por lección (benchmark: 20-30 min)

**Learning Outcomes:**
- % que pasa checkpoints en primer intento (objetivo: >60%)
- Tiempo promedio de resolución de ejercicios (bajar con el tiempo)
- Conceptos con más struggles (para mejorar material)
- Tasa de uso de /stuck vs /hint (indicador de dificultad)

**Community:**
- Posts por semana en Discord (objetivo: >50)
- Peer reviews por estudiante (objetivo: >3)
- Karma promedio (objetivo: >20)
- Attendance a office hours (objetivo: >30% del cohort)

**Retention:**
- Día 7: % que vuelve (objetivo: >50%)
- Día 30: % que sigue activo (objetivo: >30%)
- Churn mensual (objetivo: <10%)

### 13.2 Dashboard de Analytics

**Para el creador (tú):**

Web dashboard en https://curso-claude.com/admin

```
📊 Overview - Últimos 30 días

Usuarios:
- Total: 847
- Free: 612 (72%)
- Premium: 235 (28%)
- Nuevos hoy: 12

Engagement:
- DAU: 189 (22%)
- Lecciones completadas hoy: 456
- Ejercicios intentados: 789

Conversión:
- Tasa Free → Premium: 17% ↑
- Ingresos MRR: $11,515
- Churn: 8% ↓

Top Struggles:
1. Pipes y redirección (45 estudiantes)
2. Async agents (32 estudiantes)
3. Git workflows (28 estudiantes)

→ Acción sugerida: Crear mini-lección sobre pipes
```

---

## 14. Roadmap de Implementación

### Fase 1: MVP (4-6 semanas)

**Semana 1-2:**
- ✅ Estructura básica del monorepo
- ✅ Módulo 1 completo (8 lecciones) con escenario "Archivo Familiar"
- ✅ Sistema de progreso local (progress.json, struggles.json)
- ✅ Comandos básicos: /ejercicio, /progreso, /hint

**Semana 3-4:**
- ✅ Backend serverless (Vercel Functions + Supabase)
- ✅ Auth con magic link
- ✅ Cloud backup de progreso
- ✅ Sistema de validación híbrida (auto-check + conceptual)

**Semana 5-6:**
- ✅ WhatsApp integration (Twilio)
- ✅ Algoritmo de spaced repetition básico
- ✅ Dashboard web para stats
- ✅ Stripe para pagos

**Lanzamiento Beta:**
- 🎯 50 beta testers
- 🎯 M1 gratis, feedback intensivo
- 🎯 Iterar basado en data

### Fase 2: Expansión (8-10 semanas)

**Semana 7-10:**
- ✅ Módulo 2: Vibe Coding (5 lecciones)
- ✅ Pair programming con agente
- ✅ Sistema de hints progresivos
- ✅ Ejercicios dinámicos generados

**Semana 11-14:**
- ✅ Discord/comunidad
- ✅ Peer review system
- ✅ Leaderboard y gamificación
- ✅ Sistema de karma

**Semana 15-16:**
- ✅ Cohorts con office hours
- ✅ Onboarding mejorado
- ✅ Analytics dashboard completo

**Lanzamiento Público:**
- 🎯 Marketing push
- 🎯 Objetivo: 500 usuarios en M1, 100 premium

### Fase 3: Escala (Continuo)

- ✅ Módulo 3+: Advanced topics
- ✅ Contenido semanal nuevo
- ✅ Webinars mensuales
- ✅ Certificaciones
- ✅ Corporate training tier

---

## 15. Detalles Técnicos de Implementación

### 15.1 Ejemplo de Lección Completa

**Archivo:** `modules/1-fundamentals/1.3-organize/CLAUDE.md`

```markdown
# 1.3: Organización Automática - El Momento Mágico ✨

Estás mirando las 500 fotos del archivo familiar.
Nombres como "IMG_2847.jpg", "DSC00391.jpg"... un caos total.

STOP: Si tuvieras que organizarlas manualmente por año y mes, ¿cuánto tardarías?

USER: {{WAIT_FOR_RESPONSE}}

---

Exacto, sería eterno. Vamos a hacer esto juntos en 30 segundos.

ACTION: {{CHECK_ASSETS_EXIST}}
<!-- Verifica que assets/fotos-desordenadas/ existe -->

STOP: Dime "organiza las fotos" cuando estés listo.

USER: {{WAIT_FOR_TRIGGER: ["organiza", "organizar las fotos", "listo"]}}

---

Perfecto. Observa la magia 🪄

ACTION: {{EXECUTE_SCRIPT: organize-photos.sh}}

SCRIPT:
#!/bin/bash
# organize-photos.sh

echo "📸 Analizando 500 fotos..."
sleep 1  # Drama

# Leer EXIF, crear estructura, mover archivos
exiftool -r -d "%Y/%m" \
  "-Directory<CreateDate" \
  assets/fotos-desordenadas/

echo "✅ 500 fotos organizadas en 8 segundos"
echo ""
echo "Estructura creada:"
tree -L 2 fotos/ | head -20

---

STOP: ¿Cómo se siente? 🚀

USER: {{WAIT_FOR_RESPONSE}}

---

Eso es Claude Code. Acabas de hacer en 8 segundos lo que tomaría horas.
Y no escribiste una línea de código.

Ahora déjame explicarte qué pasó:

1. **EXIF Metadata**: Cada foto digital tiene datos ocultos (fecha, cámara, ubicación)
2. **exiftool**: Herramienta que lee esos datos
3. **Reorganización automática**: Movimos archivos según su fecha de creación

Verifiquemos que funcionó:

ACTION: {{VALIDATE: validation.js}}

---

## Checkpoint Conceptual

Última pregunta antes de continuar:

¿Por qué organizamos por YYYY/MM (año/mes) en vez de por nombre de evento?

STOP: Piensa tu respuesta.

USER: {{WAIT_FOR_RESPONSE}}

VALIDATION: {{CHECK_UNDERSTANDING}}

<!-- Si respuesta demuestra comprensión → NEXT -->
<!-- Si confusa → FEEDBACK + RE-ASK -->

---

¡Excelente! ✅

**Progreso:**
- [x] 1.1 Bienvenida
- [x] 1.2 Exploración
- [x] 1.3 Organización Automática ← Acabas de completar
- [ ] 1.4 Extracción de Datos
- [ ] 1.5 Análisis y Síntesis
- [ ] 1.6 Generación de Contenido
- [ ] 1.7 Investigación Web
- [ ] 1.8 Checkpoint Final

**Siguiente:** 1.4 - Extracción de Datos (OCR, transcripciones)

STOP: Di "siguiente" o /start-1-4 cuando estés listo.

USER: {{WAIT_FOR_NEXT}}

---

## Notas para Claude

- **Timing**: No apurar, dejar que absorban el "wow moment"
- **Validation script**: `validation.js` debe verificar estructura fotos/YYYY/MM/
- **Si falla organización**: Troubleshoot común: permisos, exiftool no instalado
- **Checkpoint**: Respuesta aceptable: "Por fecha es más objetivo que nombres inventados" o similar
- **Assets**: Incluir 500 fotos de prueba con EXIF variado (1995-2023)

## Success Criteria

- [ ] Estudiante vio las fotos organizarse en tiempo real
- [ ] Estructura fotos/YYYY/MM/ creada correctamente
- [ ] Entiende concepto de metadata
- [ ] Puede explicar por qué organizar por fecha vs nombre
- [ ] Listo para siguiente lección
```

### 15.2 Script de Validación

**Archivo:** `modules/1-fundamentals/1.3-organize/validation.js`

```javascript
// validation.js - Auto-check para ejercicio 1.3

import fs from 'fs';
import path from 'path';

export async function validate() {
  const results = {
    checks: {},
    passed: false,
    score: 0,
    feedback: []
  };

  // Check 1: Estructura de carpetas existe
  const photosDir = 'fotos';
  results.checks.structure_exists = fs.existsSync(photosDir);

  if (!results.checks.structure_exists) {
    results.feedback.push("❌ Carpeta 'fotos/' no encontrada");
    return results;
  }

  // Check 2: Tiene subcarpetas YYYY
  const years = fs.readdirSync(photosDir)
    .filter(f => fs.statSync(path.join(photosDir, f)).isDirectory())
    .filter(f => /^\d{4}$/.test(f));  // Regex año YYYY

  results.checks.year_folders = years.length > 0;

  if (!results.checks.year_folders) {
    results.feedback.push("❌ No hay carpetas de año (YYYY)");
    return results;
  }

  // Check 3: Años tienen subcarpetas MM
  let monthFoldersExist = false;
  for (const year of years) {
    const months = fs.readdirSync(path.join(photosDir, year))
      .filter(f => /^\d{2}$/.test(f));  // Regex mes MM
    if (months.length > 0) {
      monthFoldersExist = true;
      break;
    }
  }

  results.checks.month_folders = monthFoldersExist;

  if (!results.checks.month_folders) {
    results.feedback.push("❌ No hay carpetas de mes (MM) dentro de años");
    return results;
  }

  // Check 4: Archivos movidos (original vacía)
  const originalDir = 'assets/fotos-desordenadas';
  const filesInOriginal = fs.readdirSync(originalDir)
    .filter(f => f.endsWith('.jpg'));

  results.checks.files_moved = filesInOriginal.length === 0;

  if (!results.checks.files_moved) {
    results.feedback.push(`⚠️ Quedan ${filesInOriginal.length} fotos sin organizar`);
  }

  // Check 5: Conteo total
  let totalPhotos = 0;
  const countPhotosRecursive = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        countPhotosRecursive(fullPath);
      } else if (item.endsWith('.jpg')) {
        totalPhotos++;
      }
    }
  };

  countPhotosRecursive(photosDir);
  results.checks.correct_count = totalPhotos === 500;

  if (!results.checks.correct_count) {
    results.feedback.push(`⚠️ Esperaba 500 fotos, encontré ${totalPhotos}`);
  }

  // Calcular score
  const checksArray = Object.values(results.checks);
  results.score = checksArray.filter(Boolean).length / checksArray.length;
  results.passed = results.score >= 0.8;  // 80% de checks

  if (results.passed) {
    results.feedback.push("✅ ¡Perfecto! Las fotos están organizadas correctamente");
  }

  return results;
}
```

### 15.3 Sistema de Ejercicios Dinámicos

**Archivo:** `.claude/commands/ejercicio.md`

```markdown
# Comando: /ejercicio

Eres un generador de ejercicios personalizados.

## Proceso:

1. **Análisis de Contexto:**
   ```javascript
   const progress = readJSON('memory/learning/progress.json');
   const struggles = readJSON('memory/learning/struggles.json');
   const preferences = readJSON('memory/learning/preferences.json');
   const currentFiles = execSync('ls -la').toString();
   ```

2. **Determinar Nivel:**
   - Beginner: 0-8 ejercicios completados
   - Intermediate: 9-15 ejercicios
   - Advanced: 16+ ejercicios

3. **Identificar Área de Refuerzo:**
   - Si `struggles.concepts` tiene entries → priorizar esos
   - Si no → siguiente concepto secuencial

4. **Seleccionar Plantilla:**
   ```javascript
   const templates = {
     file_operations: 'exercises/templates/file-ops.md',
     data_analysis: 'exercises/templates/data-analysis.md',
     automation: 'exercises/templates/automation.md',
     agents: 'exercises/templates/agents.md'
   };

   // Escoger según área de struggle o siguiente en secuencia
   const template = selectTemplate(struggles, progress);
   ```

5. **Generar Ejercicio:**
   - Reemplazar {{variables}} en template
   - Ajustar dificultad según nivel
   - Incluir pistas si es concepto con struggles
   - Crear validación específica

6. **Presentar:**
   ```
   📝 Ejercicio Dinámico #{{NUMBER}}

   {{TITLE}}

   {{CONTEXT}}

   Objetivo:
   {{OBJECTIVES}}

   {{#if STRUGGLES}}
   💡 Este ejercicio practica {{STRUGGLE_AREA}} - recuerda: {{HINT}}
   {{/if}}

   Criterio de éxito:
   {{SUCCESS_CRITERIA}}

   Tiempo estimado: {{TIME}} min

   ¿Listo? Cuando termines, di "listo" y verifico.
   ```

## Ejemplo de Generación:

**Input detectado:**
```json
{
  "level": "intermediate",
  "exercises_completed": 10,
  "struggles": {
    "pipes": {
      "attempts": 3,
      "errors": ["syntax_error", "incorrect_redirect"]
    }
  },
  "current_dir": "/proyecto-web/logs/"
}
```

**Output generado:**

```markdown
📝 Ejercicio Dinámico #11

**Análisis de Logs con Pipes**

Contexto:
Tu directorio logs/ contiene archivos de acceso del servidor web.
El equipo reporta errores 404 pero no saben cuáles URLs fallan más.

Objetivo:
1. Filtra solo líneas con código 404
2. Extrae la URL de cada error
3. Cuenta cuántas veces aparece cada URL
4. Ordena de mayor a menor frecuencia
5. Guarda top 10 en logs/404-report.txt

💡 Este ejercicio practica pipes y redirección
Recuerda: comando1 | comando2 | comando3 > archivo

Pistas disponibles:
/hint 1 - ¿Cómo buscar texto en archivos?
/hint 2 - ¿Cómo contar ocurrencias?
/hint 3 - ¿Cómo ordenar numéricamente?

Criterio de éxito:
✅ 404-report.txt existe
✅ Contiene URLs ordenadas por frecuencia
✅ Solo top 10 URLs

Tiempo estimado: 20 min

¿Listo? Cuando termines, di "listo" y verifico.
```

## Si se atasca:

Después de >20 min sin completar:

```
Veo que llevas un rato aquí. Opciones:

/hint 2 - Pista más directa
/stuck - Háblame de qué intentaste
/skip - Saltar por ahora
/discord - Pedir ayuda en comunidad

¿Qué prefieres?
```
```

---

## 16. Consideraciones Finales

### 16.1 Riesgos y Mitigaciones

| Riesgo | Impacto | Mitigación |
|--------|---------|------------|
| Alta tasa de abandono en M1 | 🔴 Alto | Mejorar onboarding, reducir fricción, wow moment más temprano |
| Baja conversión Free→Premium | 🟡 Medio | A/B test messaging, ofrecer trial, mejorar value prop |
| Piratería del contenido | 🟡 Medio | Contenido encriptado, DRM ligero, value en servicio no en archivos |
| Escalabilidad de office hours | 🟡 Medio | Grabar sesiones, FAQ automatizado, peer mentorship |
| Spam en comunidad | 🟢 Bajo | Moderación por karma, agente anti-spam, onboarding slow |

### 16.2 Preguntas Abiertas para Resolver

1. **Idioma:** ¿Solo español o también inglés desde el inicio?
2. **Certificación:** ¿Ofrecer certificado al completar? ¿Tiene valor?
3. **Corporate:** ¿Crear tier empresarial para equipos?
4. **Partnerships:** ¿Colaborar con bootcamps existentes?
5. **Content creators:** ¿Permitir que otros creen módulos?

### 16.3 Próximos Pasos Inmediatos

1. ✅ **Validar spec con stakeholders** (este documento)
2. 🔲 Crear repo base con estructura de carpetas
3. 🔲 Escribir lección 1.1 completa (bienvenida)
4. 🔲 Preparar assets para escenario "Archivo Familiar"
5. 🔲 Setup backend básico (Supabase + Vercel)
6. 🔲 Implementar sistema de progreso local
7. 🔲 Test con 5 beta testers cercanos
8. 🔲 Iterar basado en feedback
9. 🔲 Launch beta pública M1

---

## Apéndice A: Stack Tecnológico Completo

**Frontend (Terminal):**
- Claude Code CLI
- Markdown rendering (CommonMark)
- Bash scripts para automation

**Backend:**
- Runtime: Node.js 20+ / Bun
- Framework: Vercel Functions
- Base de datos: Supabase (PostgreSQL)
- Auth: Supabase Auth + Magic Links
- Storage: Supabase Storage (para assets)
- Email: Resend
- WhatsApp: Twilio WhatsApp API
- Payments: Stripe

**DevOps:**
- Hosting: Vercel (serverless)
- CI/CD: GitHub Actions
- Monitoring: Sentry (errores)
- Analytics: Posthog (producto) + Plausible (web)
- Logs: Vercel logs

**Comunidad:**
- Discord (primary)
- Foro: Discourse self-hosted (opcional)

---

## Apéndice B: Glosario

- **Checkpoint:** Evaluación cualitativa al final de módulo
- **Cohort:** Grupo de estudiantes con fechas de inicio/fin comunes
- **Magic Link:** Link de login sin password enviado por email
- **Spaced Repetition:** Técnica de repaso en intervalos crecientes
- **Peer Review:** Revisión de código entre estudiantes
- **Karma:** Sistema de puntos por contribuciones a la comunidad
- **Wow Moment:** Momento de sorpresa/logro que engancha al estudiante
- **Local-first:** Arquitectura donde datos viven primero localmente
- **Rolling Update:** Actualización gradual sin romper compatibilidad

---

**Fin del spec.md**

**Versión:** 1.0
**Última actualización:** 2026-01-18
**Siguiente revisión:** Después de beta testing
