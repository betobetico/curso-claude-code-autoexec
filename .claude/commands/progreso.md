# Comando: /progreso

Muestra el estado actual del estudiante en el curso.

## Instrucciones

1. Lee el archivo `memory/learning/progress.json`
2. Muestra el progreso de forma visual y motivadora
3. NO menciones números de lección - usa nombres descriptivos
4. Indica claramente qué viene después

## Formato de Salida

```
📊 Tu Progreso

Módulo 1: Fundamentals
[████████░░░░░░░░] X de 8 etapas completadas

Tu recorrido:
✅ Bienvenida - Conociste el escenario
✅ Exploración - Entendiste el caos
⬜ Organización ← Estás aquí
⬜ Extracción de datos
⬜ Análisis y síntesis
⬜ Generación de contenido
⬜ Investigación web
⬜ Proyecto final

Tiempo invertido: X minutos
Última sesión: [FECHA]

💡 Escribe "continuar" para retomar donde lo dejaste
```

## Si No Hay Progreso

```
📊 Tu Progreso

Aún no has comenzado.

El Módulo 1 tiene 8 etapas que puedes completar en ~3 horas.
Puedes pausar y continuar cuando quieras.

Escribe "empezar" para iniciar el curso.
```

## Datos a Leer

```json
// memory/learning/progress.json
{
  "current_module": 1,
  "current_phase": "organizacion",
  "phases_completed": ["bienvenida", "exploracion"],
  "total_time_minutes": 25,
  "started_at": "2026-01-28T10:00:00Z",
  "last_activity": "2026-01-28T10:25:00Z"
}
```

## Mapeo de Fases a Nombres Legibles

| Fase Interna | Nombre para Mostrar |
|--------------|---------------------|
| bienvenida | Bienvenida |
| exploracion | Exploración |
| organizacion | Organización |
| extraccion | Extracción de datos |
| analisis | Análisis y síntesis |
| generacion | Generación de contenido |
| investigacion | Investigación web |
| proyecto-final | Proyecto final |

## Notas para Claude

- **Tono motivador:** El progreso siempre se ve bien, aunque sea poco
- **Sin números:** No digas "lección 1.3", di "Organización"
- **Celebrar:** Si ya completó varias etapas, celebra brevemente
