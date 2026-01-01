import React, { Suspense, lazy } from 'react'
import Layout from '../components/layout'
import Hero from './hero-section'

const About = lazy(() => import('./about'))
const Skill = lazy(() => import('./skills'))
const Work = lazy(() => import('./work'))
const Contact = lazy(() => import('./contact'))

const Home = () => {
  return (
    <div className='font-sans'>
        <Layout>
          <Hero />
          <Suspense fallback={<div className="flex items-center justify-center h-screen text-white">Loading...</div>}>
            <About />
            <Skill />
            <Work />
            <Contact />
          </Suspense>
        </Layout>
    </div>
  )
}

export default Home