# Microlección: La Idea - De Consultor a Emprendedor

## Instrucciones para Claude

Esta es la microlección de apertura del Módulo 2. Conecta narrativamente con el M1.

El estudiante acaba de dominar la organización y análisis de documentos. Ahora descubre que puede hacer más: construir algo propio.

**Objetivo:**
1. Transicionar de "consultor que usa herramientas" a "emprendedor que crea"
2. Introducir Plan Mode como herramienta de pensamiento
3. Ayudar al estudiante a definir su propia idea de proyecto

---

## Flujo de la Microlección

### Parte 0: La Transición Narrativa

**Decir:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ██████╗ ███████╗██████╗ ██╗   ██╗███╗   ██╗██████╗ ██╗     ███████╗  │
│  ██╔══██╗██╔════╝██╔══██╗██║   ██║████╗  ██║██╔══██╗██║     ██╔════╝  │
│  ██████╔╝█████╗  ██████╔╝██║   ██║██╔██╗ ██║██║  ██║██║     █████╗    │
│  ██╔══██╗██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║██║  ██║██║     ██╔══╝    │
│  ██║  ██║███████╗██████╔╝╚██████╔╝██║ ╚████║██████╔╝███████╗███████╗  │
│  ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚══════╝╚══════╝  │
│                                                                 │
│                    MÓDULO 2: DE CONSULTOR A EMPRENDEDOR         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

[NOMBRE], acabas de completar el Módulo 1.

Organizaste 86 documentos en segundos.
Extrajiste datos sin abrir archivos.
Generaste reportes profesionales automáticamente.

Ahora te pregunto algo:

Esa metodología que usaste para organizar TU caos...
¿Podría ser un producto?

Ese problema que resolviste para ti...
¿Podría resolverlo para miles de personas?

En este módulo vas a pasar de usar herramientas a CREAR sistemas.
```

**ESPERAR** reacción.

---

### Parte 1: La Semilla del Emprendimiento

**Decir:**
```
Vamos a hacer un ejercicio.

Piensa en algo que te gustaría construir.

Puede ser:
• Un servicio que automatice algo que haces manualmente
• Una herramienta para tu industria
• Un producto digital que resuelva un dolor
• O simplemente una idea que llevas tiempo posponiendo

No tiene que ser "la idea del millón".
Solo algo que te motive trabajar durante las próximas horas.

¿Qué se te ocurre?
```

**ESPERAR** respuesta del estudiante.

**Guardar la idea** en `memory/learning/preferences.json`:
```json
{
  "m2_project_idea": "[LO QUE DIJO]",
  "m2_started_at": "[TIMESTAMP]"
}
```

---

### Parte 2: Validación Rápida de la Idea

**Decir:**
```
Me gusta. Vamos a explorar esa idea juntos.

Antes de construir nada, necesitamos entenderla mejor.

En el mundo startup esto se llama "validación".
Con Claude Code, podemos hacerlo en minutos en vez de semanas.
```

**Preguntar:**
```
Tres preguntas rápidas:

1. ¿Quién tendría este problema? (describe a tu usuario ideal)
2. ¿Cómo lo resuelven hoy? (la alternativa actual, aunque sea mala)
3. ¿Qué haría que tu solución fuera 10x mejor?

Responde como quieras, en el orden que prefieras.
```

**ESPERAR** respuestas.

**Reflejar y validar** las respuestas del estudiante. Ejemplo:
```
Interesante. Entonces tenemos:

👤 Usuario: [RESUMEN]
😤 Problema actual: [RESUMEN]
✨ Tu diferencial: [RESUMEN]

Esto ya es más de lo que muchos emprendedores tienen cuando empiezan.
```

---

### Parte 3: Introducir Plan Mode

**Decir:**
```
Ahora viene algo importante.

¿Recuerdas cuando organicé los 86 archivos y te mostré "el plan" antes de ejecutar?

Eso se llama Plan Mode.

┌─────────────────────────────────────────────────────────────────┐
│  PLAN MODE                                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Antes de ejecutar algo complejo, le pides a Claude que         │
│  primero PIENSE y te muestre el plan.                          │
│                                                                 │
│  ¿Por qué es útil?                                             │
│  • Evita errores costosos                                      │
│  • Te permite ajustar ANTES de que pase algo                   │
│  • Funciona como un "segundo cerebro" que valida tus ideas     │
│                                                                 │
│  Para activarlo, simplemente di:                                │
│  "Piensa en un plan antes de hacer nada"                       │
│  o usa /plan (veremos los comandos más adelante)               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Parte 4: Plan Mode en Acción

**Decir:**
```
Vamos a usar Plan Mode para estructurar tu idea.

Escribe esto:

> Piensa en un plan para convertir esta idea en un MVP:
> [TU IDEA EN UNA FRASE]
>
> No hagas nada todavía, solo dame el plan.
```

**ESPERAR** a que el estudiante escriba.

**Generar un plan estructurado** basado en su idea. Ejemplo de formato:

```
📋 PLAN: MVP de [NOMBRE DEL PROYECTO]

Fase 1: Documentación (hoy)
├── 1.1 Crear README.md con la visión
├── 1.2 Definir el problema y la solución
└── 1.3 Listar las funcionalidades core

Fase 2: Configuración (hoy)
├── 2.1 Crear CLAUDE.md con reglas del proyecto
├── 2.2 Definir estructura de carpetas
└── 2.3 Crear comandos personalizados

Fase 3: Prototipo (próximas microlecciones)
├── 3.1 Landing page simple
├── 3.2 Formulario de captura
└── 3.3 Automatizaciones básicas

¿Este plan tiene sentido para tu idea?
¿Quieres ajustar algo antes de empezar?
```

**ESPERAR** feedback del estudiante.

---

### Parte 5: Crear el README del Proyecto

**Decir:**
```
Perfecto. Empecemos por lo más básico: documentar la idea.

En cualquier proyecto serio, el primer archivo es README.md.
Es la "carta de presentación" del proyecto.

Voy a crear uno basado en lo que me contaste.
```

**Crear el archivo** `assets/mi-proyecto/README.md`:

```markdown
# [NOMBRE DEL PROYECTO]

> [TAGLINE: Una frase que describe el proyecto]

## El Problema

[Descripción del problema basada en lo que dijo el estudiante]

## La Solución

[Descripción de la solución propuesta]

## Usuario Ideal

[Perfil del usuario basado en sus respuestas]

## Funcionalidades Core (MVP)

- [ ] Funcionalidad 1
- [ ] Funcionalidad 2
- [ ] Funcionalidad 3

## Estado Actual

🚧 En desarrollo - Módulo 2 de REBUNDLE

---

Creado con [Claude Code](https://claude.ai/code)
```

**Decir:**
```
✅ README.md creado.

Abre el archivo y revísalo:
📄 assets/mi-proyecto/README.md

¿Quieres ajustar algo o seguimos adelante?
```

**ESPERAR** respuesta.

---

### Parte 6: Reflexión y Transición

**Decir:**
```
En 15 minutos has hecho algo que a muchos les toma días:

✅ Definiste tu idea
✅ Validaste los fundamentos (usuario, problema, diferencial)
✅ Creaste un plan estructurado
✅ Documentaste todo en un README profesional

Y lo hiciste conversando. Sin código. Sin plantillas complicadas.

Esto es Plan Mode + Context Engineering en acción.

Ahora viene lo interesante:
Vamos a crear el CLAUDE.md de tu proyecto.

Un archivo que le dirá a Claude cómo comportarse
cada vez que trabajes en este proyecto.

¿Listo?
```

**ESPERAR** confirmación.

---

## Transición a la Siguiente Microlección

Cuando confirme, continúa con `modules/2-emprendedor/2.2-el-proyecto/CLAUDE.md`.

**NO DIGAS:** "pasamos a la microlección 2.2"
**SÍ DICES:** Continúa el flujo naturalmente.

---

## Actualizar Progreso (Interno)

```json
{
  "current_module": 2,
  "current_microlesson": "el-proyecto",
  "microlessons_completed": ["bienvenida", "exploracion", "organizacion", "extraccion", "analisis", "generacion", "investigacion", "proyecto-final", "la-idea"],
  "last_activity": "[TIMESTAMP]"
}
```

---

## Assets a Crear

```
assets/mi-proyecto/
└── README.md
```

---

## Notas para Claude

- **Personalización:** Usa el nombre del estudiante y su idea específica.
- **Validación:** Cualquier idea es válida. No juzgar.
- **Plan Mode:** No explicar demasiada teoría. Mostrar en acción.
- **Si no tiene idea:** Ofrecer 3 ejemplos genéricos (app de productividad, servicio de automatización, herramienta para [su profesión]).
- **Si la idea es muy ambiciosa:** Ayudar a acotarla sin desanimarle. "Empecemos por el núcleo..."
- **Tono:** Entusiasta pero realista. Emprender es emocionante Y difícil.
