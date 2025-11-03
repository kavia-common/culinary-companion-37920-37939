# Culinary Companion - Recipe Frontend (Tizen Web)

This app is a Tizen-compatible React (Vite) frontend implementing the Ocean Professional theme with:
- Header, Search, Recipe Grid, and Recipe Detail route (hash-based)
- Centralized theme (src/theme.js), mock data service (src/services/mockRecipes.js)
- Runs on port 3000 for dev/preview

Development
- Node: >=18 <20 (pinned for CI compatibility)
- Vite: 4.5.x (compatible with Node 18 and @vitejs/plugin-react 3.x)

Commands:
- npm install
- npm start or npm run dev  (http://localhost:3000, binds on 0.0.0.0)
- npm run build
- npm run preview (or npm run start:preview)

Notes:
- Vite dev and preview are configured to bind 0.0.0.0:3000 with strictPort to match platform preview expectations.
- When backend is ready, replace getRecipes/getRecipeById in src/services/mockRecipes.js with API calls while preserving the interface.
