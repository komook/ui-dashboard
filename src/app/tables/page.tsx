'use client'

import React from 'react'
import Header from '../components/Header'
import AuthoresTable from '../components/AuthoresTable'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

type Props = {}

export default function page({ }: Props) {
  return (
    <>
      <section>
        <Header title='Tables' />
      </section>
      <section className='flex flex-wrap gap-10 justify-center '>
        <div className='w-[1600px] h-[520px]'>

          <AuthoresTable />
        </div>
        <div className='w-[1600px] h-[520px]'>

          <Projects />
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}