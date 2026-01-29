# Microlección: El Proyecto - CLAUDE.md Avanzado

## Instrucciones para Claude

El estudiante ya tiene su idea documentada en README.md. Ahora va a crear el "cerebro" del proyecto: un CLAUDE.md personalizado.

**Objetivo:**
1. Entender qué es CLAUDE.md y por qué es poderoso
2. Crear un CLAUDE.md personalizado para su proyecto
3. Ver cómo Claude cambia de comportamiento según el archivo

---

## Flujo de la Microlección

### Parte 1: El Poder del CLAUDE.md

**Decir:**
```
En el Módulo 1 te mostré el CLAUDE.md de este curso.

Ahora vas a crear el tuyo propio.

Piénsalo así:

┌─────────────────────────────────────────────────────────────────┐
│  CLAUDE.md = El ADN de tu proyecto                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Sin CLAUDE.md:                                                │
│  Claude es genérico, no sabe nada de tu contexto               │
│                                                                 │
│  Con CLAUDE.md:                                                │
│  Claude "recuerda" tu proyecto cada vez que abres el terminal  │
│  Sabe qué hacer y qué NO hacer                                 │
│  Mantiene un tono y estilo consistente                         │
│  Es como tener un asistente que conoce tu negocio              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

¿Tiene sentido?
```

**ESPERAR** confirmación.

---

### Parte 2: Anatomía de un CLAUDE.md

**Decir:**
```
Un buen CLAUDE.md tiene estas secciones:

📋 ESTRUCTURA DE UN CLAUDE.md

1. CONTEXTO DEL PROYECTO
   └── ¿Qué es? ¿Para quién? ¿Qué problema resuelve?

2. COMPORTAMIENTO DE CLAUDE
   └── ¿Cómo debe hablar? ¿Qué tono? ¿Qué personalidad?

3. REGLAS Y LÍMITES
   └── ¿Qué debe hacer siempre? ¿Qué no debe hacer nunca?

4. ESTRUCTURA DEL PROYECTO
   └── ¿Cómo están organizados los archivos?

5. COMANDOS ÚTILES (opcional)
   └── Atajos que usarás frecuentemente

Vamos a crear el tuyo paso a paso.
```

---

### Parte 3: Crear el CLAUDE.md del Proyecto

**Decir:**
```
Primero, necesito entender cómo quieres que Claude se comporte en tu proyecto.

Responde estas preguntas:

1. ¿Cómo debería hablarle Claude a los usuarios de tu producto?
   (formal, casual, técnico, amigable, directo...)

2. ¿Hay algo que Claude NUNCA debería hacer en tu proyecto?
   (ejemplo: dar consejos médicos, hacer promesas de resultados...)

3. ¿Qué debería hacer Claude SIEMPRE?
   (ejemplo: explicar sus pasos, pedir confirmación antes de borrar...)
```

**ESPERAR** respuestas.

---

### Parte 4: Generar el CLAUDE.md

**Decir:**
```
Perfecto. Voy a crear tu CLAUDE.md basado en lo que me contaste.
```

**Crear** `assets/mi-proyecto/.claude/CLAUDE.md`:

```markdown
# [NOMBRE DEL PROYECTO] - Instrucciones para Claude

## Contexto del Proyecto

[DESCRIPCIÓN basada en el README que creamos]

### Problema que Resuelve
[PROBLEMA del usuario]

### Usuario Objetivo
[PERFIL del usuario ideal]

---

## Comportamiento de Claude

### Personalidad
- **Tono:** [Lo que dijo el estudiante]
- **Estilo:** Claro, directo, orientado a resultados
- **Idioma:** Español (o el idioma del proyecto)

### Reglas de Interacción

1. **Siempre:**
   [REGLAS "SIEMPRE" del estudiante]
   - Explicar qué vas a hacer antes de hacerlo
   - Confirmar antes de modificar archivos importantes

2. **Nunca:**
   [REGLAS "NUNCA" del estudiante]
   - Modificar archivos sin avisar
   - Asumir sin preguntar

---

## Estructura del Proyecto

```
[NOMBRE-PROYECTO]/
├── .claude/
│   └── CLAUDE.md          # Este archivo
├── README.md              # Documentación principal
├── src/                   # Código fuente (si aplica)
├── docs/                  # Documentación adicional
└── assets/                # Recursos del proyecto
```

---

## Comandos Frecuentes

| Acción | Qué decir |
|--------|-----------|
| Ver estado | "¿Cómo va el proyecto?" |
| Añadir funcionalidad | "Quiero añadir [X]" |
| Revisar código | "Revisa esto y dime si hay mejoras" |

---

## Notas Técnicas

- Este proyecto usa [TECNOLOGÍAS si las hay]
- El MVP se enfoca en [FUNCIONALIDAD CORE]

---

*Creado durante REBUNDLE - Módulo 2*
```

**Decir:**
```
✅ CLAUDE.md creado.

Revísalo:
📄 assets/mi-proyecto/.claude/CLAUDE.md

¿Quieres ajustar algo antes de continuar?
```

**ESPERAR** feedback.

---

### Parte 5: Demostración del Cambio de Comportamiento

**Decir:**
```
Ahora viene la magia.

Cuando Claude abre una carpeta con CLAUDE.md,
automáticamente lee esas instrucciones y las sigue.

Vamos a probarlo. Escribe esto:

> Imagina que estás trabajando en mi proyecto.
> ¿Cómo te presentarías a un nuevo usuario?
```

**ESPERAR** a que el estudiante escriba.

**Responder EN EL TONO definido en su CLAUDE.md.** Demostrar que Claude "cambió" de personalidad.

**Decir:**
```
¿Ves la diferencia?

Respondí en el tono que definiste para tu proyecto.
[TONO QUE DEFINIÓ - casual, formal, etc.]

Esto es lo que pasa automáticamente cuando trabajas
en una carpeta con CLAUDE.md.

Claude se convierte en el asistente específico de tu proyecto.
```

---

### Parte 6: El Poder de las Reglas

**Decir:**
```
Las reglas que definiste son importantes.

Por ejemplo, dijiste que Claude [NUNCA DEBE / SIEMPRE DEBE]:
[REPETIR SUS REGLAS]

Estas reglas persisten. No tienes que repetirlas cada vez.

┌─────────────────────────────────────────────────────────────────┐
│  CLAUDE.md = Memoria persistente                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  • Se lee automáticamente al abrir la carpeta                  │
│  • Las reglas aplican a TODA la sesión                         │
│  • Puedes actualizarlo cuando quieras                          │
│  • Es parte del "Context Engineering"                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Parte 7: Ubicaciones de CLAUDE.md

**Decir:**
```
Un dato útil:

CLAUDE.md puede estar en varios lugares:

📁 ~/.claude/CLAUDE.md
   → Global: aplica a TODOS tus proyectos

📁 proyecto/.claude/CLAUDE.md
   → Proyecto: aplica solo a esta carpeta

📁 proyecto/carpeta/CLAUDE.md
   → Específico: aplica solo a esa subcarpeta

Claude los lee en orden, del más general al más específico.
Así puedes tener reglas globales + reglas por proyecto.
```

---

### Parte 8: Reflexión y Transición

**Decir:**
```
Has creado el "cerebro" de tu proyecto.

Ahora cada vez que abras Claude Code en esa carpeta:
- Sabrá de qué va el proyecto
- Hablará en el tono correcto
- Seguirá tus reglas

Pero hay algo que hace esto aún más potente:
COMANDOS PERSONALIZADOS.

En la siguiente sección vas a crear tus propios
"slash commands" que ejecutan tareas complejas con una palabra.

¿Te imaginas poder escribir /deploy y que se despliegue todo?
¿O /reporte y que te genere un informe?

Vamos a crear los tuyos.

¿Listo?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Microlección

Cuando confirme, continúa con `modules/2-emprendedor/2.3-los-comandos/CLAUDE.md`.

---

## Actualizar Progreso (Interno)

```json
{
  "current_microlesson": "los-comandos",
  "microlessons_completed": [..., "la-idea", "el-proyecto"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Assets a Crear

```
assets/mi-proyecto/
├── README.md              # (ya existe de la microlección anterior)
└── .claude/
    └── CLAUDE.md          # (nuevo)
```

---

## Notas para Claude

- **Personalización total:** El CLAUDE.md debe reflejar SU proyecto, no uno genérico.
- **Demostración clara:** Cuando demuestres el cambio de tono, que sea evidente.
- **No complicar:** Si el estudiante da pocas reglas, está bien. Menos es más.
- **Si pregunta sobre jerarquía:** Explicar que el más específico gana.
- **Celebrar:** Crear un CLAUDE.md propio es un milestone importante.
