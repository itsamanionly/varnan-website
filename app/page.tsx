import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import {Tree} from '@/components/tree'
import React from 'react'

const HomePage = () => {
  return (
    <main className='bg-white text-black'>
      <div className='container mx-auto px-2'>
        <Navbar />
        <Hero />
        <Testimonials />
        <Tree />
        <Stats />
      </div>
      <Contact />
      <Faq />
      <Footer />
    </main>
  )
}

export default HomePage