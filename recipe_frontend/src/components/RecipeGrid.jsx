import React from 'react'
import { theme } from '../theme'
import { RecipeCard } from './RecipeCard'

/**
 * PUBLIC_INTERFACE
 * RecipeGrid
 * Displays a grid of RecipeCard components, responsive across widths.
 */
export function RecipeGrid({ recipes, onCardClick }) {
  const styles = {
    wrap: {
      maxWidth: theme.layout.maxWidth,
      margin: '0 auto',
      padding: `0 ${theme.layout.spacing(3)} ${theme.layout.spacing(6)}`,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: theme.layout.spacing(2),
    },
  }

  return (
    <section style={styles.wrap}>
      <div style={styles.grid}>
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} onClick={onCardClick} />
        ))}
      </div>
    </section>
  )
}
