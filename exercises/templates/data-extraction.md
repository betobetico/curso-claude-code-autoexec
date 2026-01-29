# Template: Extracción de Datos

## Variables de Contexto
- `{{LEVEL}}`: beginner | intermediate | advanced
- `{{SOURCE_FILES}}`: Archivos fuente disponibles
- `{{DATA_TYPE}}`: Tipo de datos a extraer (fechas, montos, nombres, etc.)
- `{{STRUGGLE_AREA}}`: Concepto donde tiene dificultades

---

## Ejercicios por Nivel

### Beginner

**Ejercicio: Extracción Simple**

```
📝 Ejercicio: Encuentra la información clave

Contexto:
Tienes {{SOURCE_FILES}} documentos del cliente.
Necesitas extraer información específica sin abrirlos uno por uno.

Objetivo:
1. Identifica todos los documentos que mencionan "{{DATA_TYPE}}"
2. Lista los archivos donde aparece
3. Muestra las líneas relevantes

{{#if STRUGGLE_AREA == "grep_usage"}}
💡 Pista: Puedes pedir "busca la palabra X en todos los archivos"
{{/if}}

Criterio de éxito:
✅ Identificaste los archivos correctos
✅ Encontraste las menciones relevantes

Tiempo estimado: 5 min
```

### Intermediate

**Ejercicio: Extracción Estructurada**

```
📝 Ejercicio: Consolida datos de múltiples fuentes

Contexto:
El cliente tiene facturas en {{SOURCE_FILES}} archivos diferentes.
Necesita un resumen consolidado.

Objetivo:
1. Extrae de cada factura: número, fecha, monto, cliente
2. Crea una tabla resumen con todos los datos
3. Guarda el resultado en un archivo .md o .csv

{{#if STRUGGLE_AREA == "data_extraction"}}
💡 Pista: Claude puede leer múltiples archivos y consolidar.
Prueba: "extrae los datos de todas las facturas y hazme una tabla"
{{/if}}

Criterio de éxito:
✅ Datos extraídos de todos los archivos
✅ Tabla consolidada creada
✅ Archivo de salida generado

Tiempo estimado: 15 min
```

### Advanced

**Ejercicio: Extracción con Análisis**

```
📝 Ejercicio: Inteligencia de datos

Contexto:
Tienes histórico de {{SOURCE_FILES}} documentos del último año.
El cliente quiere insights, no solo datos.

Objetivo:
1. Extrae todos los datos relevantes (montos, fechas, clientes)
2. Calcula totales, promedios, tendencias
3. Identifica el cliente más frecuente y el mes con más actividad
4. Genera un informe ejecutivo con hallazgos

Criterio de éxito:
✅ Datos extraídos correctamente
✅ Análisis estadístico incluido
✅ Informe con insights accionables

Tiempo estimado: 25 min
```

---

## Validación

```javascript
export async function validate(context) {
  const { outputFile, expectedFields } = context;

  const results = {
    output_exists: fileExists(outputFile),
    has_required_fields: checkFields(outputFile, expectedFields),
    data_accuracy: validateDataAccuracy(outputFile, context.sourceData)
  };

  return {
    passed: results.output_exists && results.has_required_fields,
    details: results
  };
}
```
