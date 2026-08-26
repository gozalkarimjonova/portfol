# Run Doc — Partifol Portfolio

## How to reproduce artifacts

1. `npm install` — install dependencies (Vite + React).
2. `npm run build` — produces `dist/` (needed only for static serving; the dev server reads `src/` directly).

## How to run the dev server

```bash
npm run dev          # Vite dev server, default port 5173
```

- Uses HMR — edits to `src/` appear instantly.
- If port 5173 is taken, Vite auto-increments (5174, 5175 …).
- No `.env.local` needed; the app has no environment variables.

### Windows (PowerShell) detach recipe

```powershell
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '.freebuff\preview.log' -RedirectStandardError '.freebuff\preview.log.err' -WindowStyle Hidden -PassThru).Id"
```

Then confirm: `powershell -NoProfile -Command "Get-Process -Id <pid>"`
