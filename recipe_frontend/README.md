# Culinary Companion - Recipe Frontend (Tizen Web)

This app is a Tizen-compatible React (Vite) frontend implementing the Ocean Professional theme with:
- Header, Search, Recipe Grid, and Recipe Detail route (hash-based)
- Centralized theme (src/theme.js), mock data service (src/services/mockRecipes.js)
- Runs on port 3000 for dev/preview

Development
- Node: >=18 <20 (pinned for CI compatibility)
- Vite: 5.x (pinned)

Commands:
- npm install
- npm run dev  (http://localhost:3000)
- npm run build
- npm run preview

Note:
- This project includes a local .npmrc and package.json overrides to ensure Vite 5 is used in Node 18 environments.
- When backend is ready, replace getRecipes/getRecipeById in src/services/mockRecipes.js with API calls while preserving the interface.
