# EnergyCore Website

Landing page estática de EnergyCore construida con HTML5, CSS3 y JavaScript.

## Ejecutar localmente

```powershell
Set-Location "C:\JeanLoa\Universidad\Diseño de Experimentos de Ingeniería de Software\energycore-website"
& "C:\Users\Asus\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 4173
```

Abrir `http://localhost:4173`.

## Enlace a la aplicación

Los botones **Probar EnergyCore** apuntan al inicio de sesión configurado en
`APP_URL`, al comienzo de `script.js`. El valor local actual es:

```text
http://localhost:4200/iam/login
```

Antes de publicar la landing, reemplazarlo por la URL pública del WebApp.
