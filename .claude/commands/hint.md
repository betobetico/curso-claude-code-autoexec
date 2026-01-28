# Comando: /hint

Sistema de pistas progresivas para ayudar al estudiante sin dar la respuesta directa.

## Instrucciones

El sistema de hints tiene 4 niveles de progresividad:

### Nivel 1: Pista sutil
- Pregunta que guía sin revelar
- Ejemplo: "¿Qué herramienta usarías para buscar texto en archivos?"

### Nivel 2: Pista directa
- Menciona la herramienta o concepto específico
- Ejemplo: "Revisa el comando `grep` - sirve para buscar patrones en archivos"

### Nivel 3: Casi solución
- Muestra la estructura del comando/acción
- Ejemplo: "Prueba: `grep 'PALABRA' archivo.txt`"

### Nivel 4: Solución completa
- Da la respuesta y explica por qué funciona
- Ejemplo: "La solución es: `grep -r 'ERROR' logs/` - el flag -r busca recursivamente"

## Tracking de Hints

Actualiza `memory/learning/struggles.json` cuando el estudiante use hints:

```json
{
  "concepts": {
    "grep_usage": {
      "hints_used": 2,
      "last_hint_level": 2
    }
  }
}
```

## Formato de Salida

```
💡 Pista (Nivel X/4)

[CONTENIDO DE LA PISTA]

---
/hint para siguiente nivel | /skip para saltar ejercicio
```

## Comportamiento

1. Primera vez que pide hint → Nivel 1
2. Cada /hint siguiente → Sube un nivel
3. Después del nivel 4 → Ofrece /skip
4. Registra en struggles.json para ejercicios futuros
