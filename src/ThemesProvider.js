import React, { createContext, useState } from 'react'

export const ThemesContext = createContext([false, () => {}])

export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    name: 'home',
  })
  return (
    <ThemesContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemesContext.Provider>
  )
}
export const themesList = [
  {
    name: 'home',
  },
  {
    name: 'branding',
  },
  {
    name: 'e-commerce',
  },
  {
    name: 'marketing',
  },
  {
    name: 'social-media',
  },
  {
    name: 'sites',
  },
  {
    name: 'design',
  },
  {
    name: 'editoracao',
  },
]
