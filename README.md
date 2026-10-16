# BrightSteps Class 3 — Android APK source

This package includes an improved, self-contained BrightSteps Class 3 learning home screen and wraps the supplied web preview in a Capacitor Android application. The new home screen includes Rajat's CBSE Class 3 learning flow, English/Hindi toggle, teach-then-practise lessons, interactive multiple-choice questions with explanations, local progress tracking, subject progress, and a daily question goal. It also includes a GitHub Actions workflow for a debug APK and a basic offline cache.

## Build the APK on GitHub (phone-friendly)

1. Create a new **public or private** repository on GitHub.
2. Upload the *contents* of this ZIP (the `package.json`, `www/`, `.github/`, etc.) to the repository root. Do not upload the ZIP as a single file.
3. Open **Actions** and enable workflows if GitHub asks.
4. Run **Build BrightSteps Android APK** from the Actions tab, or push a commit to `main`/`master`.
5. Open the completed workflow run, scroll to **Artifacts**, and download `BrightSteps-Class3-debug-apk`.
6. Extract the artifact ZIP and install `app-debug.apk` on your Android phone. Android may ask you to allow installs from your browser/file manager.

## Important notes

- This is a **debug APK** intended for testing and personal installation, not a Play Store release.
- The input was a static web preview export, not the original editable React Native source project. The APK packages that supplied web build; it does not magically restore missing backend services or original source code.
- Offline support is best-effort: the app shell and core pages are cached after first load. Any feature that depends on a remote API, login provider, or remote media still needs that service and an internet connection.
- Test lessons, quizzes, progress saving, and navigation on the device. If a feature in the original preview was only a mockup or relied on a missing backend, this wrapper cannot make that feature real by itself.
- App ID: `com.brightsteps.class3`; display name: `BrightSteps Class 3`.
