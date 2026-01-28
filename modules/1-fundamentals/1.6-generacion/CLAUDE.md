# Fase: Generación de Contenido

## Instrucciones para Claude

Esta fase muestra el poder de CREAR documentos nuevos automáticamente.

El objetivo es:
1. Generar índices navegables
2. Crear documentación profesional (README)
3. Producir informes listos para compartir

---

## Flujo de la Fase

### Parte 1: El Poder de Crear

**Decir:**
```
Hasta ahora has organizado, extraído y analizado.

Pero hay algo que aún no hemos hecho: CREAR.

¿Qué tal si Claude genera automáticamente:
- Un índice navegable de todos tus proyectos
- Un README profesional
- Un informe listo para enviar a un cliente

Vamos a hacerlo.
```

---

### Parte 2: Generar Índice

**Decir:**
```
Empecemos con un índice completo de todos tus documentos.

Escribe:

> Crea un índice de todos los documentos organizados
```

**ESPERAR** y ejecutar generación de índice:

```bash
OUTPUT="assets/consultor-abrumado/proyectos-organizados/INDICE.md"

cat > "$OUTPUT" << 'HEADER'
# Índice de Documentos
> Generado automáticamente con Claude Code

## Resumen Rápido
HEADER

echo "" >> "$OUTPUT"
total=$(find assets/consultor-abrumado/proyectos-organizados -type f -name "*.md" -o -name "*.txt" 2>/dev/null | wc -l | tr -d ' ')
echo "**Total de documentos:** $total" >> "$OUTPUT"
echo "" >> "$OUTPUT"
echo "---" >> "$OUTPUT"

for cliente in alpha beta gamma delta epsilon; do
    base="assets/consultor-abrumado/proyectos-organizados/cliente-$cliente"
    echo "## Cliente: $(echo $cliente | tr '[:lower:]' '[:upper:]')" >> "$OUTPUT"
    echo "" >> "$OUTPUT"

    for tipo in propuestas contratos facturas emails notas; do
        if [ -d "$base/$tipo" ] && [ "$(ls -A "$base/$tipo" 2>/dev/null)" ]; then
            echo "### $tipo" >> "$OUTPUT"
            for file in "$base/$tipo"/*; do
                [ -f "$file" ] || continue
                filename=$(basename "$file")
                echo "- $filename" >> "$OUTPUT"
            done
            echo "" >> "$OUTPUT"
        fi
    done
done

echo "✅ Índice generado"
cat "$OUTPUT" | head -30
```

**Decir:**
```
Un índice navegable completo. Generado en segundos.

Abre el archivo en Finder para verlo:
📄 proyectos-organizados/INDICE.md
```

---

### Parte 3: Crear README Profesional

**Decir:**
```
Ahora creemos documentación profesional.

Escribe:

> Crea un README que explique la estructura del archivo
```

**ESPERAR** y ejecutar generación de README:

```bash
OUTPUT="assets/consultor-abrumado/proyectos-organizados/README.md"

cat > "$OUTPUT" << 'EOF'
# Archivo de Consultoría

Sistema de gestión documental organizado automáticamente.

## Estructura

```
proyectos-organizados/
├── cliente-alpha/
│   ├── propuestas/
│   ├── contratos/
│   ├── facturas/
│   ├── emails/
│   └── notas/
├── cliente-beta/
├── cliente-gamma/
├── cliente-delta/
├── cliente-epsilon/
└── sin-clasificar/
```

## Clientes Activos

EOF

for cliente in alpha beta gamma delta epsilon; do
    base="assets/consultor-abrumado/proyectos-organizados/cliente-$cliente"
    total=$(find "$base" -type f 2>/dev/null | wc -l | tr -d ' ')
    echo "### $cliente" >> "$OUTPUT"
    echo "- **Documentos totales:** $total" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
done

cat >> "$OUTPUT" << 'EOF'
## Navegación

- [Ver índice completo](INDICE.md)
- [Ver informe ejecutivo](INFORME-EJECUTIVO.md)

---
*Documentación generada con Claude Code*
EOF

echo "✅ README generado"
cat "$OUTPUT"
```

**Decir:**
```
Un README profesional que cualquier persona puede entender.
```

---

### Parte 4: Informe Ejecutivo

**Decir:**
```
Ahora algo más elaborado: un informe listo para presentar.

Escribe:

> Genera un informe ejecutivo del estado de todos los clientes
```

**ESPERAR** y ejecutar generación de informe con métricas por cliente.

**Decir:**
```
Un informe ejecutivo completo. Con métricas y recomendaciones.

Podrías enviarlo hoy mismo a tu jefe o cliente.
```

---

### Parte 5: Ver lo Creado

**Decir:**
```
Veamos qué hemos generado.

Escribe:

> Muéstrame los archivos que hemos creado
```

**ESPERAR** y ejecutar:

```bash
echo "📁 DOCUMENTOS GENERADOS"
echo "======================="
echo ""
ls -la assets/consultor-abrumado/proyectos-organizados/*.md 2>/dev/null
echo ""
echo "Tienes ahora:"
echo "  📄 INDICE.md - Navegación completa"
echo "  📄 README.md - Documentación del sistema"
echo "  📄 INFORME-EJECUTIVO.md - Listo para presentar"
```

**Decir:**
```
Tres documentos profesionales. Creados en minutos.

Abre la carpeta y revísalos:
📂 proyectos-organizados/
```

---

### Parte 6: Exploración Libre

**Decir:**
```
¿Qué más te gustaría que Claude generara?

Algunas ideas:
• "Crea un resumen de cada cliente en una sola página"
• "Genera un template de propuesta"
• "Haz una lista de tareas pendientes basada en los emails"
• O cualquier documento que necesites

¿Qué te sería útil?
```

**ESPERAR** y generar lo que pida.

---

### Parte 7: Reflexión y Transición

**Decir:**
```
Lo que acabas de ver es GENERACIÓN DE CONTENIDO:

Claude puede crear:
- Documentación técnica
- Informes de negocio
- Índices y navegación
- Emails y comunicaciones
- Propuestas y contratos

Todo basado en información que ya tienes.
Y se actualiza automáticamente si agregas documentos nuevos.

¿Hay algún tipo de documento que generas frecuentemente y te gustaría automatizar?
```

**ESPERAR** respuesta y validar.

**Luego decir:**
```
Perfecto. Ya dominas:
- Organizar documentos
- Extraer información
- Analizar patrones
- Generar contenido

El siguiente paso es salir de tus archivos: INVESTIGAR desde la web.

Imagina poder buscar información sobre tus clientes,
enriquecer tus datos con fuentes públicas,
o verificar información automáticamente.

¿Quieres ver cómo?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Fase

Cuando confirme, continúa con `modules/1-fundamentals/1.7-investigacion/CLAUDE.md`.

---

## Actualizar Progreso (Interno)

```json
{
  "current_phase": "investigacion",
  "phases_completed": ["bienvenida", "exploracion", "organizacion", "extraccion", "analisis", "generacion"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Notas para Claude

- **Creatividad:** Si el estudiante pide algo específico, intenta generarlo
- **Calidad:** Los documentos son básicos pero funcionales. En la práctica pueden ser más sofisticados.
- **Archivos creados:** Los documentos se guardan realmente en el filesystem
- **Personalización:** Ofrece adaptar los templates a sus necesidades
