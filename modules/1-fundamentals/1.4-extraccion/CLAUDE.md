# Fase: Extracción de Datos

## Instrucciones para Claude

Esta fase continúa naturalmente después de la organización. El estudiante ya tiene sus archivos ordenados.

El objetivo es:
1. Mostrar cómo extraer información de múltiples archivos
2. Crear tablas y resúmenes automáticamente
3. Demostrar el poder de "leer" documentos sin abrirlos

---

## Flujo de la Fase

### Parte 1: El Problema

**Decir:**
```
Ahora que los documentos están organizados, viene lo interesante:

¿Qué hay DENTRO de esos documentos?

Imagina que tu contador te pide:
"Necesito el total facturado a cada cliente este año"

¿Vas a abrir 40 facturas una por una?
¿Copiar y pegar montos en un Excel?

Hay una forma mejor.
```

---

### Parte 2: Ver el Contenido

**Decir:**
```
Primero, veamos qué contiene una factura.

Escribe:

> Muéstrame el contenido de una factura de Alpha
```

**ESPERAR** y ejecutar.

**Decir:**
```
Ahí está. Una factura con:
- Número de factura
- Fecha
- Cliente
- Importe y Total

Ahora imagina extraer el "Total" de TODAS las facturas a la vez.
```

---

### Parte 3: Extracción Básica

**Decir:**
```
Hagamos tu primera extracción.

Escribe:

> Extrae los totales de todas las facturas
```

**ESPERAR** y ejecutar.

**Después de mostrar los resultados:**

```
En segundos, tienes todos los totales.

Sin abrir un solo archivo.
Sin copiar y pegar.

Esto es extracción de datos.
```

---

### Parte 4: Crear una Tabla

**Decir:**
```
Pero podemos hacerlo más útil. Vamos a crear una tabla organizada.

Escribe:

> Crea una tabla con todas las facturas: cliente, archivo y monto
```

**ESPERAR** y ejecutar.

**Mostrar tabla y decir:**

```
Ahí tienes. Un resumen de facturación listo para enviar a tu contador.

¿Cuánto tiempo te hubiera tomado hacer esto manualmente?
```

**ESPERAR** respuesta.

---

### Parte 5: Exploración Libre

**Decir:**
```
Ahora tú. ¿Qué más te gustaría extraer de estos documentos?

Algunas ideas:
• "¿Cuál es la factura más alta de cada cliente?"
• "Dame las fechas de todos los contratos"
• "¿Cuánto he facturado en total?"
• O cualquier otra pregunta que se te ocurra

¿Qué quieres saber?
```

**ESPERAR** y ejecutar lo que pida.

**Si el estudiante no tiene ideas, sugerir:**
```
Prueba con: "¿Cuál es el total facturado por cliente?"
```

---

### Parte 6: Informe Consolidado

**Decir:**
```
Para cerrar esta parte, vamos a generar un informe ejecutivo completo.

Escribe:

> Genera un informe ejecutivo del estado de todos los clientes
```

**ESPERAR** y ejecutar script de informe consolidado:

```bash
echo "=============================================="
echo "📊 INFORME EJECUTIVO - ESTADO DE CLIENTES"
echo "=============================================="
echo "Generado: $(date '+%Y-%m-%d %H:%M')"
echo ""

for cliente in alpha beta gamma delta epsilon; do
    base="assets/consultor-abrumado/proyectos-organizados/cliente-$cliente"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📂 CLIENTE: $(echo $cliente | tr '[:lower:]' '[:upper:]')"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    propuestas=$(ls "$base/propuestas" 2>/dev/null | wc -l | tr -d ' ')
    contratos=$(ls "$base/contratos" 2>/dev/null | wc -l | tr -d ' ')
    facturas=$(ls "$base/facturas" 2>/dev/null | wc -l | tr -d ' ')
    emails=$(ls "$base/emails" 2>/dev/null | wc -l | tr -d ' ')
    notas=$(ls "$base/notas" 2>/dev/null | wc -l | tr -d ' ')

    echo "  Documentos: $propuestas propuestas, $contratos contratos, $facturas facturas"
    echo "  Comunicaciones: $emails emails, $notas notas"
    echo ""
done

echo "=============================================="
echo "✅ Informe generado automáticamente"
echo "=============================================="
```

**Decir:**
```
Un informe ejecutivo completo. En segundos.

Esto es lo que puedes hacer con extracción de datos:
- Leer contenido de múltiples archivos
- Buscar patrones específicos
- Agregar información de varias fuentes
- Presentar en formato profesional
```

---

### Parte 7: Reflexión y Transición

**Decir:**
```
¿Qué te ha parecido? ¿Ves algún uso práctico para tu trabajo real?

Por ejemplo:
- Extraer datos de facturas para contabilidad
- Sacar fechas clave de contratos
- Crear resúmenes de comunicaciones con clientes

¿Hay algo específico que te gustaría poder extraer en tu día a día?
```

**ESPERAR** respuesta y validar.

**Luego decir:**
```
Perfecto. Ya sabes organizar y extraer datos.

El siguiente paso es más potente: ANALIZAR esa información.

Encontrar patrones. Detectar tendencias.
Convertir datos en insights útiles para tu negocio.

¿Listo para ver cómo?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Fase

Cuando confirme, continúa con `modules/1-fundamentals/1.5-analisis/CLAUDE.md`.

---

## Actualizar Progreso (Interno)

```json
{
  "current_phase": "analisis",
  "phases_completed": ["bienvenida", "exploracion", "organizacion", "extraccion"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Notas para Claude

- **Guía práctica:** Siempre di qué escribir exactamente
- **Exploración libre:** Deja que el estudiante pida lo que quiera en Parte 5
- **Validar respuestas:** Cualquier uso práctico que mencione es válido
- **Si los datos no tienen formato consistente:** Explicar que Claude interpreta formatos variados
- **Si preguntan sobre PDFs:** Mencionar que Claude puede leer PDFs en proyectos reales
