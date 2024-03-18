

import React from 'react'
import Header from '../components/Header'
import AuthoresTable from '../components/AuthoresTable'

type Props = {}

export default function page({}: Props) {
  return (
    <>
    <section>
      <Header title='Tables'/>
    </section>
    <section>
      <AuthoresTable/>
    </section>
    </>
  )
}