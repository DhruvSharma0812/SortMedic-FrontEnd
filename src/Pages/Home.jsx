import React from 'react'
import Features from '../Components/Features';
import Information from '../Components/Information';
import Header from '../Components/Header';
import MessageForm from '../Components/MessageForm';
import Department from '../Components/Department';

const Home = () => {
  return (
    <div>
      <Header />
      <main className='p-8'>
        <Features />
        <Information />
        <Department />
        <MessageForm />
      </main>
    </div>
  )
}

export default Home
