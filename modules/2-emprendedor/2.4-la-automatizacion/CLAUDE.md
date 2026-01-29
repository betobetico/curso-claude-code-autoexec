# Microlección: La Automatización - Hooks

## Instrucciones para Claude

El estudiante ya tiene CLAUDE.md y Skills. Ahora descubre los Hooks: acciones que se ejecutan automáticamente cuando ocurren eventos.

**Objetivo:**
1. Entender qué son los Hooks y cuándo usarlos
2. Configurar al menos un Hook útil
3. Ver la automatización en acción

---

## Flujo de la Microlección

### Parte 1: El Concepto de Automatización

**Decir:**
```
Hasta ahora, todo lo que hace Claude requiere que TÚ lo pidas.

Escribes un comando → Claude ejecuta.

Pero hay otra forma: la AUTOMATIZACIÓN.

┌─────────────────────────────────────────────────────────────────┐
│  HOOKS = Acciones automáticas                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Sin Hooks:                                                    │
│  Tú: "Revisa el código"  →  Claude revisa                      │
│  Tú: "Formatea esto"     →  Claude formatea                    │
│                                                                 │
│  Con Hooks:                                                    │
│  Guardas archivo         →  Claude revisa AUTOMÁTICAMENTE      │
│  Haces commit           →  Claude formatea AUTOMÁTICAMENTE     │
│                                                                 │
│  No tienes que acordarte. Simplemente pasa.                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

¿Te suena útil?
```

**ESPERAR** reacción.

---

### Parte 2: Tipos de Hooks

**Decir:**
```
Hay varios momentos donde puedes "enganchar" una acción:

📋 TIPOS DE HOOKS

1. PreToolUse
   → Antes de que Claude use una herramienta
   → Ejemplo: Pedir confirmación antes de borrar archivos

2. PostToolUse
   → Después de que Claude use una herramienta
   → Ejemplo: Hacer backup después de modificar algo

3. Notification
   → Cuando Claude quiere avisarte de algo
   → Ejemplo: Enviar mensaje a Slack cuando termina una tarea

4. Stop
   → Cuando Claude termina de ejecutar
   → Ejemplo: Generar resumen de lo que hizo

El más común para empezar es PostToolUse:
"Después de hacer X, haz Y automáticamente".
```

---

### Parte 3: Configurar Hooks

**Decir:**
```
Los hooks se configuran en el archivo de settings de Claude Code.

Hay dos formas:

1. En tu proyecto (local):
   📁 .claude/settings.json

2. En tu usuario (global):
   📁 ~/.claude/settings.json

Vamos a configurar uno para tu proyecto.
```

---

### Parte 4: Elegir un Hook Útil

**Decir:**
```
Pensemos qué hook te sería útil para [NOMBRE DEL PROYECTO].

Opciones populares:

🔹 Hook de calidad
   Después de escribir código → Revisar errores básicos

🔹 Hook de documentación
   Después de crear un archivo → Actualizar el README

🔹 Hook de backup
   Antes de modificar archivos → Crear copia de seguridad

🔹 Hook de notificación
   Al terminar tarea larga → Notificar (sonido, mensaje)

🔹 Hook de commit
   Después de cambios importantes → Sugerir hacer commit

¿Cuál te gustaría configurar?
O si tienes otra idea, dímela.
```

**ESPERAR** elección del estudiante.

---

### Parte 5: Crear el Hook

**Basándose en su elección, crear el hook apropiado.**

**Ejemplo si eligió "Hook de calidad":**

**Decir:**
```
Vamos a crear un hook que revise tu código después de escribirlo.

Primero, necesitamos crear el archivo de settings:
```

**Crear** `.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "echo '✅ Archivo modificado. Recuerda revisar errores antes de commit.'"
          }
        ]
      }
    ]
  }
}
```

**Decir:**
```
✅ Hook configurado.

Ahora, cada vez que Claude modifique un archivo,
verás un recordatorio automático.

Vamos a probarlo. Escribe:

> Añade un comentario al README.md
```

**ESPERAR** y ejecutar.

**Mostrar que el hook se ejecutó** (el mensaje de recordatorio aparece).

---

### Parte 6: Hook Más Avanzado (Opcional)

**Si el estudiante muestra interés:**

**Decir:**
```
Los hooks pueden hacer cosas más complejas.

Por ejemplo, un hook que ejecuta un script:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "node scripts/post-write.js $CLAUDE_FILE_PATH"
          }
        ]
      }
    ]
  }
}
```

El script recibe la ruta del archivo modificado
y puede hacer lo que quieras: tests, linting, notificaciones...

¿Te interesa crear algo así para tu proyecto?
```

**Si sí:** Ayudar a crear un script simple.
**Si no:** Continuar.

---

### Parte 7: Precauciones con Hooks

**Decir:**
```
Un aviso importante:

⚠️ PRECAUCIONES CON HOOKS

1. Los hooks se ejecutan CADA VEZ
   → Un hook en "Write" se ejecuta en CADA escritura
   → Piensa si realmente lo necesitas siempre

2. Los hooks pueden ralentizar
   → Si el hook hace algo pesado, todo se vuelve lento
   → Mantén los hooks simples

3. Los hooks pueden fallar
   → Si el script del hook tiene error, puede bloquear
   → Prueba bien antes de dejarlo activo

4. Los hooks son silenciosos
   → A veces olvidas que están ahí
   → Documenta tus hooks en el CLAUDE.md

Mi recomendación: empieza con hooks simples y ve añadiendo.
```

---

### Parte 8: Resumen del Sistema

**Decir:**
```
Veamos lo que has construido hasta ahora:

┌─────────────────────────────────────────────────────────────────┐
│  TU SISTEMA PERSONALIZADO                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📄 README.md                                                  │
│     └── La visión de tu proyecto                               │
│                                                                 │
│  🧠 .claude/CLAUDE.md                                          │
│     └── Cómo se comporta Claude                                │
│                                                                 │
│  ⚡ .claude/commands/                                           │
│     └── Tus skills personalizados                              │
│     └── /[skill1], /[skill2]                                   │
│                                                                 │
│  🔄 .claude/settings.json                                      │
│     └── Tus hooks de automatización                            │
│                                                                 │
│  TODO JUNTO = Un asistente completo para tu proyecto           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Parte 9: Transición al Prototipo

**Decir:**
```
Tienes el sistema. Tienes las automatizaciones.

Ahora viene la parte más visible:
CONSTRUIR ALGO QUE LA GENTE PUEDA VER.

En la siguiente sección vamos a crear
una landing page simple para tu proyecto.

No necesitas saber HTML ni CSS.
Claude lo hace por ti.

¿Listo para ver tu idea cobrar vida en el navegador?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Microlección

Cuando confirme, continúa con `modules/2-emprendedor/2.5-el-prototipo/CLAUDE.md`.

---

## Actualizar Progreso (Interno)

```json
{
  "current_microlesson": "el-prototipo",
  "microlessons_completed": [..., "los-comandos", "la-automatizacion"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Assets a Crear

```
assets/mi-proyecto/
├── .claude/
│   ├── CLAUDE.md
│   ├── commands/
│   │   └── [skills...]
│   └── settings.json      # (nuevo - hooks)
```

---

## Notas para Claude

- **Hooks simples:** Para no-técnicos, mantener los hooks muy simples.
- **Demostración clara:** El hook debe ejecutarse visiblemente para que vean el efecto.
- **No abrumar:** Un hook bien configurado es suficiente para esta microlección.
- **Precauciones:** Advertir sobre hooks que pueden molestar o ralentizar.
- **Si no funciona:** Debug en vivo, explicar qué salió mal.
- **Alternativa:** Si los hooks parecen muy técnicos, enfocar en el concepto y dejar la implementación como "siguiente paso opcional".
