# NEXBUILD

This repository contains a simple Node.js server that acts as a starting point for an AI-powered construction management platform. The UI/UX design is outlined in [UI_UX_SPEC.md](UI_UX_SPEC.md).

## Running the server

```
npm install
node index.js
```

The server listens on port `3000` by default.

## Endpoints

- `/dashboard` – returns dashboard data placeholders
- `/projects` – list or create projects
- `/schedule/:projectId` – schedule information placeholder
- `/model/:projectId` – model viewer placeholder
- `/code-compliance/:projectId` – code compliance check placeholder
- `/submittals/:projectId` – submittal list placeholder
- `/rfis/:projectId` – RFI list placeholder
- `/chat/:projectId` – chat messages placeholder
- `/settings` – user settings placeholder

These endpoints are minimal and meant for demonstration. Full functionality would include database integration, real-time collaboration, AI features, and authentication.
