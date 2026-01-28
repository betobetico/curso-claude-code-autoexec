# Guía de Instalación Completa

Esta guía te llevará paso a paso desde cero hasta tener el curso funcionando.

---

## Requisitos Previos

### 1. Suscripción a Claude

Claude Code requiere una suscripción activa:

- **Claude Pro** ($20/mes) - Suficiente para el curso
- **Claude Max** ($100/mes) - Si quieres uso intensivo

👉 [Suscribirse a Claude Pro](https://claude.ai/upgrade)

> **Nota:** La versión gratuita de Claude NO incluye Claude Code.

### 2. Sistema Operativo

| Sistema | Versión Mínima |
|---------|----------------|
| **macOS** | 10.15 (Catalina) o superior |
| **Windows** | Windows 10 o superior |
| **Linux** | Ubuntu 20.04 o equivalente |

### 3. Requisitos de Hardware

- **RAM:** Mínimo 4 GB (recomendado 8 GB)
- **Disco:** 500 MB libres
- **Internet:** Conexión estable

---

## Paso 1: Instalar Claude Code

### En Mac

**Opción A: Instalador oficial (recomendado)**

Abre Terminal (Cmd + Espacio, escribe "Terminal") y ejecuta:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Opción B: Con Homebrew**

Si tienes Homebrew instalado:

```bash
brew install --cask claude-code
```

### En Windows

1. Abre **PowerShell como Administrador**
   - Click derecho en el menú inicio
   - Selecciona "Windows PowerShell (Admin)"

2. Ejecuta:

```powershell
irm https://claude.ai/install.ps1 | iex
```

### En Linux

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

---

## Paso 2: Verificar la Instalación

Cierra tu terminal y abre una nueva. Luego ejecuta:

```bash
claude --version
```

Deberías ver algo como:

```
Claude Code v1.x.x
```

Si ves un error, consulta la sección de [Solución de Problemas](#solución-de-problemas).

---

## Paso 3: Autenticar tu Cuenta

1. En el terminal, ejecuta:

```bash
claude
```

2. Selecciona **"Claude account with subscription"**

3. Se abrirá tu navegador para autenticarte

4. Inicia sesión con tu cuenta de Claude

5. Regresa al terminal - deberías ver el prompt de Claude Code

---

## Paso 4: Descargar el Curso

### Opción A: Con Git (recomendado)

Si tienes Git instalado:

```bash
cd ~/Documents
git clone https://github.com/betobetico/curso-claude-code-autoexec.git
cd curso-claude-code-autoexec
```

### Opción B: Descarga Directa

1. Ve a: [github.com/betobetico/curso-claude-code-autoexec/releases](https://github.com/betobetico/curso-claude-code-autoexec/releases)

2. Descarga `curso-completo.zip`

3. Extrae el archivo en `~/Documents/curso-claude-code-autoexec`

### Opción C: Un Solo Comando (Mac/Linux)

```bash
cd ~/Documents && curl -L https://github.com/betobetico/curso-claude-code-autoexec/releases/download/v1.0.0/curso-completo.zip -o curso.zip && unzip curso.zip && cd curso-claude-code-autoexec
```

---

## Paso 5: Iniciar el Curso

1. Navega a la carpeta del curso:

```bash
cd ~/Documents/curso-claude-code-autoexec
```

2. Inicia Claude Code:

```bash
claude
```

3. Escribe:

```
empezar
```

¡Listo! Claude te guiará desde ahí.

---

## Solución de Problemas

### "claude: command not found"

**Causa:** El terminal no reconoce el comando después de instalar.

**Solución:**
1. Cierra completamente el terminal
2. Abre un terminal nuevo
3. Intenta de nuevo: `claude --version`

Si sigue sin funcionar, reinicia tu computadora.

### "Subscription required"

**Causa:** Tu cuenta no tiene suscripción activa.

**Solución:**
1. Ve a [claude.ai](https://claude.ai)
2. Inicia sesión
3. Verifica que tengas Claude Pro o Max activo
4. Si acabas de suscribirte, espera unos minutos y vuelve a intentar

### Error de permisos en Windows

**Causa:** PowerShell no tiene permisos de administrador.

**Solución:**
1. Cierra PowerShell
2. Click derecho en PowerShell
3. Selecciona "Ejecutar como administrador"
4. Intenta la instalación de nuevo

### El curso no responde correctamente

**Causa:** Claude Code no está en la carpeta correcta.

**Solución:**
1. Verifica tu ubicación: `pwd`
2. Deberías estar en `.../curso-claude-code-autoexec`
3. Si no, navega: `cd ~/Documents/curso-claude-code-autoexec`
4. Reinicia: `claude`

### Diagnóstico General

Dentro de Claude Code, escribe:

```
/doctor
```

Esto ejecutará diagnósticos automáticos.

---

## Verificación Final

Si todo está correcto, al escribir `empezar` deberías ver:

```
██████╗ ███████╗██████╗ ██╗   ██╗███╗   ██╗██████╗ ██╗     ███████╗
██╔══██╗██╔════╝██╔══██╗██║   ██║████╗  ██║██╔══██╗██║     ██╔════╝
██████╔╝█████╗  ██████╔╝██║   ██║██╔██╗ ██║██║  ██║██║     █████╗
██╔══██╗██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║██║  ██║██║     ██╔══╝
██║  ██║███████╗██████╔╝╚██████╔╝██║ ╚████║██████╔╝███████╗███████╗
╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚══════╝╚══════╝

                    CURSO AUTOEJECUTABLE DE CLAUDE CODE
                           Módulo 1: Fundamentals
```

---

## ¿Necesitas Ayuda?

- 📧 Email: contacto@rebundle.ai
- 💬 Issues: [github.com/betobetico/curso-claude-code-autoexec/issues](https://github.com/betobetico/curso-claude-code-autoexec/issues)

---

[← Volver al inicio](../README.md) | [Empezar el curso →](empezar.md)
