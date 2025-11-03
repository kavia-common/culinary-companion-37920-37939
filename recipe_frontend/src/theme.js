//
// Ocean Professional Theme - Centralized theme configuration
//

// PUBLIC_INTERFACE
export const theme = {
  name: 'Ocean Professional',
  colors: {
    primary: '#2563EB', // blue
    secondary: '#F59E0B', // amber
    success: '#10B981',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    subtleText: '#6B7280',
    border: '#E5E7EB',
    cardShadow: 'rgba(0,0,0,0.08)',
    overlay: 'rgba(0,0,0,0.5)',
  },
  gradients: {
    header: 'linear-gradient(180deg, rgba(37,99,235,0.12) 0%, rgba(249,250,251,0) 100%)',
    card: 'linear-gradient(180deg, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.00) 100%)',
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'",
    h1: '2.2rem',
    h2: '1.6rem',
    h3: '1.25rem',
    body: '1rem',
    small: '0.9rem',
  },
  layout: {
    maxWidth: 1200,
    headerHeight: 72,
    spacing: (n) => `${n * 8}px`,
    radius: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
    },
  },
}
