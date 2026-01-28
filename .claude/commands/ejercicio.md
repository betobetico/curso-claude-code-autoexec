# Comando: /ejercicio

Genera un ejercicio práctico basado en lo que el estudiante ha aprendido hasta ahora.

## Instrucciones

1. Lee `memory/learning/progress.json` para saber en qué fase está
2. Genera un ejercicio relevante a las fases completadas
3. El ejercicio debe ser práctico y ejecutable
4. Ofrece siempre múltiples niveles de dificultad

## Ejercicios por Fase

### Después de Bienvenida
```
Mini-ejercicio: Exploración Libre

Tienes la carpeta inbox-caos abierta.

Elige UNA de estas tareas:

1. FÁCIL: ¿Cuántos archivos de texto (.txt) hay?
   Escribe: "Cuenta los archivos .txt en inbox-caos"

2. MEDIO: ¿Cuáles archivos mencionan a "Alpha Corp"?
   Escribe: "Busca archivos que mencionen Alpha"

3. AVANZADO: ¿Cuál es el archivo más grande y cuál el más pequeño?
   Formula tu propia pregunta a Claude

¿Cuál quieres intentar, o prefieres otro ejercicio diferente?
```

### Después de Exploración
```
Mini-ejercicio: Análisis de Patrones

Ya sabes explorar la carpeta.

Elige UNA de estas tareas:

1. FÁCIL: ¿Cuántos clientes distintos puedes identificar?
   Escribe: "Dame un resumen de los clientes en inbox-caos"

2. MEDIO: ¿Qué tipo de documento es el más común?
   Escribe: "Agrupa los archivos por tipo y cuenta cada uno"

3. AVANZADO: Crea tu propio análisis
   ¿Qué pregunta te gustaría hacer sobre estos archivos?

¿Cuál eliges?
```

### Después de Organización
```
Mini-ejercicio: Organización Personalizada

Ya viste cómo organizar archivos automáticamente.

Elige UNA de estas tareas:

1. FÁCIL: Verifica que la organización fue correcta
   Escribe: "Verifica que cada archivo está en la carpeta correcta"

2. MEDIO: Reorganiza solo las facturas por año
   Escribe: "Organiza las facturas por año dentro de cada cliente"

3. AVANZADO: Propón tu propia estructura alternativa
   ¿Cómo organizarías tú estos archivos si fuera tu consultoría?

¿Cuál te interesa?
```

### Después de Extracción
```
Mini-ejercicio: Extracción de Datos

Ya sabes extraer información de documentos.

Elige UNA de estas tareas:

1. FÁCIL: Extrae todos los emails de los archivos
   Escribe: "Encuentra todos los emails mencionados en los documentos"

2. MEDIO: Crea una tabla de fechas clave
   Escribe: "Extrae las fechas importantes de los contratos"

3. AVANZADO: Diseña tu propia extracción
   ¿Qué datos te serían más útiles extraer de estos documentos?

¿Cuál eliges?
```

## Formato de Respuesta

Cuando el estudiante complete un ejercicio:

1. Valida su respuesta
2. Celebra brevemente si lo hizo bien
3. Ofrece un tip adicional relacionado
4. Pregunta si quiere otro ejercicio o continuar el curso

## Notas para Claude

- Siempre ofrece múltiples niveles de dificultad
- Permite que el estudiante proponga su propio ejercicio
- No hay respuestas "incorrectas" - si funciona, funciona
- Si el estudiante se atasca, ofrece `/hint`
