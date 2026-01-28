#!/bin/bash

# Script para generar 200 documentos de prueba para el escenario "El Consultor Abrumado"

BASE_DIR="$(dirname "$0")/../assets/consultor-abrumado/inbox-caos"
mkdir -p "$BASE_DIR"

# Clientes
CLIENTES=("Alpha Corp" "Beta Solutions" "Gamma Industries" "Delta Tech" "Epsilon Services")
CLIENTES_SLUG=("alpha" "beta" "gamma" "delta" "epsilon")

# Años y meses para variar fechas
YEARS=("2022" "2023" "2024" "2025")
MONTHS=("01" "02" "03" "04" "05" "06" "07" "08" "09" "10" "11" "12")

# Función para generar fecha aleatoria
random_date() {
    echo "${YEARS[$RANDOM % ${#YEARS[@]}]}-${MONTHS[$RANDOM % ${#MONTHS[@]}]}-$(printf '%02d' $((RANDOM % 28 + 1)))"
}

# Función para cliente aleatorio
random_client_idx() {
    echo $((RANDOM % 5))
}

echo "Generando documentos en $BASE_DIR..."

# ============================================
# PROPUESTAS (30 documentos)
# ============================================
echo "Generando propuestas..."

for i in $(seq 1 30); do
    idx=$(random_client_idx)
    cliente="${CLIENTES[$idx]}"
    slug="${CLIENTES_SLUG[$idx]}"
    date=$(random_date)

    # Nombres caóticos típicos
    case $((i % 6)) in
        0) filename="propuesta_${slug}_v$((RANDOM % 5 + 1)).md" ;;
        1) filename="PROPUESTA_${slug^^}_FINAL.md" ;;
        2) filename="prop_${slug}_${date}.md" ;;
        3) filename="${slug}_propuesta_REVISAR.md" ;;
        4) filename="Propuesta ${cliente} - borrador.md" ;;
        5) filename="propuesta_${slug}_v$((RANDOM % 3 + 1))_DEFINITIVA.md" ;;
    esac

    cat > "$BASE_DIR/$filename" << EOF
# Propuesta de Consultoría - $cliente

**Fecha:** $date
**Cliente:** $cliente
**Proyecto:** Optimización de procesos Q$((RANDOM % 4 + 1)) ${YEARS[$RANDOM % ${#YEARS[@]}]}

## Resumen Ejecutivo

Propuesta de servicios de consultoría para $cliente enfocada en la mejora de eficiencia operativa.

## Alcance del Proyecto

1. Diagnóstico inicial (2 semanas)
2. Análisis de procesos actuales (3 semanas)
3. Diseño de mejoras (2 semanas)
4. Implementación piloto (4 semanas)
5. Evaluación y ajustes (2 semanas)

## Inversión

| Concepto | Horas | Tarifa | Total |
|----------|-------|--------|-------|
| Consultoría Senior | $((RANDOM % 50 + 20)) | €150/h | €$((RANDOM % 5000 + 3000)) |
| Análisis | $((RANDOM % 30 + 10)) | €100/h | €$((RANDOM % 3000 + 1000)) |
| Documentación | $((RANDOM % 20 + 5)) | €75/h | €$((RANDOM % 1500 + 500)) |

**Total estimado:** €$((RANDOM % 10000 + 5000))

## Próximos Pasos

- Reunión de kick-off
- Firma de contrato
- Inicio del proyecto

---
*Documento generado para fines de demostración*
EOF
done

# ============================================
# CONTRATOS (20 documentos)
# ============================================
echo "Generando contratos..."

for i in $(seq 1 20); do
    idx=$(random_client_idx)
    cliente="${CLIENTES[$idx]}"
    slug="${CLIENTES_SLUG[$idx]}"
    date=$(random_date)

    case $((i % 4)) in
        0) filename="contrato_${slug}_${date}.md" ;;
        1) filename="CONTRATO_${slug^^}_FIRMADO.md" ;;
        2) filename="contrato_servicios_${slug}.md" ;;
        3) filename="${slug}_contrato_$((RANDOM % 1000 + 100)).md" ;;
    esac

    cat > "$BASE_DIR/$filename" << EOF
# CONTRATO DE PRESTACIÓN DE SERVICIOS

**Número de contrato:** CTR-${date//-/}-$((RANDOM % 1000 + 100))
**Fecha:** $date
**Cliente:** $cliente

## PARTES

**PRIMERA PARTE (Prestador):** Alberto Benbunan Consulting
**SEGUNDA PARTE (Cliente):** $cliente

## OBJETO DEL CONTRATO

Prestación de servicios de consultoría según propuesta adjunta.

## DURACIÓN

El presente contrato tendrá vigencia desde su firma hasta la finalización del proyecto, estimada en $((RANDOM % 6 + 3)) meses.

## HONORARIOS

Importe total: €$((RANDOM % 15000 + 5000))
Forma de pago: $((RANDOM % 3 + 2)) cuotas mensuales

## CONFIDENCIALIDAD

Ambas partes se comprometen a mantener la confidencialidad de la información intercambiada.

## FIRMAS

_____________________          _____________________
Prestador                      Cliente

---
*Documento generado para fines de demostración*
EOF
done

# ============================================
# FACTURAS (40 documentos)
# ============================================
echo "Generando facturas..."

for i in $(seq 1 40); do
    idx=$(random_client_idx)
    cliente="${CLIENTES[$idx]}"
    slug="${CLIENTES_SLUG[$idx]}"
    date=$(random_date)
    num_factura=$((RANDOM % 500 + 100))

    case $((i % 5)) in
        0) filename="factura_$num_factura.md" ;;
        1) filename="FAC_${date//-/}_${slug}.md" ;;
        2) filename="factura_${slug}_$num_factura.md" ;;
        3) filename="FACTURA-$num_factura-${slug^^}.md" ;;
        4) filename="invoice_${slug}_${date}.md" ;;
    esac

    importe=$((RANDOM % 5000 + 500))
    iva=$((importe * 21 / 100))
    total=$((importe + iva))

    cat > "$BASE_DIR/$filename" << EOF
# FACTURA

**Número:** FAC-$num_factura
**Fecha:** $date
**Vencimiento:** $(date -j -v+30d -f "%Y-%m-%d" "$date" "+%Y-%m-%d" 2>/dev/null || echo "$date")

## EMISOR
Alberto Benbunan Consulting
NIF: 12345678A
Dirección: Calle Example 123, Madrid

## CLIENTE
$cliente
CIF: B$((RANDOM % 90000000 + 10000000))

## CONCEPTOS

| Descripción | Cantidad | Precio | Total |
|-------------|----------|--------|-------|
| Servicios de consultoría - ${MONTHS[$RANDOM % 12]}/${YEARS[$RANDOM % 4]} | 1 | €$importe | €$importe |

## TOTALES

| Concepto | Importe |
|----------|---------|
| Base imponible | €$importe |
| IVA (21%) | €$iva |
| **TOTAL** | **€$total** |

## FORMA DE PAGO
Transferencia bancaria a ES00 1234 5678 9012 3456 7890

---
*Documento generado para fines de demostración*
EOF
done

# ============================================
# EMAILS EXPORTADOS (50 documentos)
# ============================================
echo "Generando emails..."

ASUNTOS=(
    "Re: Reunión mañana"
    "Fwd: Presupuesto actualizado"
    "Urgente: revisar propuesta"
    "Feedback del cliente"
    "Dudas sobre el proyecto"
    "Confirmación de reunión"
    "Documentos adjuntos"
    "Re: Re: Cambios en el alcance"
    "Notas de la llamada"
    "Propuesta revisada"
)

for i in $(seq 1 50); do
    idx=$(random_client_idx)
    cliente="${CLIENTES[$idx]}"
    slug="${CLIENTES_SLUG[$idx]}"
    date=$(random_date)
    asunto="${ASUNTOS[$RANDOM % ${#ASUNTOS[@]}]}"

    case $((i % 5)) in
        0) filename="email_${slug}_${date}.txt" ;;
        1) filename="correo_${date//-/_}.txt" ;;
        2) filename="EMAIL - $asunto.txt" ;;
        3) filename="mail_${slug}_$((RANDOM % 100)).txt" ;;
        4) filename="exportado_${date}.txt" ;;
    esac

    cat > "$BASE_DIR/$filename" << EOF
From: contacto@${slug}corp.com
To: alberto@consulting.com
Date: $date
Subject: $asunto

Hola Alberto,

$(case $((RANDOM % 5)) in
    0) echo "Te escribo para confirmar la reunión del próximo martes. ¿Podemos hacerla a las 10:00?" ;;
    1) echo "Adjunto te envío los documentos que comentamos. Por favor revísalos cuando puedas y me dices." ;;
    2) echo "El equipo ha revisado la propuesta y tenemos algunas dudas. ¿Podemos agendar una llamada?" ;;
    3) echo "Gracias por el trabajo de esta semana. El cliente está muy contento con los avances." ;;
    4) echo "Necesitamos modificar el alcance del proyecto. Te llamo mañana para comentarlo." ;;
esac)

Saludos,
Contacto de $cliente

---
Este email fue exportado el $date
EOF
done

# ============================================
# NOTAS DE REUNIÓN (30 documentos)
# ============================================
echo "Generando notas de reunión..."

for i in $(seq 1 30); do
    idx=$(random_client_idx)
    cliente="${CLIENTES[$idx]}"
    slug="${CLIENTES_SLUG[$idx]}"
    date=$(random_date)

    case $((i % 5)) in
        0) filename="notas_reunion_${slug}_${date}.md" ;;
        1) filename="meeting_notes_${date}.md" ;;
        2) filename="NOTAS - $cliente $date.md" ;;
        3) filename="reunion_${slug}.md" ;;
        4) filename="notes_call_${date//-/_}.md" ;;
    esac

    cat > "$BASE_DIR/$filename" << EOF
# Notas de Reunión

**Cliente:** $cliente
**Fecha:** $date
**Asistentes:** Alberto, $(case $((RANDOM % 3)) in 0) echo "María García" ;; 1) echo "Pedro López" ;; 2) echo "Ana Martínez" ;; esac)

## Agenda

1. Revisión del progreso
2. Próximos pasos
3. Dudas y preguntas

## Notas

### Progreso actual
- $(case $((RANDOM % 3)) in 0) echo "El proyecto va según lo planificado" ;; 1) echo "Hay un retraso de 1 semana en la fase de análisis" ;; 2) echo "Se completó la fase 1 antes de tiempo" ;; esac)
- Se han identificado $((RANDOM % 5 + 2)) áreas de mejora

### Decisiones tomadas
- $(case $((RANDOM % 3)) in 0) echo "Ampliar el alcance de la fase 2" ;; 1) echo "Mantener el timeline original" ;; 2) echo "Añadir una reunión semanal de seguimiento" ;; esac)

### Action items
- [ ] Enviar resumen ejecutivo (Alberto)
- [ ] Revisar documentación técnica (Cliente)
- [ ] Agendar siguiente reunión

## Próxima reunión
Pendiente de confirmar

---
*Notas tomadas durante la reunión*
EOF
done

# ============================================
# REPORTES (20 documentos)
# ============================================
echo "Generando reportes..."

for i in $(seq 1 20); do
    idx=$(random_client_idx)
    cliente="${CLIENTES[$idx]}"
    slug="${CLIENTES_SLUG[$idx]}"
    date=$(random_date)
    quarter="Q$((RANDOM % 4 + 1))"
    year="${YEARS[$RANDOM % ${#YEARS[@]}]}"

    case $((i % 4)) in
        0) filename="reporte_${slug}_${quarter}_${year}.md" ;;
        1) filename="REPORT_${slug^^}_mensual.md" ;;
        2) filename="informe_avance_${slug}.md" ;;
        3) filename="status_report_${date}.md" ;;
    esac

    cat > "$BASE_DIR/$filename" << EOF
# Reporte de Avance

**Cliente:** $cliente
**Período:** $quarter $year
**Fecha del reporte:** $date

## Resumen Ejecutivo

El proyecto con $cliente avanza según lo planificado. Los principales logros del período incluyen:

- Completadas $((RANDOM % 5 + 2)) entregas planificadas
- Satisfacción del cliente: $((RANDOM % 30 + 70))%
- Desviación presupuestaria: $((RANDOM % 15 - 7))%

## Métricas Clave

| Métrica | Objetivo | Actual | Estado |
|---------|----------|--------|--------|
| Entregas a tiempo | 100% | $((RANDOM % 20 + 80))% | $(case $((RANDOM % 3)) in 0) echo "Verde" ;; 1) echo "Amarillo" ;; 2) echo "Verde" ;; esac) |
| Horas consumidas | $((RANDOM % 100 + 50))h | $((RANDOM % 100 + 40))h | Verde |
| Incidencias | 0 | $((RANDOM % 3)) | $(case $((RANDOM % 2)) in 0) echo "Verde" ;; 1) echo "Amarillo" ;; esac) |

## Próximos Pasos

1. Continuar con fase $((RANDOM % 3 + 2))
2. Preparar documentación de entrega
3. Planificar reunión de cierre de fase

## Riesgos Identificados

- Dependencia de recursos del cliente
- Posible cambio de prioridades

---
*Reporte generado automáticamente*
EOF
done

# ============================================
# VARIOS (10 documentos)
# ============================================
echo "Generando documentos varios..."

varios_files=(
    "TODO_urgente.md"
    "ideas_proyecto_nuevo.md"
    "passwords_NO_BORRAR.txt"
    "notas_random.md"
    "IMPORTANTE_LEER.md"
    "backup_contactos.txt"
    "plantilla_propuesta.md"
    "checklist_proyecto.md"
    "recursos_utiles.md"
    "pendientes_2024.md"
)

for i in $(seq 0 9); do
    filename="${varios_files[$i]}"

    case $i in
        0) content="# TODO Urgente\n\n- [ ] Llamar a cliente Alpha\n- [ ] Revisar facturas pendientes\n- [ ] Enviar propuesta Beta\n- [ ] Actualizar LinkedIn" ;;
        1) content="# Ideas para nuevo proyecto\n\n- App de gestión de tiempo\n- Curso online de productividad\n- Newsletter semanal\n- Podcast de consultoría" ;;
        2) content="WiFi oficina: Consulting2024\nNetflix: alberto@mail.com / ****\nBank: Ver app\n\n(ESTE ARCHIVO ES DE EJEMPLO - NO DATOS REALES)" ;;
        3) content="# Notas varias\n\n- El cliente dijo que quiere más reuniones\n- Revisar el tema de los impuestos Q2\n- Comprar café para la oficina\n- Llamar al dentista" ;;
        4) content="# IMPORTANTE\n\nRecordar:\n1. Backup semanal\n2. Actualizar tarifas 2025\n3. Renovar dominio\n4. Revisar seguros" ;;
        5) content="## Contactos importantes\n\nMaria - Alpha Corp - maria@alpha.com\nPedro - Beta Solutions - pedro@beta.com\nAna - Gamma Industries - ana@gamma.com" ;;
        6) content="# Plantilla de Propuesta\n\n## 1. Introducción\n[Descripción del proyecto]\n\n## 2. Alcance\n[Detallar fases]\n\n## 3. Presupuesto\n[Tabla de costos]" ;;
        7) content="# Checklist Proyecto\n\n- [ ] Kick-off\n- [ ] Diagnóstico\n- [ ] Análisis\n- [ ] Propuesta\n- [ ] Implementación\n- [ ] Cierre" ;;
        8) content="# Recursos útiles\n\n- Notion: notion.so\n- Canva: canva.com\n- Calendly: calendly.com\n- Zoom: zoom.us" ;;
        9) content="# Pendientes 2024\n\n- Cerrar proyecto Gamma\n- Facturar Q4\n- Actualizar portfolio\n- Vacaciones agosto" ;;
    esac

    echo -e "$content" > "$BASE_DIR/$filename"
done

# ============================================
# RESUMEN
# ============================================
echo ""
echo "==================================="
echo "Assets generados exitosamente!"
echo "==================================="
echo ""
echo "Ubicación: $BASE_DIR"
echo ""
echo "Resumen:"
echo "- Propuestas: 30"
echo "- Contratos: 20"
echo "- Facturas: 40"
echo "- Emails: 50"
echo "- Notas de reunión: 30"
echo "- Reportes: 20"
echo "- Varios: 10"
echo "-------------------"
echo "TOTAL: 200 documentos"
echo ""

# Contar archivos reales
total=$(ls -1 "$BASE_DIR" | wc -l | tr -d ' ')
echo "Archivos creados: $total"
