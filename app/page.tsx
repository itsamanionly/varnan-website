import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'
import { ForYou } from '@/components/for-you'
import { Founders } from '@/components/founders'
import { Hero } from '@/components/hero'
import { LandingBlogs } from '@/components/landing-blogs'
import { Navbar } from '@/components/navbar'
import { Phases } from '@/components/phases'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import { Tree } from '@/components/tree'
import React from 'react'

const HomePage = () => {
  return (
    <main className='bg-white text-black'>
      <div className='container mx-auto px-2'>
        <Navbar />
        <Hero />
        <Testimonials />
        <Tree />
        <Phases />
        <Stats />
        <ForYou />
      </div>
      <Contact />
      <Founders />
      <LandingBlogs />
      <Faq />
      <Footer />
    </main>
  )
}

export default HomePage