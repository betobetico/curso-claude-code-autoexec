# Fase: Investigación Web

## Instrucciones para Claude

Esta fase muestra cómo enriquecer datos con información externa.

El objetivo es:
1. Demostrar capacidades de búsqueda web
2. Crear fichas de cliente enriquecidas
3. Combinar información interna y externa

**Nota:** En esta lección se simula la investigación web para la demostración, pero Claude puede hacer búsquedas reales con WebSearch.

---

## Flujo de la Fase

### Parte 1: Más Allá de tus Archivos

**Decir:**
```
Hasta ahora hemos trabajado con TUS documentos.

Pero hay información valiosa FUERA de tu archivo:
- Datos públicos de empresas
- Noticias recientes sobre clientes
- Contexto de mercado
- Información de contacto actualizada

Claude puede buscar en la web y traer esa información a tu flujo de trabajo.
```

---

### Parte 2: El Escenario

**Decir:**
```
Imagina que tienes reunión con Alpha Corp mañana.

Quieres llegar preparado:
- ¿Qué hace su empresa exactamente?
- ¿Han tenido noticias recientes?
- ¿Quiénes son los ejecutivos clave?

En vez de abrir Google y buscar manualmente,
podrías simplemente pedírmelo.

¿Qué información te gustaría tener de un cliente antes de una reunión?
```

**ESPERAR** respuesta.

---

### Parte 3: Crear Ficha de Cliente

**Decir:**
```
Vamos a crear una ficha de cliente completa.

En la práctica, Claude buscaría esta información en la web.
Para la demostración, vamos a generar una ficha modelo.

Escribe:

> Crea una ficha completa del cliente Alpha
```

**ESPERAR** y ejecutar:

```bash
OUTPUT="assets/consultor-abrumado/proyectos-organizados/cliente-alpha/FICHA-CLIENTE.md"

cat > "$OUTPUT" << 'EOF'
# Ficha de Cliente: Alpha Corp

> Generada con Claude Code

## Información General

| Campo | Valor |
|-------|-------|
| Nombre | Alpha Corp |
| Sector | Tecnología / SaaS |
| Tamaño | 50-200 empleados |
| Web | www.alphacorp.example.com |

## Ejecutivos Clave

- **CEO:** María García
- **CTO:** Pedro López
- **CFO:** Ana Martínez

## Contexto de Negocio

Alpha Corp es una empresa de software B2B enfocada en automatización.
Han crecido un 40% en el último año.

## Oportunidades Detectadas

1. Expansión internacional → Posible consultoría
2. Crecimiento rápido → Necesidad de optimizar procesos
3. Nueva financiación → Presupuesto disponible

## Notas para Próxima Reunión

- Preguntar sobre planes de expansión
- Ofrecer servicios de optimización
- Mencionar case studies relevantes

---
*Ficha generada con Claude Code*
EOF

echo "✅ Ficha generada"
cat "$OUTPUT"
```

**Decir:**
```
Una ficha completa con:
- Datos de la empresa
- Ejecutivos clave
- Oportunidades detectadas
- Notas para reunión

¿Ves el valor de llegar preparado a una reunión con esta información?
```

**ESPERAR** respuesta.

---

### Parte 4: Fichas para Todos los Clientes

**Decir:**
```
Ahora generemos una ficha básica para cada cliente.

Escribe:

> Crea fichas para todos los clientes
```

**ESPERAR** y ejecutar generación de fichas para los 5 clientes.

**Decir:**
```
Cinco fichas generadas. Una por cliente.

En la práctica, podrías enriquecerlas con:
- Búsquedas web reales
- Datos de LinkedIn
- Noticias recientes
- Información financiera pública
```

---

### Parte 5: Exploración del Estudiante

**Decir:**
```
¿Qué información te gustaría investigar de tus clientes reales?

Algunas ideas:
• "Busca noticias recientes de [empresa]"
• "Dame información de contacto actualizada"
• "Investiga competidores de este cliente"
• O cualquier dato que necesites

¿Qué buscarías?
```

**ESPERAR** respuesta y explicar cómo Claude lo haría.

---

### Parte 6: Consideraciones Importantes

**Decir:**
```
Antes de continuar, algunas consideraciones importantes:

⚠️ Sobre investigación web:

1. **Privacidad:** Claude no busca información privada de personas
2. **Fuentes:** Solo usa fuentes públicas verificables
3. **Actualidad:** La información puede no estar 100% al día
4. **Verificación:** Siempre verifica datos críticos antes de actuar

La investigación automática es un PUNTO DE PARTIDA, no la verdad absoluta.

¿Tienes alguna duda sobre las capacidades o límites?
```

**ESPERAR** y responder dudas.

---

### Parte 7: Transición al Proyecto Final

**Decir:**
```
Perfecto. Ya dominas todas las habilidades fundamentales:

✓ Organizar documentos
✓ Extraer información
✓ Analizar patrones
✓ Generar contenido
✓ Investigar información externa

¡Solo queda un paso!

El proyecto final: aplicar TODO lo aprendido para crear
un sistema completo de gestión documental.

Sin guía paso a paso.
Solo tú diciéndole a Claude lo que necesitas.

Es tu oportunidad de demostrar lo que has aprendido.

¿Listo para el desafío final?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Fase

Cuando confirme, continúa con `modules/1-fundamentals/1.8-proyecto-final/CLAUDE.md`.

---

## Actualizar Progreso (Interno)

```json
{
  "current_phase": "proyecto-final",
  "phases_completed": ["bienvenida", "exploracion", "organizacion", "extraccion", "analisis", "generacion", "investigacion"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Notas para Claude

- **Búsqueda simulada:** En esta demo simulamos resultados. En la práctica, usa WebSearch para búsquedas reales.
- **Privacidad:** Enfatizar que no se busca información privada sin consentimiento
- **Preparar para proyecto final:** El estudiante debe sentirse capaz de trabajar de forma autónoma
- **Preguntas abiertas:** Deja que el estudiante explore qué buscaría él
