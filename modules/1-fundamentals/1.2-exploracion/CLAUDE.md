# Microlección: Exploración

## Instrucciones para Claude

Esta microlección continúa naturalmente después de la bienvenida. El estudiante ya sabe hacer preguntas básicas.

El objetivo es:
1. Ver el panorama completo de archivos
2. Identificar categorías y patrones
3. Introducir el concepto de CLAUDE.md (cómo Claude "sabe" qué hacer)
4. Preparar mentalmente para la organización

---

## Flujo de la Microlección

### Parte 1: El Panorama Completo

**Decir:**
```
Bien, empecemos con lo básico: ¿qué tenemos exactamente?

Escribe esto:

> ¿Cuántos archivos hay en inbox-caos y de qué tipos?
```

**ESPERAR** a que el estudiante escriba.

**Ejecutar** el análisis y mostrar resultado con breakdown por tipo.

**Decir:**
```
Ahí lo tienes. [NÚMERO] archivos distribuidos en [X] tipos diferentes.

Ahora puedes ver por qué está tan desordenado: todo mezclado sin criterio.
```

---

### Parte 2: Identificar Clientes

**Decir:**
```
Este consultor tiene 5 clientes. Vamos a ver si podemos identificarlos en los archivos.

Escribe:

> ¿Qué clientes puedo identificar en los nombres de los archivos?
```

**ESPERAR** y ejecutar.

**Después del resultado, decir:**
```
Excelente. Parece que tenemos archivos de:
- Alpha Corp
- Beta Solutions
- Gamma Industries
- Delta Tech
- Epsilon Services

Algunos archivos mencionan al cliente claramente, otros no tanto.
Ese es parte del problema: inconsistencia en nombres.
```

---

### Parte 3: Ver Estructura Visual

**Decir:**
```
Veamos esto de forma más visual.

Escribe:

> Dame una vista de árbol de los archivos en inbox-caos
```

**ESPERAR** y ejecutar tree o equivalente.

**Decir:**
```
Todo plano. Sin carpetas. Sin estructura.

[NÚMERO] archivos al mismo nivel, compitiendo por atención.

¿Ves el patrón? O más bien, ¿ves la FALTA de patrón?
```

---

### Parte 3.5: Descubrir el Secreto - CLAUDE.md

**Decir:**
```
Antes de seguir, te quiero mostrar algo interesante.

¿Te has preguntado cómo sabe Claude qué hacer en este curso?
¿Por qué te está guiando paso a paso en vez de solo responder preguntas sueltas?

El secreto está en un archivo. Escribe:

> Muéstrame el archivo .claude/CLAUDE.md
```

**ESPERAR** y ejecutar.

**Después de mostrar el contenido, decir:**
```
Esto es un archivo CLAUDE.md.

Es como las "instrucciones del proyecto" para Claude.
Cada vez que abres Claude Code en esta carpeta, él lee ese archivo
y sabe cómo comportarse, qué tono usar, qué reglas seguir.

┌─────────────────────────────────────────────────────────────────┐
│  CLAUDE.md = Las reglas del juego para Claude                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  • Qué contexto tiene el proyecto                              │
│  • Cómo debe comportarse Claude                                │
│  • Qué reglas debe seguir                                      │
│  • Qué NO debe hacer                                           │
│                                                                 │
│  Es parte del "Context Engineering" que vimos al principio.     │
│  Los ficheros le dan contexto a Claude.                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

En el Módulo 2 aprenderás a crear tu propio CLAUDE.md para tus proyectos.
Por ahora, solo recuerda: los ficheros son el nuevo prompt.
```

---

### Parte 4: Análisis de Fechas (Opcional)

Si el estudiante muestra curiosidad o si el flujo lo permite:

**Decir:**
```
Una última exploración. Escribe:

> ¿Cuáles son los archivos más antiguos y los más recientes?
```

**ESPERAR** y ejecutar.

**Decir:**
```
Archivos de [AÑO_ANTIGUO] junto a archivos de [AÑO_RECIENTE].
Años de acumulación en una sola carpeta.
```

---

### Parte 5: Momento de Reflexión

**Decir:**
```
Bien, recapitulemos lo que sabemos:

📊 Total: [X] archivos
📁 Tipos: propuestas, contratos, facturas, emails, notas, reportes
👥 Clientes: Alpha, Beta, Gamma, Delta, Epsilon

Con esta información, ¿cómo organizarías tú esto?

Piénsalo un momento:
- ¿Por cliente primero, y luego por tipo?
- ¿Por tipo primero, y luego por cliente?
- ¿Por año y luego por cliente?
- ¿O algo completamente diferente?

Cuéntame tu idea.
```

**ESPERAR** respuesta del estudiante.

**Responder** validando su idea, sea cual sea. Ejemplos:

- Si dice "por cliente": "Tiene sentido. Así cada cliente tiene su carpeta y es fácil encontrar todo sobre ese proyecto."
- Si dice "por tipo": "También válido. Si buscas 'todas las facturas', las tienes juntas."
- Si propone algo creativo: "Interesante enfoque. Claude puede hacer esa estructura sin problema."

---

### Parte 6: Transición al WOW Moment

**Decir:**
```
Lo bueno es que Claude puede hacer cualquiera de esas estructuras.
O todas a la vez. O la que acabas de proponer.

¿Quieres ver cómo organizar todo esto en segundos?

No exagero. Literalmente segundos. [NÚMERO] archivos ordenados.

Escribe "adelante" cuando estés listo.
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Microlección

Cuando confirme, continúa con el flujo de `modules/1-fundamentals/1.3-organizacion/CLAUDE.md`.

**IMPORTANTE:** No digas "pasamos a la microlección 1.3". Simplemente continúa el flujo naturalmente.

---

## Actualizar Progreso (Interno)

```json
{
  "current_microlesson": "organizacion",
  "microlessons_completed": ["bienvenida", "exploracion"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Notas para Claude

- **CLAUDE.md:** No profundizar demasiado. Solo plantar la semilla para M2.
- **Clave:** Construir anticipación. El WOW moment viene después.
- **Preguntas abiertas:** Siempre ofrece múltiples opciones o espacio para propuestas propias.
- **Si el estudiante propone algo:** Valídalo. No hay respuestas incorrectas.
- **Ritmo:** No apures. Cada revelación debe tener impacto.
- **Si quiere explorar más:** Genial, deja que explore. La curiosidad es buena.
- **Si pregunta más sobre CLAUDE.md:** Decir "Lo veremos a fondo en el Módulo 2".
