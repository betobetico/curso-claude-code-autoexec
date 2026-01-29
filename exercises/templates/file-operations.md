# Template: Operaciones de Archivos

## Variables de Contexto
- `{{LEVEL}}`: beginner | intermediate | advanced
- `{{USER_DIR}}`: Directorio actual del estudiante
- `{{STRUGGLE_AREA}}`: Concepto donde tiene dificultades (de struggles.json)
- `{{FILE_COUNT}}`: Número de archivos en el directorio

---

## Ejercicios por Nivel

### Beginner (0-3 ejercicios completados)

**Ejercicio: Exploración Básica**

```
📝 Ejercicio: Conoce tu carpeta

Contexto:
Tienes {{FILE_COUNT}} archivos en {{USER_DIR}}.
Antes de organizar, necesitas saber qué hay.

Objetivo:
1. Lista todos los archivos del directorio actual
2. Cuenta cuántos hay de cada tipo (.pdf, .docx, .txt, etc.)

{{#if STRUGGLE_AREA == "navigation"}}
💡 Pista: Usa lenguaje natural. Puedes decir "muéstrame qué archivos hay aquí"
{{/if}}

Criterio de éxito:
✅ Sabes cuántos archivos hay
✅ Conoces los tipos de archivo presentes

Tiempo estimado: 5 min
```

### Intermediate (4-8 ejercicios completados)

**Ejercicio: Organización por Criterio**

```
📝 Ejercicio: Organiza por tipo

Contexto:
Tu carpeta {{USER_DIR}} tiene archivos mezclados.
El cliente necesita orden urgente.

Objetivo:
1. Crea carpetas por tipo de documento (contratos/, facturas/, propuestas/)
2. Mueve cada archivo a su carpeta correspondiente
3. Genera un reporte de cuántos archivos moviste a cada carpeta

{{#if STRUGGLE_AREA == "file_operations"}}
💡 Pista: Puedes pedir "organiza estos archivos por tipo de documento"
{{/if}}

Criterio de éxito:
✅ Carpetas creadas correctamente
✅ Archivos movidos según su tipo
✅ Reporte generado

Tiempo estimado: 10 min
```

### Advanced (9+ ejercicios completados)

**Ejercicio: Automatización de Organización**

```
📝 Ejercicio: Sistema de organización inteligente

Contexto:
Recibes documentos nuevos cada semana en {{USER_DIR}}.
Necesitas un sistema que los organice automáticamente.

Objetivo:
1. Analiza los patrones de nombres de archivo existentes
2. Propón una estructura de carpetas basada en los patrones detectados
3. Crea la estructura y mueve los archivos
4. Genera documentación del sistema para uso futuro

Criterio de éxito:
✅ Estructura lógica basada en patrones reales
✅ Todos los archivos organizados
✅ Documentación clara del sistema

Tiempo estimado: 20 min
```

---

## Validación

```javascript
// Verificar que la organización se completó
export async function validate(context) {
  const { targetDir, expectedFolders } = context;

  const results = {
    folders_created: checkFoldersExist(targetDir, expectedFolders),
    files_moved: checkFilesOrganized(targetDir),
    no_orphans: checkNoOrphanFiles(targetDir)
  };

  return {
    passed: Object.values(results).every(Boolean),
    details: results
  };
}
```
