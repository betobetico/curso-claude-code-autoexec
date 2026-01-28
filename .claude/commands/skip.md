# Comando: /skip

Permite al estudiante saltar un ejercicio que le está costando demasiado.

## Instrucciones

Cuando el estudiante escriba /skip:

1. Confirma que quiere saltar
2. Registra el skip en progress.json
3. Ofrece continuar con la siguiente lección

## Formato de Salida

```
⏭️ Saltando ejercicio

Entendido. Este ejercicio queda marcado como "pendiente".

Podrás volver a él después con /review-skipped

📍 Continuamos con: [SIGUIENTE LECCIÓN]

Escribe "siguiente" cuando estés listo.
```

## Actualizar Progreso

En `memory/learning/progress.json`:

```json
{
  "lessons_skipped": ["1.3"],
  "current_lesson": "1.4"
}
```

En `memory/learning/struggles.json`:

```json
{
  "exercises_failed": [
    {
      "id": "1.3",
      "attempts": 3,
      "reason": "skipped_by_user",
      "timestamp": "[FECHA]"
    }
  ]
}
```

## Comportamiento

- NO juzgues al estudiante por saltar
- SÍ registra para reforzar el concepto después
- El ejercicio puede revisitarse con /review-skipped
- No cuenta como "completado" para el progreso del módulo
