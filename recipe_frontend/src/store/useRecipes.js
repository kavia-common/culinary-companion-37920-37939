import { useEffect, useMemo, useState } from 'react'
import { getRecipes } from '../services/mockRecipes'

/**
 * PUBLIC_INTERFACE
 * useRecipes
 * Hook providing recipes state, loading, search query, and filtered list.
 */
export function useRecipes() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getRecipes()
      .then((data) => {
        if (mounted) {
          setRecipes(data)
        }
      })
      .finally(() => mounted && setLoading(false))
    return () => {
      mounted = false
    }
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return recipes
    return recipes.filter((r) => {
      const inTitle = r.title.toLowerCase().includes(q)
      const inTags = (r.tags || []).some((t) => t.toLowerCase().includes(q))
      return inTitle || inTags
    })
  }, [recipes, query])

  return {
    loading,
    recipes,
    filtered,
    query,
    setQuery,
  }
}
