// @copyright 2025 muazawais
// @license Apache-2.0

import Home from './homePage/home'
import { Helmet } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Helmet>
        <title>Muaz Awais - Frontend Developer Portfolio</title>
        <meta name="description" content="Portfolio of Muaz Awais, a professional Frontend Developer specializing in React, Tailwind CSS, and modern web technologies. Explore my projects and skills." />
        <meta name="keywords" content="Muaz Awais, Frontend Developer, React Developer, Portfolio, Web Development, Tailwind CSS" />
        <meta property="og:title" content="Muaz Awais - Frontend Developer Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Muaz Awais, a skilled Frontend Developer crafting modern web experiences." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Home />
      <Toaster />

    </>
  )
}

export default App
