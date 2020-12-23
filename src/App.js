import React from 'react';

import { BrowserRouter } from "react-router-dom";
import { Routes } from './routes'

// components
import { Header } from './components/header'
import { Footer } from './components/footer'

// context
import { ThemesProvider } from './ThemesProvider'


// pages
export const App = () => {

  return (
    <ThemesProvider>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </ThemesProvider>
  );
}

