# Template: Investigación Web

## Variables de Contexto
- `{{LEVEL}}`: beginner | intermediate | advanced
- `{{RESEARCH_TOPIC}}`: Tema a investigar
- `{{INTERNAL_DATA}}`: Datos internos disponibles para enriquecer
- `{{OUTPUT_FORMAT}}`: Formato del entregable
- `{{STRUGGLE_AREA}}`: Concepto donde tiene dificultades

---

## Ejercicios por Nivel

### Beginner

**Ejercicio: Búsqueda Simple**

```
📝 Ejercicio: Enriquece con información externa

Contexto:
Tienes datos internos sobre {{RESEARCH_TOPIC}}.
El cliente quiere contexto adicional.

Objetivo:
1. Busca información relevante sobre {{RESEARCH_TOPIC}}
2. Encuentra 3-5 datos que complementen tu información interna
3. Resume los hallazgos en un párrafo

{{#if STRUGGLE_AREA == "web_search"}}
💡 Pista: Puedes pedir "busca información sobre X y complementa estos datos"
{{/if}}

Criterio de éxito:
✅ Información externa encontrada
✅ Relevante para el contexto interno
✅ Fuentes citadas

Tiempo estimado: 10 min
```

### Intermediate

**Ejercicio: Análisis Competitivo**

```
📝 Ejercicio: Benchmarking básico

Contexto:
El cliente quiere saber cómo se compara con el mercado
en el área de {{RESEARCH_TOPIC}}.

Objetivo:
1. Investiga estándares o benchmarks del sector
2. Compara los datos internos con los externos
3. Identifica gaps y oportunidades
4. Presenta hallazgos en formato comparativo

Criterio de éxito:
✅ Benchmarks identificados
✅ Comparación clara
✅ Recomendaciones basadas en datos

Tiempo estimado: 20 min
```

### Advanced

**Ejercicio: Investigación Profunda**

```
📝 Ejercicio: Due diligence

Contexto:
El cliente evalúa una decisión importante sobre {{RESEARCH_TOPIC}}.
Necesita información completa antes de decidir.

Objetivo:
1. Investiga múltiples fuentes (mercado, competencia, regulación)
2. Cruza información externa con datos internos
3. Identifica riesgos y oportunidades
4. Genera informe de due diligence con recomendaciones

Criterio de éxito:
✅ Múltiples fuentes consultadas
✅ Análisis cruzado interno/externo
✅ Riesgos y oportunidades documentados
✅ Recomendación fundamentada

Tiempo estimado: 30 min
```

---

## Validación

```javascript
export async function validate(context) {
  const { outputFile, requiredElements } = context;

  const content = readFile(outputFile);

  const results = {
    file_exists: fileExists(outputFile),
    has_external_data: checkExternalSources(content),
    has_internal_reference: checkInternalData(content, context.internalData),
    has_synthesis: checkSynthesis(content),
    has_sources: checkCitations(content)
  };

  return {
    passed: Object.values(results).filter(Boolean).length >= 4,
    details: results
  };
}
```
