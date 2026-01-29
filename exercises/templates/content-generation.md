# Template: Generación de Contenido

## Variables de Contexto
- `{{LEVEL}}`: beginner | intermediate | advanced
- `{{CONTEXT_FILES}}`: Archivos de contexto disponibles
- `{{OUTPUT_TYPE}}`: Tipo de documento a generar (informe, propuesta, resumen)
- `{{AUDIENCE}}`: Audiencia objetivo (cliente, equipo, dirección)
- `{{STRUGGLE_AREA}}`: Concepto donde tiene dificultades

---

## Ejercicios por Nivel

### Beginner

**Ejercicio: Documento Simple**

```
📝 Ejercicio: Crea tu primer documento automático

Contexto:
Tienes información en {{CONTEXT_FILES}}.
Necesitas crear un {{OUTPUT_TYPE}} para {{AUDIENCE}}.

Objetivo:
1. Lee los archivos de contexto
2. Genera un documento con la información relevante
3. Asegúrate de que tenga estructura clara (título, secciones, conclusión)

{{#if STRUGGLE_AREA == "file_creation"}}
💡 Pista: "Lee estos archivos y genera un resumen ejecutivo"
{{/if}}

Criterio de éxito:
✅ Documento creado
✅ Información correcta del contexto
✅ Estructura clara

Tiempo estimado: 10 min
```

### Intermediate

**Ejercicio: Documento Personalizado**

```
📝 Ejercicio: Adapta el mensaje a la audiencia

Contexto:
Con la misma información de {{CONTEXT_FILES}}, necesitas
versiones diferentes para distintas audiencias.

Objetivo:
1. Genera una versión ejecutiva (1 página, puntos clave)
2. Genera una versión detallada (con datos y análisis)
3. Ambas deben mantener consistencia en los datos

{{#if STRUGGLE_AREA == "markdown"}}
💡 Pista: Usa formato markdown para estructura profesional
{{/if}}

Criterio de éxito:
✅ Dos versiones creadas
✅ Tono apropiado para cada audiencia
✅ Datos consistentes entre versiones

Tiempo estimado: 15 min
```

### Advanced

**Ejercicio: Sistema de Documentación**

```
📝 Ejercicio: Documentación automatizada

Contexto:
El cliente necesita generar {{OUTPUT_TYPE}} regularmente
basándose en datos que cambian cada semana.

Objetivo:
1. Analiza qué datos necesita el documento
2. Crea una plantilla reutilizable
3. Genera el documento actual
4. Documenta el proceso para que otros puedan replicarlo

Criterio de éxito:
✅ Plantilla creada y funcional
✅ Documento actual generado
✅ Instrucciones de uso documentadas

Tiempo estimado: 25 min
```

---

## Validación

```javascript
export async function validate(context) {
  const { outputFile, requiredSections, minLength } = context;

  const content = readFile(outputFile);

  const results = {
    file_exists: fileExists(outputFile),
    has_structure: checkMarkdownStructure(content),
    meets_length: content.length >= minLength,
    has_required_sections: requiredSections.every(s =>
      content.toLowerCase().includes(s.toLowerCase())
    )
  };

  return {
    passed: Object.values(results).every(Boolean),
    details: results
  };
}
```
