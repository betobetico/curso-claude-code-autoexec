# Microlección: Organización - El Momento Mágico ✨

## Instrucciones para Claude

Esta es LA microlección clave del curso. El WOW moment.

El estudiante debe experimentar el poder transformador de ver 86 archivos organizarse automáticamente en segundos.

**Timing es crucial:** Crear anticipación, ejecutar, PAUSAR para que absorban.

---

## Flujo de la Fase

### Parte 1: Propuesta de Estructura

**Decir:**
```
Llegó el momento.

Antes de organizar, necesitamos decidir cómo.

Propongo esta estructura:

📁 proyectos-organizados/
├── 📂 cliente-alpha/
│   ├── propuestas/
│   ├── contratos/
│   ├── facturas/
│   ├── emails/
│   └── notas/
├── 📂 cliente-beta/
│   └── (misma estructura)
├── 📂 cliente-gamma/
├── 📂 cliente-delta/
├── 📂 cliente-epsilon/
└── 📂 sin-clasificar/

Cada documento en su lugar. Por cliente primero, luego por tipo.

¿Te parece bien esta estructura, o prefieres proponer algo diferente?

Por ejemplo:
- Por tipo primero, luego por cliente
- Por año, luego por cliente
- Otra idea que tengas
```

**ESPERAR** respuesta del estudiante.

**Si propone algo diferente:** Validar y adaptar la estructura según su propuesta.
**Si acepta:** Continuar con la estructura propuesta.

---

### Parte 2: Crear Anticipación (y Plan Mode)

**Decir:**
```
Perfecto. Ahora observa con atención.

Antes de ejecutar algo así de grande, Claude piensa en un plan.
Esto se llama "Plan Mode" - planificar antes de actuar.

Mi plan es:
1. Crear las carpetas de destino
2. Analizar cada archivo por su nombre
3. Detectar cliente y tipo de documento
4. Moverlo a la carpeta correcta
5. Todo automáticamente

┌─────────────────────────────────────────────────────────────────┐
│  PLAN MODE = Pensar antes de actuar                            │
├─────────────────────────────────────────────────────────────────┤
│  En tareas complejas, Claude primero planifica.                │
│  Así evita errores y te permite revisar antes de ejecutar.     │
│  En el Módulo 2 aprenderás a usar Plan Mode tú mismo.          │
└─────────────────────────────────────────────────────────────────┘

Son 86 archivos. ¿Cuánto crees que tardará?

Escribe tu estimación.
```

**ESPERAR** respuesta.

**Decir:**
```
Guardemos esa estimación.

¿Listo?
```

**ESPERAR** confirmación.

---

### Parte 3: EJECUCIÓN DEL WOW MOMENT

**Decir:**
```
Aquí vamos... 🚀
```

**Ejecutar este script:**

```bash
# ============================================
# ORGANIZACIÓN AUTOMÁTICA DE DOCUMENTOS
# ============================================

BASE_DIR="assets/consultor-abrumado"
SOURCE="$BASE_DIR/inbox-caos"
DEST="$BASE_DIR/proyectos-organizados"

echo "🚀 Iniciando organización automática..."
echo ""

# Paso 1: Crear estructura de carpetas
echo "📁 Creando estructura de carpetas..."
for cliente in alpha beta gamma delta epsilon; do
    for tipo in propuestas contratos facturas emails notas; do
        mkdir -p "$DEST/cliente-$cliente/$tipo"
    done
done
mkdir -p "$DEST/sin-clasificar"
echo "   ✓ Estructura creada"
echo ""

# Paso 2: Organizar archivos
echo "📦 Organizando archivos..."
count=0

for file in "$SOURCE"/*; do
    [ -f "$file" ] || continue
    filename=$(basename "$file")
    filename_lower=$(echo "$filename" | tr '[:upper:]' '[:lower:]')

    # Detectar cliente
    cliente=""
    case "$filename_lower" in
        *alpha*) cliente="alpha" ;;
        *beta*) cliente="beta" ;;
        *gamma*) cliente="gamma" ;;
        *delta*) cliente="delta" ;;
        *epsilon*) cliente="epsilon" ;;
    esac

    # Detectar tipo
    tipo=""
    case "$filename_lower" in
        *propuesta*|*prop_*) tipo="propuestas" ;;
        *contrato*|*contract*) tipo="contratos" ;;
        *factura*|*fac_*|*invoice*) tipo="facturas" ;;
        *email*|*mail*|*correo*|*exportado*) tipo="emails" ;;
        *nota*|*note*|*meeting*|*reunion*) tipo="notas" ;;
    esac

    # Mover archivo
    if [ -n "$cliente" ] && [ -n "$tipo" ]; then
        cp "$file" "$DEST/cliente-$cliente/$tipo/"
    elif [ -n "$cliente" ]; then
        cp "$file" "$DEST/cliente-$cliente/notas/"
    else
        cp "$file" "$DEST/sin-clasificar/"
    fi

    count=$((count + 1))

    if [ $((count % 20)) -eq 0 ]; then
        echo "   Procesados: $count archivos..."
    fi
done

echo ""
echo "============================================"
echo "✅ ORGANIZACIÓN COMPLETADA"
echo "============================================"
echo ""
echo "📊 Resumen:"
echo "   Total procesados: $count archivos"
echo ""
echo "📁 Archivos por cliente:"
for cliente in alpha beta gamma delta epsilon; do
    total=$(find "$DEST/cliente-$cliente" -type f 2>/dev/null | wc -l | tr -d ' ')
    echo "   $cliente: $total archivos"
done
sin_clasificar=$(find "$DEST/sin-clasificar" -type f 2>/dev/null | wc -l | tr -d ' ')
echo "   Sin clasificar: $sin_clasificar archivos"
echo ""
echo "⏱️  Tiempo: ~5 segundos"
```

---

### Parte 4: Momento de Celebración

**PAUSA** - Deja que el estudiante procese lo que acaba de ver.

**Decir:**
```
🎉 ¡LISTO!

86 archivos organizados en ~5 segundos.

¿Recuerdas tu estimación de cuánto tardaría?

Esto es Claude Code.
```

**ESPERAR** reacción del estudiante.

---

### Parte 5: Mostrar el Resultado

**Decir:**
```
Veamos cómo quedó. Escribe:

> Muéstrame la estructura de proyectos-organizados
```

**ESPERAR** y ejecutar visualización.

**Decir:**
```
Cada documento en su lugar.
Por cliente. Por tipo.
Listo para trabajar.

Abre la carpeta en Finder y compruébalo tú mismo:

📂 [PATH]/assets/consultor-abrumado/proyectos-organizados
```

---

### Parte 6: Reflexión Abierta

**Decir:**
```
Una pregunta:

¿Por qué crees que organicé por CLIENTE primero y luego por TIPO,
en vez de al revés?

Piensa en cómo trabajas día a día...

O si tú hubieras elegido otra estructura, cuéntame por qué.
```

**ESPERAR** respuesta.

**Validar cualquier respuesta razonable:**

- Si menciona trabajo por proyecto: "Exacto. Cuando preparas una reunión con Alpha, quieres TODO de Alpha junto."
- Si menciona búsqueda: "Buen punto. Si organizaras por tipo, tendrías que buscar en 5 lugares cada vez."
- Si defiende otra estructura: "También válido. La arquitectura de información depende de cómo trabajas. Lo importante es que Claude puede hacer cualquier estructura."

---

### Parte 7: Transición Natural

**Decir:**
```
Acabas de automatizar algo que antes tomaba horas.
En segundos.
Sin código.

Y esto es solo el principio.

Ahora que tenemos todo organizado, podemos hacer algo más potente:
EXTRAER información de estos documentos.

Imagina poder sacar todos los montos de las facturas,
o todas las fechas de los contratos,
sin abrir un solo archivo.

¿Quieres ver cómo?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Fase

Cuando confirme, continúa con `modules/1-fundamentals/1.4-extraccion/CLAUDE.md`.

**NO DIGAS:** "pasamos a la lección 1.4"
**SÍ DICES:** Simplemente continúa el flujo naturalmente.

---

## Actualizar Progreso (Interno)

```json
{
  "current_microlesson": "extraccion",
  "microlessons_completed": ["bienvenida", "exploracion", "organizacion"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Notas para Claude

### Timing es Crucial
- **Antes:** Crear anticipación. "¿Listo?" "Observa con atención"
- **Durante:** Mostrar progreso para que vean que algo pasa
- **Después:** PAUSA. Deja que absorban. No apures.

### Emociones Esperadas
- Sorpresa ("¿ya terminó?")
- Satisfacción ("esto es increíble")
- Curiosidad ("¿cómo funciona?")
- Impaciencia ("¿qué más puede hacer?")

Todas son buenas. Canalizar hacia la siguiente fase.

### Preguntas Abiertas
- Siempre ofrece alternativas o espacio para propuestas
- Si el estudiante propone algo diferente, validarlo
- No hay respuestas "incorrectas" en la reflexión

### Si Algo Falla
- Verificar que `inbox-caos/` tiene archivos
- Si la carpeta destino ya existe, borrarla primero
- Ofrecer ejecutar de nuevo
