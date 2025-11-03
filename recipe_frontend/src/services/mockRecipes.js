//
// Mock Recipes - acts as a placeholder data source for the UI.
// In future this can be replaced with real API calls.
//

const tags = [
  'vegan',
  'gluten-free',
  'quick',
  'dinner',
  'breakfast',
  'dessert',
  'healthy',
  'spicy',
]

function makeImagePlaceholder(id) {
  // Placeholder image pattern with unique color tint per id
  const hue = (id * 47) % 360
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='hsl(${hue},70%,60%)' stop-opacity='0.35'/>
          <stop offset='100%' stop-color='hsl(${(hue+40)%360},70%,60%)' stop-opacity='0.15'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <g>
        <circle cx='520' cy='100' r='70' fill='rgba(255,255,255,0.45)' />
        <rect x='60' y='240' width='300' height='20' rx='10' fill='rgba(255,255,255,0.3)'/>
        <rect x='60' y='270' width='200' height='16' rx='8' fill='rgba(255,255,255,0.22)'/>
      </g>
    </svg>`
  )
  return `data:image/svg+xml;charset=utf-8,${svg}`
}

export const MOCK_RECIPES = Array.from({ length: 16 }).map((_, i) => {
  const id = i + 1
  const titleOptions = [
    'Lemon Herb Chicken',
    'Creamy Tomato Pasta',
    'Avocado Toast',
    'Spicy Tofu Stir Fry',
    'Blueberry Pancakes',
    'Garlic Butter Shrimp',
    'Quinoa Bowl',
    'Chocolate Mousse',
  ]
  const title = titleOptions[i % titleOptions.length]
  const t = [tags[i % tags.length], tags[(i + 3) % tags.length]]

  return {
    id: String(id),
    title,
    tags: t,
    timeMinutes: 15 + (i % 5) * 10,
    servings: 2 + (i % 3),
    image: makeImagePlaceholder(id),
    description:
      'A delicious and easy-to-make recipe. Replace this with real content from the backend service.',
    steps: [
      'Prepare ingredients',
      'Heat pan and add oil',
      'Cook main component until done',
      'Plate and garnish',
    ],
    ingredients: [
      '1 tbsp olive oil',
      'Salt and pepper to taste',
      '1 cup main ingredient',
      'Herbs and spices',
    ],
  }
})

/**
 * PUBLIC_INTERFACE
 * getRecipes
 * A stubbed fetch function that simulates an async API call.
 */
export async function getRecipes() {
  await new Promise((r) => setTimeout(r, 120))
  return MOCK_RECIPES
}

/**
 * PUBLIC_INTERFACE
 * getRecipeById
 * Retrieve a single mock recipe by id.
 */
export async function getRecipeById(id) {
  await new Promise((r) => setTimeout(r, 80))
  return MOCK_RECIPES.find((r) => r.id === String(id)) || null
}
