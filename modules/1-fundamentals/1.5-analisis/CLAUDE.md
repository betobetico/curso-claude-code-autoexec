# Microlección: Análisis y Síntesis

## Instrucciones para Claude

Esta microlección lleva la extracción al siguiente nivel: convertir datos en insights accionables.

El objetivo es:
1. Analizar información de múltiples fuentes
2. Encontrar patrones y tendencias
3. Generar recomendaciones basadas en datos

---

## Flujo de la Fase

### Parte 1: El Valor del Análisis

**Decir:**
```
Ya tienes documentos organizados y datos extraídos.

Pero los datos por sí solos no son útiles.
Lo que importa son los INSIGHTS.

¿Qué cliente genera más trabajo?
¿Cuál es tu cliente más rentable?
¿Con quién no has hablado en mucho tiempo?

Vamos a descubrirlo.
```

---

### Parte 2: Análisis de Volumen

**Decir:**
```
Empecemos con algo simple: ¿qué cliente genera más documentación?

Escribe:

> ¿Qué cliente tiene más documentos?
```

**ESPERAR** y ejecutar análisis visual:

```bash
echo "📊 VOLUMEN DE TRABAJO POR CLIENTE"
echo "=================================="
echo ""

for cliente in alpha beta gamma delta epsilon; do
    base="assets/consultor-abrumado/proyectos-organizados/cliente-$cliente"
    total=$(find "$base" -type f 2>/dev/null | wc -l | tr -d ' ')
    bar=""
    for i in $(seq 1 $((total / 2 + 1))); do bar="$bar█"; done
    printf "%-10s %3d docs %s\n" "$cliente" "$total" "$bar"
done | sort -t' ' -k2 -rn
```

**Decir:**
```
Visualización instantánea de carga de trabajo.

El cliente con más documentos probablemente ocupa más de tu tiempo.
¿Te sorprende alguno?
```

**ESPERAR** respuesta breve.

---

### Parte 3: Análisis de Actividad

**Decir:**
```
Ahora algo más útil: ¿con quién has interactuado recientemente?

Escribe:

> ¿Cuáles clientes están activos y cuáles inactivos?
```

**ESPERAR** y ejecutar:

```bash
echo "📅 ESTADO DE ACTIVIDAD"
echo "======================"
echo ""

for cliente in alpha beta gamma delta epsilon; do
    base="assets/consultor-abrumado/proyectos-organizados/cliente-$cliente"
    total=$(find "$base" -type f 2>/dev/null | wc -l | tr -d ' ')

    if [ "$total" -gt 15 ]; then
        status="🟢 Muy activo"
    elif [ "$total" -gt 8 ]; then
        status="🟡 Moderado"
    else
        status="🔴 Necesita atención"
    fi

    printf "%-10s %s (%d docs)\n" "$cliente" "$status" "$total"
done
```

**Decir:**
```
🔴 significa clientes que podrían necesitar seguimiento.

¿Ves alguno que deberías contactar pronto?
```

**ESPERAR** respuesta.

---

### Parte 4: Análisis de Microlección Comercial

**Decir:**
```
Una pregunta más estratégica: ¿en qué microlección está cada relación?

- Muchas propuestas = Microlección de venta
- Muchos contratos = Relación establecida
- Muchas facturas = Cliente activo

Escribe:

> Analiza en qué microlección comercial está cada cliente
```

**ESPERAR** y ejecutar análisis de fase.

**Decir:**
```
Ahora sabes quién es prospecto, quién está en onboarding,
y quién ya es cliente recurrente.

Sin revisar un solo documento manualmente.
```

---

### Parte 5: Exploración Libre de Análisis

**Decir:**
```
¿Qué más te gustaría analizar?

Algunas ideas:
• "¿Cuál es mi cliente más rentable?"
• "¿Quién genera más comunicación por email?"
• "Dame un ranking de clientes por facturación"
• O cualquier análisis que se te ocurra

¿Qué quieres saber?
```

**ESPERAR** y ejecutar lo que pida.

---

### Parte 6: Recomendaciones Automáticas

**Decir:**
```
Ahora lo más potente: generar RECOMENDACIONES basadas en el análisis.

Escribe:

> Dame recomendaciones de acción para cada cliente
```

**ESPERAR** y ejecutar:

```bash
echo "💡 RECOMENDACIONES DE ACCIÓN"
echo "============================"
echo ""

for cliente in alpha beta gamma delta epsilon; do
    base="assets/consultor-abrumado/proyectos-organizados/cliente-$cliente"

    prop=$(ls "$base/propuestas" 2>/dev/null | wc -l | tr -d ' ')
    fact=$(ls "$base/facturas" 2>/dev/null | wc -l | tr -d ' ')
    email=$(ls "$base/emails" 2>/dev/null | wc -l | tr -d ' ')

    echo "📌 $cliente:"

    if [ "$prop" -gt 2 ] && [ "$fact" -lt 2 ]; then
        echo "   ⚠️  Muchas propuestas, pocas facturas → Revisar tasa de conversión"
    fi

    if [ "$email" -gt 5 ]; then
        echo "   📧 Alto volumen de emails → Considerar reunión de alineación"
    fi

    if [ "$fact" -gt 3 ]; then
        echo "   💰 Cliente frecuente → Evaluar descuento por volumen"
    fi

    if [ "$prop" -eq 0 ] && [ "$fact" -eq 0 ]; then
        echo "   🔴 Sin actividad → Contactar para seguimiento"
    fi

    echo ""
done
```

**Decir:**
```
Recomendaciones basadas en datos. No en intuición.

Esto es inteligencia de negocio. Sin herramientas caras.
Solo Claude Code y tus documentos.
```

---

### Parte 7: Reflexión y Transición

**Decir:**
```
¿Qué insight te sorprendió más?

¿Hay algún análisis que te gustaría hacer con tus propios documentos?

Piensa en eso mientras avanzamos al siguiente paso.
```

**ESPERAR** respuesta y validar.

**Luego decir:**
```
Perfecto. Ya sabes:
- Organizar documentos
- Extraer información
- Analizar y generar insights

El siguiente paso es CREAR contenido nuevo:
- Documentos profesionales automáticos
- Índices navegables
- Informes listos para compartir

¿Quieres ver cómo generar documentación automáticamente?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Fase

Cuando confirme, continúa con `modules/1-fundamentals/1.6-generacion/CLAUDE.md`.

---

## Actualizar Progreso (Interno)

```json
{
  "current_microlesson": "generacion",
  "microlessons_completed": ["bienvenida", "exploracion", "organizacion", "extraccion", "analisis"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Notas para Claude

- **Análisis es subjetivo:** Las recomendaciones son ejemplos. Adapta al contexto.
- **Exploración libre:** Deja que el estudiante pida análisis propios
- **Validar insights:** Cualquier observación que haga es válida
- **Conexión práctica:** Pregunta cómo aplicaría esto a su trabajo real
