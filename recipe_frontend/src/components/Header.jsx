import React from 'react'
import { theme } from '../theme'

/**
 * PUBLIC_INTERFACE
 * Header
 * Top navigation bar with app title and user/account placeholder.
 */
export function Header() {
  const styles = {
    container: {
      height: `${theme.layout.headerHeight}px`,
      background: theme.gradients.header,
      borderBottom: `1px solid ${theme.colors.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `0 ${theme.layout.spacing(3)}`,
      position: 'sticky',
      top: 0,
      zIndex: 10,
      backdropFilter: 'saturate(150%) blur(6px)',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.layout.spacing(1),
      color: theme.colors.text,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.h2,
      fontWeight: 700,
      letterSpacing: '0.2px',
    },
    badge: {
      display: 'inline-block',
      padding: '4px 10px',
      background: theme.colors.secondary,
      color: '#111827',
      borderRadius: theme.layout.radius.sm,
      fontSize: theme.typography.small,
      fontWeight: 600,
    },
    user: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.layout.spacing(1),
      color: theme.colors.subtleText,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body,
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: theme.colors.primary,
      boxShadow: `0 2px 6px ${theme.colors.cardShadow}`,
      display: 'grid',
      placeItems: 'center',
      color: 'white',
      fontWeight: 700,
      letterSpacing: '0.5px',
    },
  }
  return (
    <header style={styles.container}>
      <div style={styles.title}>
        <span style={{ width: 12, height: 12, borderRadius: 3, background: theme.colors.primary, boxShadow: `0 0 0 3px rgba(37,99,235,0.2)` }} />
        Culinary Companion <span style={styles.badge}>Beta</span>
      </div>
      <div style={styles.user}>
        <span>Guest</span>
        <div style={styles.avatar}>CC</div>
      </div>
    </header>
  )
}
