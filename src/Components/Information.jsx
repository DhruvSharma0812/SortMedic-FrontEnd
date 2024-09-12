import React from 'react'

const Information = () => {
  return (
    <section>
      <h2 className='text-3xl font-semibold mb-6'>General Information</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <InfoCard 
          title='Hospitals' 
          content='Find information about general hospitals in your area, their services, and contact details. Ensure you have access to reliable healthcare facilities.'
        />
        <InfoCard 
          title='Disease Precautions' 
          content='Learn about the do’s and don’ts for various diseases to prevent their spread. Understand preventive measures and stay informed to keep yourself and your community healthy.'
        />
      </div>
    </section>
  )
}

const InfoCard = ({ title, content }) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <h3 className='text-xl font-semibold mb-4'>{title}</h3>
      <p className='text-gray-700'>{content}</p>
    </div>
  );
};

export default Information
