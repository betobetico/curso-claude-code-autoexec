# Microlección: Los Comandos - Skills Personalizados

## Instrucciones para Claude

El estudiante ya tiene README.md y CLAUDE.md. Ahora va a crear sus propios "slash commands" (Skills).

**Objetivo:**
1. Entender qué son los Skills (comandos personalizados)
2. Crear 2-3 comandos útiles para su proyecto
3. Ver cómo simplifican tareas repetitivas

---

## Flujo de la Microlección

### Parte 1: El Problema de la Repetición

**Decir:**
```
Pregunta rápida:

¿Hay algo que le pides a Claude frecuentemente?

Por ejemplo:
- "Muéstrame el estado del proyecto"
- "Genera un reporte de avance"
- "Revisa el código y dime si hay errores"

Cosas que escribes una y otra vez...
```

**ESPERAR** respuesta.

**Decir:**
```
Exacto. Esas tareas repetitivas son perfectas para automatizar.

En Claude Code puedes crear COMANDOS PERSONALIZADOS.
También se llaman "Skills".

Son atajos que ejecutan instrucciones complejas con una palabra.
```

---

### Parte 2: Qué Son los Skills

**Decir:**
```
┌─────────────────────────────────────────────────────────────────┐
│  SKILLS = Comandos personalizados                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ANTES (sin skills):                                           │
│  > "Revisa todos los archivos .js, busca errores comunes,      │
│     genera un reporte en formato markdown, y guárdalo          │
│     en docs/code-review.md"                                    │
│                                                                 │
│  DESPUÉS (con skills):                                         │
│  > /review                                                     │
│                                                                 │
│  ¡Mismo resultado, una palabra!                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Los skills se guardan en:
📁 .claude/commands/nombre-del-skill.md
```

---

### Parte 3: Anatomía de un Skill

**Decir:**
```
Un skill es un archivo markdown con instrucciones.

Por ejemplo, así se ve un skill de /review:

```markdown
# Comando: /review

Cuando el usuario ejecute /review:

1. Lee todos los archivos del proyecto
2. Busca estos problemas comunes:
   - Variables sin usar
   - Código duplicado
   - Funciones muy largas
3. Genera un reporte en docs/code-review.md
4. Muestra un resumen en el terminal

Sé específico y constructivo en los comentarios.
```

Simple, ¿no? Es como escribir instrucciones para un asistente.
```

---

### Parte 4: Identificar Skills Útiles

**Decir:**
```
Vamos a crear skills para TU proyecto.

Pensemos juntos. Para [NOMBRE DEL PROYECTO]:

¿Qué tareas harías frecuentemente?

Ejemplos según tu tipo de proyecto:

Si es un servicio/consultora:
- /propuesta → Generar borrador de propuesta
- /factura → Crear factura del mes
- /reporte → Resumen de horas trabajadas

Si es un producto digital:
- /feature → Documentar nueva funcionalidad
- /bug → Registrar un bug encontrado
- /status → Estado actual del desarrollo

Si es contenido/marketing:
- /post → Generar borrador de post
- /ideas → Brainstorm de contenido
- /calendario → Ver plan de publicaciones

¿Cuáles te serían útiles a ti?
Dame 2 o 3 ideas.
```

**ESPERAR** respuesta del estudiante.

**Guardar las ideas** para crear los skills.

---

### Parte 5: Crear el Primer Skill

**Decir:**
```
Vamos a crear el primero: /[SKILL QUE ELIGIÓ]

Primero, dime:
¿Qué debería hacer exactamente este comando?
¿Qué resultado esperas ver?
```

**ESPERAR** descripción.

**Crear** `.claude/commands/[nombre].md`:

```markdown
# Comando: /[NOMBRE]

## Descripción
[Lo que describió el estudiante]

## Instrucciones

Cuando el usuario ejecute /[NOMBRE]:

1. [PASO 1 basado en lo que describió]
2. [PASO 2]
3. [PASO 3]

## Formato de Salida

[Describir cómo debe verse el resultado]

## Ejemplo

```
[Ejemplo de output esperado]
```
```

**Decir:**
```
✅ Skill creado: /[NOMBRE]

Está en: .claude/commands/[nombre].md

¡Vamos a probarlo! Escribe:

> /[NOMBRE]
```

**ESPERAR** a que el estudiante ejecute.

**Ejecutar el skill** y mostrar resultado.

---

### Parte 6: Crear un Segundo Skill

**Decir:**
```
¿Viste qué fácil? Un comando, resultado inmediato.

Vamos a crear otro. El segundo que mencionaste: /[SEGUNDO SKILL]

¿Qué debería hacer este?
```

**ESPERAR** descripción.

**Crear** el segundo skill siguiendo el mismo proceso.

**Probar** el skill.

---

### Parte 7: Skill con Parámetros (Opcional)

**Decir:**
```
Los skills pueden recibir información adicional.

Por ejemplo:
> /propuesta Proyecto de rediseño web para cliente X

El skill recibe "Proyecto de rediseño web para cliente X"
y lo usa para personalizar el resultado.

En el archivo del skill, usas $ARGUMENTS para acceder a eso:

```markdown
# Comando: /propuesta

Genera una propuesta comercial para: $ARGUMENTS

Incluye:
- Descripción del proyecto
- Alcance
- Precio estimado
- Timeline
```

¿Quieres que alguno de tus skills acepte parámetros?
```

**ESPERAR** respuesta.

**Si sí:** Modificar uno de los skills para aceptar parámetros.
**Si no:** Continuar.

---

### Parte 8: Lista de Skills del Proyecto

**Decir:**
```
Resumen de tus skills:

📋 COMANDOS DE [NOMBRE DEL PROYECTO]

| Comando | Qué hace |
|---------|----------|
| /[SKILL1] | [Descripción breve] |
| /[SKILL2] | [Descripción breve] |
| /[SKILL3] | [Si creó un tercero] |

Estos comandos están guardados en:
📁 .claude/commands/

Puedes editarlos, añadir más, o eliminarlos cuando quieras.
```

---

### Parte 9: El Poder Compuesto

**Decir:**
```
Ahora piensa en esto:

CLAUDE.md + Skills = Sistema personalizado

Tu CLAUDE.md define cómo habla Claude.
Tus Skills definen qué puede hacer con una palabra.

Juntos, tienes un asistente específico para tu proyecto
que cualquier persona del equipo podría usar.

┌─────────────────────────────────────────────────────────────────┐
│  CLAUDE.md         →  La personalidad                          │
│  /commands/        →  Las habilidades                          │
│  JUNTOS           →  Tu asistente personalizado                │
└─────────────────────────────────────────────────────────────────┘
```

---

### Parte 10: Transición

**Decir:**
```
Tienes el cerebro (CLAUDE.md) y las habilidades (skills).

Pero hay algo más potente aún:
AUTOMATIZACIÓN.

¿Qué pasaría si ciertas cosas pasaran AUTOMÁTICAMENTE
cuando ocurre algo en tu proyecto?

Por ejemplo:
- Guardar un archivo → Se ejecuta un test
- Crear un commit → Se formatea el código
- Abrir el proyecto → Se muestra el estado

Esto se llama "Hooks".

Y es lo que vamos a ver ahora.

¿Listo?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Microlección

Cuando confirme, continúa con `modules/2-emprendedor/2.4-la-automatizacion/CLAUDE.md`.

---

## Actualizar Progreso (Interno)

```json
{
  "current_microlesson": "la-automatizacion",
  "microlessons_completed": [..., "el-proyecto", "los-comandos"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Assets a Crear

```
assets/mi-proyecto/
├── .claude/
│   ├── CLAUDE.md
│   └── commands/
│       ├── [skill1].md
│       └── [skill2].md
```

---

## Notas para Claude

- **Skills prácticos:** Los skills deben ser ÚTILES para el proyecto real del estudiante.
- **Empezar simple:** El primer skill debe ser sencillo. Éxito rápido.
- **No sobrecomplicar:** 2-3 skills es suficiente para esta microlección.
- **Probar siempre:** Cada skill creado debe probarse inmediatamente.
- **Si el skill no funciona:** Debug en vivo, mostrar cómo iterar.
- **Celebrar:** Crear tu primer comando personalizado es empoderador.
