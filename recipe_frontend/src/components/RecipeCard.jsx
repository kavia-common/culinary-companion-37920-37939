import React from 'react'
import { theme } from '../theme'

/**
 * PUBLIC_INTERFACE
 * RecipeCard
 * Displays a single recipe card with placeholder image, title, tags, and meta.
 */
export function RecipeCard({ recipe, onClick }) {
  const styles = {
    card: {
      background: theme.colors.surface,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.layout.radius.lg,
      overflow: 'hidden',
      boxShadow: `0 10px 24px ${theme.colors.cardShadow}`,
      cursor: 'pointer',
      transition: 'transform 120ms ease, box-shadow 180ms ease',
    },
    media: {
      width: '100%',
      aspectRatio: '16 / 9',
      objectFit: 'cover',
      display: 'block',
      background: theme.gradients.card,
    },
    body: {
      padding: theme.layout.spacing(2),
    },
    title: {
      fontFamily: theme.typography.fontFamily,
      color: theme.colors.text,
      fontSize: theme.typography.h3,
      fontWeight: 700,
      marginBottom: theme.layout.spacing(1),
      lineHeight: 1.3,
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: theme.layout.spacing(1),
    },
    tag: {
      fontSize: theme.typography.small,
      fontFamily: theme.typography.fontFamily,
      background: 'rgba(37,99,235,0.08)',
      color: theme.colors.primary,
      padding: '4px 10px',
      borderRadius: 999,
      border: `1px solid rgba(37,99,235,0.15)`,
      fontWeight: 600,
    },
    meta: {
      display: 'flex',
      gap: 12,
      color: theme.colors.subtleText,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.small,
    },
  }

  return (
    <article
      style={styles.card}
      onClick={() => onClick?.(recipe)}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.(recipe)}
      tabIndex={0}
      role="button"
      aria-label={`Open ${recipe.title}`}
    >
      <img src={recipe.image} alt="" style={styles.media} />
      <div style={styles.body}>
        <div style={styles.title}>{recipe.title}</div>
        <div style={styles.tags}>
          {(recipe.tags || []).slice(0, 3).map((t) => (
            <span key={t} style={styles.tag}>
              {t}
            </span>
          ))}
        </div>
        <div style={styles.meta}>
          <span>⏱ {recipe.timeMinutes} min</span>
          <span>🍽 {recipe.servings} servings</span>
        </div>
      </div>
    </article>
  )
}
