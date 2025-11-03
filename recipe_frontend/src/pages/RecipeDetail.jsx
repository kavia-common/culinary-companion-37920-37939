import React, { useEffect, useState } from 'react'
import { theme } from '../theme'
import { getRecipeById } from '../services/mockRecipes'

/**
 * PUBLIC_INTERFACE
 * RecipeDetail
 * Placeholder detail screen. Expects prop id (string).
 */
export function RecipeDetail({ id, onBack }) {
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getRecipeById(id)
      .then((r) => mounted && setRecipe(r))
      .finally(() => mounted && setLoading(false))
    return () => {
      mounted = false
    }
  }, [id])

  if (loading) {
    return (
      <div style={{ padding: theme.layout.spacing(4), color: theme.colors.subtleText }}>
        Loading recipe...
      </div>
    )
  }

  if (!recipe) {
    return (
      <div style={{ padding: theme.layout.spacing(4), color: theme.colors.error }}>
        Recipe not found.
      </div>
    )
  }

  const styles = {
    container: {
      maxWidth: theme.layout.maxWidth,
      margin: '0 auto',
      padding: `0 ${theme.layout.spacing(3)} ${theme.layout.spacing(6)}`,
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: theme.layout.spacing(3),
    },
    media: {
      width: '100%',
      borderRadius: theme.layout.radius.lg,
      border: `1px solid ${theme.colors.border}`,
      boxShadow: `0 10px 24px ${theme.colors.cardShadow}`,
      background: theme.gradients.card,
    },
    title: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.h2,
      fontWeight: 800,
      color: theme.colors.text,
      marginBottom: theme.layout.spacing(2),
    },
    sectionTitle: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.h3,
      fontWeight: 700,
      color: theme.colors.text,
      marginBottom: theme.layout.spacing(1),
      marginTop: theme.layout.spacing(2),
    },
    pill: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 12px',
      background: 'rgba(37,99,235,0.08)',
      color: theme.colors.primary,
      borderRadius: 999,
      border: `1px solid rgba(37,99,235,0.15)`,
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      fontSize: theme.typography.small,
      marginRight: 8,
    },
    list: {
      margin: 0,
      paddingLeft: theme.layout.spacing(3),
      color: theme.colors.text,
      fontFamily: theme.typography.fontFamily,
      lineHeight: 1.6,
    },
    backBtn: {
      appearance: 'none',
      border: 'none',
      outline: 'none',
      padding: '10px 16px',
      borderRadius: 10,
      background: theme.colors.primary,
      color: '#fff',
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: `0 8px 18px rgba(37,99,235,0.35)`,
      marginBottom: theme.layout.spacing(2),
    },
  }

  return (
    <div style={{ paddingTop: theme.layout.spacing(3) }}>
      <div style={{ maxWidth: theme.layout.maxWidth, margin: '0 auto', padding: `0 ${theme.layout.spacing(3)}` }}>
        <button style={styles.backBtn} onClick={onBack}>← Back</button>
      </div>
      <div style={styles.container}>
        <img alt="" src={recipe.image} style={styles.media} />
        <div>
          <div style={styles.title}>{recipe.title}</div>
          <div style={{ marginBottom: theme.layout.spacing(2) }}>
            <span style={styles.pill}>⏱ {recipe.timeMinutes} min</span>
            <span style={styles.pill}>🍽 {recipe.servings} servings</span>
          </div>
          <div style={{ color: theme.colors.subtleText, fontFamily: theme.typography.fontFamily, marginBottom: theme.layout.spacing(2) }}>
            {recipe.description}
          </div>
          <div>
            <div style={styles.sectionTitle}>Ingredients</div>
            <ul style={styles.list}>
              {recipe.ingredients.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <div style={styles.sectionTitle}>Steps</div>
            <ol style={styles.list}>
              {recipe.steps.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
