import React, { useMemo, useState } from 'react'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { RecipeGrid } from './components/RecipeGrid'
import { RecipeDetail } from './pages/RecipeDetail'
import { useTizenKeys } from './hooks/useTizenKeys'
import { useRecipes } from './store/useRecipes'
import { theme } from './theme'
import './App.css'

function App() {
  // simple hash-based router to avoid adding extra dependencies
  const [route, setRoute] = useState(() => window.location.hash || '#/')
  const navigate = (hash) => {
    window.location.hash = hash
    setRoute(hash)
  }

  // Handle tizen back key: if on detail, go back to home
  useTizenKeys({
    onBack: () => {
      if (route.startsWith('#/recipe/')) navigate('#/')
    },
  })

  const { loading, filtered, query, setQuery } = useRecipes()

  const selectedId = useMemo(() => {
    if (route.startsWith('#/recipe/')) {
      return route.replace('#/recipe/', '')
    }
    return null
  }, [route])

  const onCardClick = (r) => {
    navigate(`#/recipe/${r.id}`)
  }

  return (
    <div style={{ width: '100%', height: '100%', background: theme.colors.background, display: 'flex', flexDirection: 'column' }}>
      <Header />
      {selectedId ? (
        <RecipeDetail id={selectedId} onBack={() => navigate('#/')} />
      ) : (
        <>
          <SearchBar value={query} onChange={setQuery} />
          {loading ? (
            <div style={{ padding: theme.layout.spacing(4), color: '#6B7280', fontFamily: theme.typography.fontFamily }}>
              Loading recipes...
            </div>
          ) : (
            <RecipeGrid recipes={filtered} onCardClick={onCardClick} />
          )}
        </>
      )}
    </div>
  )
}

export default App
