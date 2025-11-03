import React from 'react'
import { theme } from '../theme'

/**
 * PUBLIC_INTERFACE
 * SearchBar
 * Controlled input that updates the search query.
 */
export function SearchBar({ value, onChange }) {
  const styles = {
    container: {
      maxWidth: theme.layout.maxWidth,
      margin: `${theme.layout.spacing(3)} auto`,
      padding: `0 ${theme.layout.spacing(3)}`,
    },
    inputWrap: {
      position: 'relative',
      background: theme.colors.surface,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.layout.radius.lg,
      boxShadow: `0 6px 20px ${theme.colors.cardShadow}`,
    },
    input: {
      width: '100%',
      height: 56,
      padding: `0 ${theme.layout.spacing(2)} 0 ${theme.layout.spacing(6)}`,
      fontSize: theme.typography.body,
      fontFamily: theme.typography.fontFamily,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: theme.colors.text,
    },
    icon: {
      position: 'absolute',
      left: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 22,
      height: 22,
      borderRadius: 6,
      background: theme.gradients.card,
      display: 'grid',
      placeItems: 'center',
      color: theme.colors.primary,
      fontWeight: 700,
      fontSize: 14,
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.inputWrap}>
        <div style={styles.icon}>🔎</div>
        <input
          aria-label="Search recipes"
          placeholder="Search recipes by title or tag..."
          style={styles.input}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  )
}
