# Guía Paso a Paso para Principiantes (Sin Experiencia en Terminal)

> **Tiempo estimado:** 10-15 minutos de instalación + 3 horas de curso

---

## ¿Qué vamos a hacer?

Vas a aprender a usar **Claude Code** - una herramienta que te permite automatizar tareas usando lenguaje natural (como si hablaras con un asistente).

**No necesitas saber programar.**

```
┌─────────────────────────────────────────────────────────┐
│  TÚ escribes: "Organiza estos archivos por cliente"    │
│  CLAUDE hace: Mueve 86 archivos a carpetas en segundos │
└─────────────────────────────────────────────────────────┘
```

---

## ANTES DE EMPEZAR

### Checklist de Requisitos

Antes de continuar, verifica que tienes todo:

- [ ] **Cuenta de Claude Pro o Max** (la versión gratis NO funciona)
- [ ] **Computadora compatible** (Mac, Windows 10+, o Linux)
- [ ] **Conexión a internet estable**
- [ ] **15 minutos sin interrupciones** para la instalación

### Sobre tu suscripción de Claude

| Plan | Precio | ¿Funciona? |
|------|--------|------------|
| Claude Free | $0 | ❌ NO |
| Claude Pro | ~$20/mes | ✅ SÍ |
| Claude Max | ~$100/mes | ✅ SÍ |

**¿No tienes cuenta?** → [Suscríbete aquí](https://claude.ai/upgrade)

### Requisitos técnicos de tu computadora

| Sistema | Versión mínima |
|---------|----------------|
| Mac | macOS 10.15 (Catalina) o superior |
| Windows | Windows 10 o superior |
| Linux | Ubuntu 20.04 o equivalente |

**Además necesitas:**
- RAM: 4 GB mínimo
- Espacio: 500 MB libres
- Internet: Conexión estable

---

## PASO 1: Abrir la Terminal

La **terminal** es una ventana donde escribes comandos. Piensa en ella como un chat con tu computadora.

### En Mac

```
┌──────────────────────────────────────┐
│  1. Presiona: Cmd ⌘ + Espacio        │
│  2. Escribe:  Terminal               │
│  3. Presiona: Enter ↵                │
└──────────────────────────────────────┘
```

**¿Qué deberías ver?**
Una ventana con fondo blanco (o negro) y texto que termina en `$` o `%`

```
usuario@MacBook ~ % █
                    ↑ cursor parpadeando aquí
```

**Tip:** Para hacer la terminal más grande, arrastra la esquina de la ventana.

---

### En Windows

```
┌───────────────────────────────────────────────────────┐
│  1. Click derecho en el botón de Inicio (⊞)          │
│  2. Selecciona: "Windows PowerShell (Administrador)" │
│  3. Si pregunta permisos, click en "Sí"              │
└───────────────────────────────────────────────────────┘
```

**¿Qué deberías ver?**
Una ventana azul con texto blanco que dice `PS C:\Users\TuNombre>`

```
PS C:\Users\TuNombre> █
                      ↑ cursor parpadeando aquí
```

**Importante:** DEBE ser "Administrador" o la instalación fallará.

---

### En Linux

```
┌──────────────────────────────────────┐
│  Presiona: Ctrl + Alt + T            │
└──────────────────────────────────────┘
```

---

## PASO 2: Instalar Claude Code

### ¿Qué es un "comando"?

Un comando es una instrucción que le das a la computadora.
Tú lo escribes (o copias), presionas Enter, y la computadora lo ejecuta.

```
Tú escribes esto          La computadora hace algo
        ↓                           ↓
┌─────────────────┐       ┌─────────────────────┐
│ claude --version│  →→→  │ Muestra la versión  │
└─────────────────┘       └─────────────────────┘
        ↑
   Presionas Enter
```

---

### En Mac o Linux

**Copia este comando completo:**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Cómo copiar y pegar:**

| Acción | Atajo |
|--------|-------|
| Copiar el comando de arriba | Selecciona el texto + `Cmd + C` |
| Pegar en la Terminal | `Cmd + V` |
| Ejecutar | `Enter ↵` |

**¿Qué deberías ver?**
```
Downloading Claude Code...
Installing...
✓ Claude Code installed successfully!
```

⏳ **Espera** hasta que vuelva a aparecer el cursor (`$` o `%`)

---

### En Windows (PowerShell)

**Copia este comando:**

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Cómo copiar y pegar:**

| Acción | Cómo hacerlo |
|--------|--------------|
| Copiar el comando de arriba | Selecciona el texto + `Ctrl + C` |
| Pegar en PowerShell | Click derecho en la ventana |
| Ejecutar | `Enter ↵` |

⏳ **Espera** hasta que vuelva a aparecer el prompt (`PS C:\...>`)

---

### Alternativa: Instalación con Homebrew (solo Mac)

Si ya usas Homebrew, puedes instalar así:

```bash
brew install --cask claude-code
```

---

## PASO 3: Verificar la Instalación

**MUY IMPORTANTE:** Debes cerrar y abrir la terminal de nuevo.

```
┌─────────────────────────────────────────────────┐
│  1. CIERRA la ventana de la terminal (click X) │
│  2. ABRE una terminal NUEVA (repite PASO 1)    │
│  3. Escribe el comando de abajo                │
└─────────────────────────────────────────────────┘
```

**Escribe este comando:**

```bash
claude --version
```

**¿Qué deberías ver?**
```
Claude Code v1.x.x
```
(donde x.x es cualquier número)

---

### Si ves un error

**Error:** `claude: command not found` o `'claude' is not recognized`

**Solución:**
1. Cierra TODAS las ventanas de terminal
2. **Reinicia tu computadora** (sí, todo el equipo)
3. Abre una terminal nueva
4. Intenta `claude --version` de nuevo

Si sigue sin funcionar después de reiniciar, la instalación falló. Vuelve al PASO 2.

---

## PASO 4: Conectar tu Cuenta de Claude

Ahora vamos a vincular Claude Code con tu suscripción.

**Escribe:**

```bash
claude
```

**¿Qué deberías ver?**
Un menú con opciones. Usa las flechas del teclado para navegar:

```
? How would you like to authenticate?
❯ Claude account with subscription    ← Selecciona esta
  Anthropic API key
  Skip for now
```

**Pasos:**
1. Usa `↑` `↓` para moverte a **"Claude account with subscription"**
2. Presiona `Enter ↵`
3. Se abrirá tu navegador automáticamente
4. Inicia sesión con tu cuenta de Claude Pro/Max
5. Autoriza la conexión
6. Vuelve a la terminal

**¿Qué deberías ver después?**
```
╭─────────────────────────────────────╮
│  Welcome to Claude Code!            │
│  Type your message...               │
╰─────────────────────────────────────╯
```

**Para salir de Claude Code:** Escribe `/exit` o presiona `Ctrl + C`

---

## PASO 5: Descargar el Curso

### Opción A: Un Solo Comando (Recomendada)

**Copia y pega este comando completo:**

```bash
cd ~/Documents && git clone https://github.com/betobetico/curso-claude-code-autoexec.git && cd curso-claude-code-autoexec
```

**¿Qué hace este comando?**
1. `cd ~/Documents` → Va a tu carpeta Documentos
2. `git clone ...` → Descarga el curso
3. `cd curso-...` → Entra a la carpeta del curso

**¿Qué deberías ver?**
```
Cloning into 'curso-claude-code-autoexec'...
remote: Enumerating objects: 112, done.
...
Receiving objects: 100%
```

---

### Opción B: Descarga Manual (Si la opción A falla)

**Si no tienes `git` instalado o el comando falla:**

1. Abre en tu navegador: [github.com/betobetico/curso-claude-code-autoexec/releases](https://github.com/betobetico/curso-claude-code-autoexec/releases)

2. Haz click en **"Source code (zip)"** para descargar

3. Busca el archivo en tu carpeta de **Descargas**

4. Extrae el ZIP:
   - **Mac:** Doble click en el archivo
   - **Windows:** Click derecho → "Extraer todo"

5. Mueve la carpeta extraída a **Documentos**

6. En la terminal, escribe:
   ```bash
   cd ~/Documents/curso-claude-code-autoexec-1.0.0
   ```
   (El nombre puede variar ligeramente)

---

### Verificar que estás en la carpeta correcta

**Escribe:**

```bash
pwd
```

**¿Qué deberías ver?**
Algo que termine en `curso-claude-code-autoexec`:
```
/Users/tunombre/Documents/curso-claude-code-autoexec
```

**Si NO estás en la carpeta correcta:**
```bash
cd ~/Documents/curso-claude-code-autoexec
```

---

## PASO 6: ¡INICIAR EL CURSO!

**Ya casi estás. Estos son los últimos pasos:**

```
┌────────────────────────────────────────┐
│  1. Escribe: claude                    │
│  2. Presiona: Enter                    │
│  3. Escribe: empezar                   │
│  4. Presiona: Enter                    │
│  5. ¡Disfruta el curso!               │
└────────────────────────────────────────┘
```

**Comando:**
```bash
claude
```

Espera a que aparezca el prompt de Claude Code.

**Luego escribe:**
```
empezar
```

**¿Qué deberías ver?**
```
██████╗ ███████╗██████╗ ██╗   ██╗███╗   ██╗██████╗ ██╗     ███████╗
██╔══██╗██╔════╝██╔══██╗██║   ██║████╗  ██║██╔══██╗██║     ██╔════╝
██████╔╝█████╗  ██████╔╝██║   ██║██╔██╗ ██║██║  ██║██║     █████╗
...

Bienvenido a REBUNDLE - un curso que se ejecuta dentro de Claude Code.
```

**¡FELICIDADES!** Ya estás dentro del curso.

---

## Comandos Útiles Durante el Curso

| Comando | ¿Qué hace? |
|---------|------------|
| `empezar` | Inicia el curso desde el principio |
| `/progreso` | Muestra tu avance actual |
| `/hint` | Te da una pista si estás atascado |
| `/skip` | Salta al siguiente ejercicio |
| `/ayuda` | Lista todos los comandos |
| `/stuck` | Activa el modo tutor (te hace preguntas) |

---

## Problemas Comunes y Soluciones

### Consejo General

Si tienes un error que no entiendes, **pregunta a una IA**:

```
Estoy instalando en mi [Mac/Windows/Linux] el repo:
https://github.com/betobetico/curso-claude-code-autoexec/
y me sale este error:

[pega aquí el error exacto o una captura de pantalla]

¿Puedes ayudarme paso a paso?
```

Puedes usar ChatGPT, Claude, Perplexity, o cualquier chatbot de IA.

---

### "claude: command not found"

**Causa:** La terminal no encuentra Claude Code.

**Solución:**
1. Cierra TODAS las terminales
2. **Reinicia tu computadora**
3. Abre terminal nueva
4. Escribe `claude --version`

---

### "Subscription required" o "Authentication failed"

**Causa:** No tienes una suscripción activa o no la vinculaste.

**Solución:**
1. Ve a [claude.ai](https://claude.ai) y verifica tu suscripción
2. En la terminal, escribe `claude` y reconecta tu cuenta
3. Si acabas de suscribirte, espera 5-10 minutos

---

### "Permission denied" (Windows)

**Causa:** No abriste PowerShell como Administrador.

**Solución:**
1. Cierra PowerShell
2. Click **derecho** en el icono de PowerShell
3. Selecciona **"Ejecutar como administrador"**
4. Vuelve a intentar

---

### "git: command not found"

**Causa:** No tienes Git instalado.

**Solución:** Usa la Opción B (descarga manual) del PASO 5.

O instala Git:
- **Mac:** `xcode-select --install`
- **Windows:** Descarga de [git-scm.com](https://git-scm.com)

---

### El curso no responde o muestra errores raros

**Causa:** Probablemente no estás en la carpeta correcta.

**Solución:**
```bash
cd ~/Documents/curso-claude-code-autoexec
pwd
claude
```

---

### Cómo salir de Claude Code si te quedas atascado

| Acción | Comando |
|--------|---------|
| Salir normalmente | Escribe `/exit` |
| Forzar salida | Presiona `Ctrl + C` |
| Si nada funciona | Cierra la ventana de la terminal |

---

## Glosario Básico de Terminal

| Término | Significado |
|---------|-------------|
| **Terminal** | Ventana donde escribes comandos |
| **Comando** | Una instrucción que le das a la computadora |
| **Prompt** | El símbolo que indica que puedes escribir (`$`, `%`, `>`) |
| **Directorio** | Otra palabra para "carpeta" |
| `cd` | "Change Directory" - ir a otra carpeta |
| `pwd` | "Print Working Directory" - muestra dónde estás |
| `ls` | Lista los archivos de la carpeta actual |
| `Enter ↵` | La tecla para ejecutar un comando |
| `Ctrl + C` | Cancela/interrumpe lo que se está ejecutando |

---

## ¿Qué Vas a Aprender?

En **~3 horas** aprenderás a:

| Habilidad | Ejemplo |
|-----------|---------|
| Organizar documentos | 86 archivos ordenados en segundos |
| Extraer información | Sacar datos de facturas automáticamente |
| Analizar patrones | Encontrar tendencias en tus clientes |
| Generar documentos | Crear informes profesionales al instante |
| Investigar en la web | Enriquecer datos con información pública |

**Todo usando lenguaje natural** - literalmente le dices a Claude qué quieres y él lo hace.

---

## Checklist Final Antes de Empezar

- [ ] Tengo Claude Pro o Max activo
- [ ] Instalé Claude Code (`claude --version` funciona)
- [ ] Descargué el curso
- [ ] Estoy en la carpeta correcta (`pwd` lo confirma)
- [ ] Abrí Claude Code (`claude`)
- [ ] Escribí `empezar`

**¿Todo marcado?** ¡Ya estás listo!

---

## ¿Necesitas Ayuda?

- 📧 Email: [a@rebundle.ai](mailto:a@rebundle.ai)
- 🐛 Reportar problemas: [GitHub Issues](https://github.com/betobetico/curso-claude-code-autoexec/issues)
- 💬 Pregunta a cualquier chatbot de IA con el error exacto

---

## Consejos Finales

1. **No tengas miedo** - La terminal es solo texto, no puedes romper nada
2. **Copia exactamente** - Un espacio de más puede causar errores
3. **Lee los mensajes** - Te dicen si algo salió bien o mal
4. **Si falla, reinicia** - Cerrar y abrir la terminal soluciona muchos problemas
5. **Pide ayuda** - Usa IA para resolver errores que no entiendas
6. **Diviértete** - En 3 horas estarás automatizando como un pro

---

**¡Éxito en tu aprendizaje!** 🚀

---

*Creado por [Alberto Benbunan](https://linkedin.com/in/abenbunan) y [Doron Vainrub](https://linkedin.com/in/dvainrub) de [REBUNDLE](http://rebundle.ai)*

*Inspirado en el trabajo de [Carl Vellotti](https://linkedin.com/in/carlvellotti) y [ccforeveryone.com](https://ccforeveryone.com)*

---

[Repositorio del curso](https://github.com/betobetico/curso-claude-code-autoexec)
