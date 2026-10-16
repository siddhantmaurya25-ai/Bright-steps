# BrightSteps Classes 3–5 Expanded Source

Offline-first bilingual English/Hindi learning foundation for Classes 3, 4 and 5.

## Run as a website
Serve this folder over HTTP (for example `npx serve .`) for service-worker offline caching. Opening `index.html` directly works for lessons, but service workers require a local server or HTTPS.

## Files
- `index.html`: app UI and interactions
- `curriculum.js`: embedded original bilingual curriculum unit data
- `manifest.webmanifest`: install metadata
- `service-worker.js`: offline caching
- `CURRICULUM-AND-IMPLEMENTATION.md`: curriculum plan, scope, limitations and next steps

## Android
Capacitor config is included. Build with a compatible Node/Java/Android toolchain or use the repository GitHub Actions workflow. The package has not been deployed to Vercel and no APK is included in this source archive.
