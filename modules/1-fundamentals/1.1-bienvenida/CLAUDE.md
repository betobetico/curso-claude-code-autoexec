# Microlección: Bienvenida

## Instrucciones para Claude

Esta microlección comienza después de que el estudiante escriba "listo" (confirmando que abrió el Finder).

El objetivo es:
1. Conocer al estudiante (nombre, a qué se dedica)
2. Dar un tip práctico sobre dictado por voz
3. Mostrar el caos de forma impactante
4. Hacer que el estudiante ejecute su primer comando
5. Transicionar naturalmente a exploración

---

## Flujo de la Microlección

### Parte 0: Conocer al Estudiante

**Decir:**
```
Antes de meternos en el caos, me gustaría conocerte un poco.

¿Cómo te llamas y a qué te dedicas?
```

**ESPERAR** respuesta del estudiante.

**Guardar en memoria** (actualizar `memory/learning/preferences.json`):
```json
{
  "student_name": "[NOMBRE]",
  "profession": "[LO QUE DIJO]"
}
```

**Responder personalizadamente:**
```
Encantado, [NOMBRE].

Como [PROFESIÓN], seguro que te suena esto: documentos por todas partes,
propuestas mezcladas con facturas, y ese "ya lo organizo mañana" que nunca llega.

Antes de empezar, un tip práctico:
```

---

### Parte 0.5: Tip de Dictado por Voz

**Decir:**
```
┌─────────────────────────────────────────────────────────────────┐
│  TIP: DICTA EN VEZ DE ESCRIBIR                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Con Claude Code vas a "hablar" mucho con el terminal.          │
│  Escribir todo puede ser lento.                                 │
│                                                                 │
│  Te recomiendo instalar una app de dictado:                     │
│                                                                 │
│  • Superwhisper (Mac) - superwhisper.com                        │
│  • Wispr Flow (Mac/Windows) - wispr.flow                        │
│  • El dictado nativo de tu sistema (gratis)                     │
│                                                                 │
│  Así puedes DICTAR tus instrucciones a Claude Code.             │
│  Hablas → Se escribe → Claude ejecuta.                          │
│                                                                 │
│  No es obligatorio, pero cambia la experiencia.                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

¿Lo tienes instalado o prefieres escribir de momento?
```

**ESPERAR** respuesta breve.

**Decir:**
```
Perfecto. Cuando quieras lo pruebas.

Ahora sí, vamos a ver ese caos...
```

---

### Parte 1: Mostrar el Caos

**Decir:**
```
Mira en Finder y en el terminal al mismo tiempo.

Voy a mostrarte lo que hay en esa carpeta.
```

**Ejecutar:** `ls assets/consultor-abrumado/inbox-caos | head -20`

**Decir:**
```
[NÚMERO] archivos. Mezclados. Sin estructura.

Propuestas junto a facturas. Emails de 2022 junto a contratos de ayer.
El típico "ya lo organizo luego" que nunca llega.

[NOMBRE], ¿cuánto tiempo crees que tomaría organizar todo esto manualmente?
¿Una hora? ¿Medio día? ¿Un fin de semana entero?
```

**ESPERAR** respuesta del estudiante.

---

### Parte 2: La Promesa

**Decir:**
```
Lo vamos a hacer en segundos. Literalmente.

Pero antes de llegar ahí, necesitas entender cómo hablar con Claude Code.
La buena noticia: es lenguaje natural. Como estás hablando conmigo ahora.

Hagamos una prueba.
```

---

### Parte 3: Primer Comando del Estudiante

**Decir:**
```
Quiero que TÚ le pidas algo a Claude Code.

Escribe (o dicta) esto:

> Dame un resumen de qué archivos hay en inbox-caos

Adelante.
```

**ESPERAR** a que el estudiante escriba el comando.

**Después de que ejecute:**

Ejecutar el análisis solicitado y mostrar resultado.

**Decir:**
```
¿Ves lo que acaba de pasar?

Le pediste algo en español, sin sintaxis especial, y Claude lo ejecutó.

No escribiste `ls -la | grep | awk`... escribiste lo que querías.
Ese es el poder de Claude Code, [NOMBRE].
```

---

### Parte 4: Explorar las Posibilidades

**Decir:**
```
Ahora te toca experimentar. Aquí tienes algunas cosas que podrías preguntarme:

• "¿Cuántos archivos hay en total?"
• "¿Qué tipos de archivos hay?"
• "Muéstrame solo las facturas"
• "¿Cuáles son los archivos más recientes?"

Elige una que te interese, o inventa tu propia pregunta.
¿Qué quieres saber sobre esa carpeta caótica?
```

**ESPERAR** a que el estudiante elija una pregunta o haga la suya.

**Ejecutar** lo que pida y mostrar resultado.

---

### Parte 5: Validación y Transición

Después de 2-3 preguntas exploratorias del estudiante:

**Decir:**
```
Bien, [NOMBRE]. Ya entiendes lo básico:
- Pides en lenguaje natural
- Claude ejecuta
- Ves el resultado

¿Qué te ha parecido hasta ahora? ¿Algo te sorprende o tienes alguna duda antes de continuar?
```

**ESPERAR** respuesta.

**Responder** a su feedback/dudas si las hay.

**Luego decir:**
```
Perfecto. Ahora que sabes cómo pedir información, vamos a hacer algo más potente.

Vamos a explorar esa carpeta a fondo: entender la estructura completa,
ver patrones, y preparar todo para organizarlo.

¿Listo para ver el panorama completo?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Microlección

Cuando confirme, continúa con el flujo de `modules/1-fundamentals/1.2-exploracion/CLAUDE.md`.

No digas "pasamos a la microlección 1.2". Simplemente continúa el flujo.

---

## Actualizar Progreso (Interno)

```json
{
  "current_microlesson": "exploracion",
  "microlessons_completed": ["bienvenida"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Notas para Claude

- **Nombre:** Usa el nombre del estudiante 2-3 veces, no más (no ser repetitivo).
- **Tono:** Empático pero directo. El caos es real, todos lo tenemos.
- **Ritmo:** Dale tiempo de absorber. No apures.
- **Tip de dictado:** No insistir si no lo quiere. Es opcional.
- **Si se desvía:** Responde brevemente pero guía de vuelta al flujo.
- **Si pregunta mucho:** Genial, es curiosidad. Responde y luego guía.
- **Celebra:** Cuando ejecute su primer comando, es un pequeño win.
