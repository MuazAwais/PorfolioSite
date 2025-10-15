import React from 'react'
import Layout from '../components/layout'
import Hero from './hero-section'
import About from './about'
import Skill from './skills'
import Work from './work'
import Contact from './contact'

const Home = () => {
  return (
    <div className='font-sans'>
        <Layout>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Contact />
        </Layout>
    </div>
  )
}

export default Home