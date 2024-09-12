import React from 'react'
import Features from '../Components/Features';
import Information from '../Components/Information';
import Header from '../Components/Header';

const Home = () => {
  return (
    <div>
      <Header />

      <main className='p-8'>
        <Features />
        <Information />
      </main>
    </div>
  )
}

export default Home
