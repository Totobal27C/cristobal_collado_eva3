import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'rootFontSize'
const THEME_KEY = 'siteTheme'
const MIN_SIZE = 12
const MAX_SIZE = 28
const STEP = 2

export default function AccessibilityButton() {
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      return s ? parseInt(s, 10) : null
    } catch (e) {
      return null
    }
  })

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    const computed = parseInt(getComputedStyle(document.documentElement).fontSize, 10)
    const initial = size || computed || 18
    applySize(initial)
    setSize(initial)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function applySize(newSize) {
    document.documentElement.style.fontSize = `${newSize}px`
    try {
      localStorage.setItem(STORAGE_KEY, String(newSize))
    } catch (e) {
      // ignore
    }
  }

  function applyTheme(value) {
    try {
      if (value === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
      }
      localStorage.setItem(THEME_KEY, value)
    } catch (e) {
      // ignore
    }
  }

  function increase() {
    setSize(s => {
      const next = Math.min(MAX_SIZE, (s || 18) + STEP)
      applySize(next)
      return next
    })
  }

  function decrease() {
    setSize(s => {
      const next = Math.max(MIN_SIZE, (s || 18) - STEP)
      applySize(next)
      return next
    })
  }

  function reset() {
    const defaultSize = 18
    setSize(defaultSize)
    applySize(defaultSize)
  }

  return (
    <div className="accessibility-root">
      <button
        aria-label="Accesibilidad"
        className="accessibility-toggle"
        onClick={() => setOpen(o => !o)}
        title="Accesibilidad"
      >
        A
      </button>

      {open && (
        <div className="accessibility-panel" role="dialog" aria-label="Opciones de accesibilidad">
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="acc-btn" aria-label="Disminuir tamaño" onClick={decrease}>-</button>
            <button className="acc-btn" aria-label="Restablecer tamaño" onClick={reset}>A</button>
            <button className="acc-btn" aria-label="Aumentar tamaño" onClick={increase}>+</button>
          </div>

          <div className="theme-controls" style={{ marginTop: 8 }}>
            <span style={{ marginRight: 8, fontSize: '.9rem' }}>Tema:</span>
            <button
              className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
              aria-pressed={theme === 'light'}
              onClick={() => setTheme('light')}
            >
               ☀️
            </button>
            <button
              className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme('dark')}
            >
              ☾
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
