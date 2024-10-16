// src/Features.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-gradient-to-b from-blue-300 to-blue-600 py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-5xl font-extrabold text-center text-white mb-12 shadow-lg bg-blue-500 p-4 rounded-lg inline-block'>
          {t('features.title')}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          <FeatureCard 
            title={t('features.cards.chatbot.title')} 
            description={t('features.cards.chatbot.description')}
          />
          <FeatureCard 
            title={t('features.cards.telehealth.title')} 
            description={t('features.cards.telehealth.description')}
          />
          <FeatureCard 
            title={t('features.cards.education.title')} 
            description={t('features.cards.education.description')}
          />
          <FeatureCard 
            title={t('features.cards.offline.title')} 
            description={t('features.cards.offline.description')}
          />
          <FeatureCard 
            title={t('features.cards.emergency.title')} 
            description={t('features.cards.emergency.description')}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className='relative bg-white shadow-2xl rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden group'>
      <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-lg transition-opacity duration-300 ease-in-out'></div>
      <div className='relative z-10 text-center'>
        <h3 className='text-2xl font-bold mb-4 text-blue-800 transition-transform transform group-hover:translate-y-1'>{title}</h3>
        <p className='text-gray-700 transition-all duration-300 ease-in-out group-hover:text-gray-800'>{description}</p>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform transform translate-y-full group-hover:translate-y-0'></div>
    </div>
  );
};

export default Features;
