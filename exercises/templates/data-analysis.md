# Template: Análisis de Datos

## Variables de Contexto
- `{{LEVEL}}`: beginner | intermediate | advanced
- `{{DATA_SOURCE}}`: Fuente de datos (archivo, carpeta, múltiples fuentes)
- `{{ANALYSIS_GOAL}}`: Qué tipo de análisis se necesita
- `{{STRUGGLE_AREA}}`: Concepto donde tiene dificultades

---

## Ejercicios por Nivel

### Beginner

**Ejercicio: Análisis Descriptivo**

```
📝 Ejercicio: ¿Qué nos dicen los datos?

Contexto:
Tienes datos de {{DATA_SOURCE}}.
El cliente pregunta: "¿Cómo vamos?"

Objetivo:
1. Resume los datos principales (totales, conteos)
2. Identifica el valor más alto y más bajo
3. Presenta los hallazgos de forma clara

{{#if STRUGGLE_AREA == "pattern_recognition"}}
💡 Pista: Pide a Claude "analiza estos datos y dime qué patrones ves"
{{/if}}

Criterio de éxito:
✅ Resumen claro de los datos
✅ Identificaste valores extremos
✅ Presentación comprensible

Tiempo estimado: 10 min
```

### Intermediate

**Ejercicio: Comparativa y Tendencias**

```
📝 Ejercicio: Evolución temporal

Contexto:
Tienes datos de varios meses en {{DATA_SOURCE}}.
El cliente quiere saber si las cosas mejoran o empeoran.

Objetivo:
1. Agrupa los datos por período (mes, trimestre)
2. Calcula la variación entre períodos
3. Identifica tendencias (creciente, decreciente, estable)
4. Crea una visualización simple (tabla comparativa)

{{#if STRUGGLE_AREA == "data_analysis"}}
💡 Pista: "Compara los datos mes a mes y dime la tendencia"
{{/if}}

Criterio de éxito:
✅ Datos agrupados correctamente
✅ Variaciones calculadas
✅ Tendencia identificada con evidencia

Tiempo estimado: 15 min
```

### Advanced

**Ejercicio: Análisis Predictivo Simple**

```
📝 Ejercicio: ¿Qué podemos esperar?

Contexto:
Con el histórico de {{DATA_SOURCE}}, el cliente quiere proyecciones.

Objetivo:
1. Analiza patrones históricos (estacionalidad, tendencias)
2. Identifica factores que influyen en los resultados
3. Propón una proyección razonada para el próximo período
4. Incluye supuestos y limitaciones de tu análisis

Criterio de éxito:
✅ Patrones históricos documentados
✅ Proyección con metodología clara
✅ Supuestos explícitos

Tiempo estimado: 25 min
```

---

## Validación

```javascript
export async function validate(context) {
  const { analysisOutput, requiredSections } = context;

  const results = {
    output_exists: fileExists(analysisOutput),
    has_summary: checkSection(analysisOutput, 'resumen'),
    has_findings: checkSection(analysisOutput, 'hallazgos'),
    has_data_support: checkDataReferences(analysisOutput)
  };

  return {
    passed: Object.values(results).filter(Boolean).length >= 3,
    details: results
  };
}
```
