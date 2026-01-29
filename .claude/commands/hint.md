# Comando: /hint [nivel]

Sistema de pistas progresivas para ayudar al estudiante sin dar la respuesta directa.

## Uso

```
/hint      → Siguiente nivel (o nivel 1 si es primera vez)
/hint 1    → Pista sutil
/hint 2    → Pista directa
/hint 3    → Casi solución
/hint 4    → Solución completa + explicación
```

## Los 4 Niveles

### Nivel 1: Pista Sutil (Socrática)
- Pregunta que guía sin revelar
- Hace pensar al estudiante
- Ejemplo: "¿Qué herramienta usarías para buscar texto dentro de archivos?"

### Nivel 2: Pista Directa
- Menciona la herramienta o concepto específico
- Indica la dirección correcta
- Ejemplo: "Revisa el comando `grep` - sirve para buscar patrones en archivos"

### Nivel 3: Casi Solución
- Muestra la estructura del comando/acción
- Solo falta completar los detalles específicos
- Ejemplo: "Prueba: `grep 'PALABRA' archivo.txt` - reemplaza PALABRA por lo que buscas"

### Nivel 4: Solución Completa
- Da la respuesta exacta
- Explica POR QUÉ funciona
- Relaciona con el concepto que se está aprendiendo
- Ejemplo:
  ```
  La solución es: grep -r 'ERROR' logs/

  Explicación:
  - grep: busca patrones de texto
  - -r: busca recursivamente en subcarpetas
  - 'ERROR': el patrón a buscar
  - logs/: la carpeta donde buscar
  ```

## Tracking de Hints

### Actualizar struggles.json

Cada vez que se use `/hint`, actualiza el archivo:

```json
{
  "concepts": {
    "grep_usage": {
      "attempts": 3,
      "hints_used": 2,
      "last_hint_level": 2,
      "last_hint_at": "2026-01-29T10:30:00Z"
    }
  },
  "hints_by_topic": {
    "file_operations": 3,
    "data_extraction": 1
  }
}
```

### Detectar Concepto Actual

Identifica el concepto según la microlección actual:

| Microlección | Conceptos |
|--------------|-----------|
| exploracion | file_navigation, ls_usage, tree_usage |
| organizacion | file_operations, mkdir, mv, cp |
| extraccion | grep, data_extraction, text_processing |
| analisis | pattern_recognition, data_analysis |
| generacion | file_creation, markdown, documentation |
| investigacion | web_search, research |

## Formato de Salida

```
💡 Pista (Nivel {N}/4)

{CONTENIDO DE LA PISTA}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/hint {N+1} → siguiente nivel
/hint 4     → ver solución
/skip       → saltar ejercicio
/stuck      → hablar del problema
```

## Comportamiento

1. **Primera vez** → Nivel 1 automáticamente
2. **Cada /hint siguiente** → Sube un nivel
3. **Si pide nivel específico** → Va directo a ese nivel
4. **Después del nivel 4** → Ofrece `/skip` o continuar
5. **Siempre** → Registra en struggles.json

## Reglas Importantes

- **No juzgar** por usar hints - son parte del aprendizaje
- **Celebrar** si resuelve después de un hint: "¡Lo lograste!"
- **Si usa nivel 4 repetidamente** → Sugerir `/stuck` para revisar concepto
- **Si mismo concepto aparece en struggles.json** → Dar hint más temprano en futuras microlecciones
