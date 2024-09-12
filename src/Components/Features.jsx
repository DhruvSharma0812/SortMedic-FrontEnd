import React from 'react';

const Features = () => {
  return (
    <section className='bg-blue-50 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-blue-800 mb-8'>
          Our Key Features
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <FeatureCard 
            title='AI-Driven Chatbot' 
            description='Provides instant symptom assessment, first-aid guidance, and health education. Available 24/7 in multiple languages with voice support for users with low literacy.'
          />
          <FeatureCard 
            title='Telehealth Integration' 
            description='Facilitates remote consultations with healthcare professionals through video calls. Includes appointment scheduling, reminders, and secure communication for accessible and convenient medical care.'
          />
          <FeatureCard 
            title='Health Education' 
            description='Delivers localized health tips and preventive care information tailored to rural needs, promoting better health practices and disease prevention.'
          />
          <FeatureCard 
            title='Offline Functionality' 
            description='Ensures access to critical health resources and emergency guidelines even without internet connectivity, allowing users to obtain necessary information anytime.'
          />
          <FeatureCard 
            title='Emergency Assistance' 
            description='Provides step-by-step emergency instructions and local healthcare contacts, enabling users to manage urgent situations effectively and access support promptly.'
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-300 ease-in-out'>
      <h3 className='text-xl font-semibold mb-4 text-blue-800'>{title}</h3>
      <p className='text-gray-700'>{description}</p>
    </div>
  );
};



export default Features;
