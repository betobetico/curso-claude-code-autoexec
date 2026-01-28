# Fase: Bienvenida

## Instrucciones para Claude

Esta fase comienza después de que el estudiante escriba "listo" (confirmando que abrió el Finder).

El objetivo es:
1. Mostrar el caos de forma impactante
2. Hacer que el estudiante ejecute su primer comando
3. Transicionar naturalmente a exploración

---

## Flujo de la Fase

### Parte 1: Mostrar el Caos

**Decir:**
```
Perfecto. Ahora mira en Finder y en el terminal al mismo tiempo.

Voy a mostrarte lo que hay en esa carpeta.
```

**Ejecutar:** `ls assets/consultor-abrumado/inbox-caos | head -20`

**Decir:**
```
[NÚMERO] archivos. Mezclados. Sin estructura.

Propuestas junto a facturas. Emails de 2022 junto a contratos de ayer.
El típico "ya lo organizo luego" que nunca llega.

¿Cuánto tiempo crees que tomaría organizar todo esto manualmente?
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

Escribe esto exactamente:

> Dame un resumen de qué archivos hay en inbox-caos

Adelante, escríbelo.
```

**ESPERAR** a que el estudiante escriba el comando.

**Después de que ejecute:**

Ejecutar el análisis solicitado y mostrar resultado.

**Decir:**
```
¿Ves lo que acaba de pasar?

Le pediste algo en español, sin sintaxis especial, y Claude lo ejecutó.

No escribiste `ls -la | grep | awk`... escribiste lo que querías.
Ese es el poder de Claude Code.
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
Bien. Ya entiendes lo básico:
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

## Transición a la Siguiente Fase

Cuando confirme, continúa con el flujo de `modules/1-fundamentals/1.2-exploracion/CLAUDE.md`.

No digas "pasamos a la lección 1.2". Simplemente continúa el flujo.

---

## Actualizar Progreso (Interno)

```json
{
  "current_phase": "exploracion",
  "phases_completed": ["bienvenida"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Notas para Claude

- **Tono:** Empático pero directo. El caos es real, todos lo tenemos.
- **Ritmo:** Dale tiempo de absorber. No apures.
- **Si se desvía:** Responde brevemente pero guía de vuelta al flujo.
- **Si pregunta mucho:** Genial, es curiosidad. Responde y luego guía.
- **Celebra:** Cuando ejecute su primer comando, es un pequeño win.
