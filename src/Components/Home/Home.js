import React from 'react'
import About from './About'
import Banner from './Banner'
import Card from './Card'
import Count from './Count'

import Service from './Service'

export default function Home() {
  return (
    <div>
        <Banner/>
        <Card/>
        <About/>
        <Service/>
        <Count/>
    </div>
  )
}
