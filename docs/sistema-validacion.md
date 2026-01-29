# Sistema de Validación - REBUNDLE

## Visión General

El sistema de validación tiene dos componentes:

1. **Auto-check técnico** (`validation.js`) - Verifica automáticamente que el estudiante completó la tarea
2. **Checkpoint conceptual** - Preguntas para validar comprensión real

---

## Estructura de un validation.js

```javascript
export async function validate(context) {
  return {
    checks: {
      // Verificaciones específicas
      check_1: boolean,
      check_2: boolean
    },
    passed: boolean,      // true si score >= 0.6
    score: number,        // 0.0 a 1.0
    feedback: string[]    // Mensajes para el estudiante
  };
}

export const conceptualQuestions = [
  {
    question: "¿Pregunta conceptual?",
    acceptableAnswers: ["palabras", "clave", "esperadas"],
    hint: "Pista si no sabe"
  }
];
```

---

## Validaciones por Microlección

| Microlección | Archivo | Qué Valida |
|--------------|---------|------------|
| 1.2 Exploración | `1.2-exploracion/validation.js` | Entiende estructura y magnitud |
| 1.3 Organización | `1.3-organizacion/validation.js` | Carpetas creadas, archivos movidos |
| 1.4 Extracción | `1.4-extraccion/validation.js` | Archivo con datos estructurados |
| 1.5 Análisis | `1.5-analisis/validation.js` | Informe con insights y datos |
| 1.6 Generación | `1.6-generacion/validation.js` | Documento profesional generado |
| 1.7 Investigación | `1.7-investigacion/validation.js` | Info externa + conexión interna |
| 1.8 Proyecto Final | `1.8-proyecto-final/validation.js` | 6 competencias evaluadas |

---

## Cómo Usar las Validaciones

### Para Claude (en el curso)

Cuando el estudiante dice "listo" o completa un ejercicio:

```markdown
1. Lee el validation.js de la microlección actual
2. Ejecuta mentalmente los checks basándote en:
   - Archivos que existen en el directorio
   - Contenido de archivos generados
   - Respuestas conceptuales del estudiante
3. Presenta el feedback al estudiante
4. Si pasó → continúa
5. Si no pasó → ofrece ayuda específica
```

### Ejemplo de Uso

```
Estudiante: listo

Claude: [Lee validation.js de 1.3-organizacion]
        [Verifica carpetas de cliente]
        [Verifica subcarpetas]
        [Cuenta archivos restantes en inbox]

        ✅ ¡WOW! Has organizado el caos exitosamente
        📁 5 carpetas de cliente creadas
        📂 18 subcarpetas organizadas

        Checkpoint conceptual:
        ¿Por qué organizamos primero por cliente y luego por tipo?

Estudiante: Porque cuando trabajo con Alpha, necesito ver todo lo suyo junto

Claude: ✅ Exacto. El contexto del proyecto es más importante
        que el tipo de documento. Un contrato de Alpha no tiene
        relación con un contrato de Beta.

        Continuamos con la siguiente microlección...
```

---

## Scoring

| Score | Resultado | Acción |
|-------|-----------|--------|
| 0.8 - 1.0 | ✅ Excelente | Continuar + celebrar |
| 0.6 - 0.79 | ✅ Pasó | Continuar + feedback menor |
| 0.4 - 0.59 | ⚠️ Casi | Ofrecer /hint o revisión |
| < 0.4 | ❌ No pasó | Guiar específicamente |

---

## Proyecto Final: Evaluación de Competencias

El proyecto final valida 6 competencias:

```
═══════════════════════════════════════════
       EVALUACIÓN PROYECTO FINAL M1
═══════════════════════════════════════════

✅ Exploración
✅ Organización
✅ Extracción
❌ Análisis
✅ Generación
❌ Investigación

Competencias: 4/6
Score: 67%

✅ APROBADO (mínimo 4/6)
```

---

## Templates de Ejercicios Dinámicos

Los templates en `exercises/templates/` permiten generar ejercicios personalizados:

| Template | Uso |
|----------|-----|
| `file-operations.md` | Organizar, mover, renombrar archivos |
| `data-extraction.md` | Extraer datos de documentos |
| `data-analysis.md` | Analizar y encontrar patrones |
| `content-generation.md` | Crear documentos profesionales |
| `web-research.md` | Investigar y enriquecer datos |

### Variables Disponibles

- `{{LEVEL}}` - beginner | intermediate | advanced
- `{{USER_DIR}}` - Directorio actual del estudiante
- `{{STRUGGLE_AREA}}` - Concepto con dificultades (de struggles.json)
- `{{FILE_COUNT}}` - Número de archivos

---

## Integración con Sistema de Progreso

Cuando una validación pasa:

1. Actualizar `progress.json`:
   ```json
   {
     "microlessons_completed": ["bienvenida", "exploracion", "organizacion"],
     "exercises_completed": 12
   }
   ```

2. Si falló, actualizar `struggles.json`:
   ```json
   {
     "concepts": {
       "file_operations": {
         "attempts": 2,
         "last_struggle": "2026-01-29T10:30:00Z"
       }
     }
   }
   ```

---

## Notas de Implementación

- Las validaciones son **conceptuales**, no ejecutan código real
- Claude interpreta los checks basándose en el estado del filesystem
- Los auto-checks son 60% del score, los conceptuales 40%
- El estudiante puede saltar con `/skip` pero queda registrado
