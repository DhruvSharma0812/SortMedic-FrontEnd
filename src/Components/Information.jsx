import React from 'react';
import { useTranslation } from 'react-i18next';

const Information = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-gradient-to-b from-blue-50 to-blue-200 py-16 mt-4'>
      <h2 className='text-5xl font-extrabold text-center text-blue-900 mb-10'>
        {t('healthInformation.title')}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6'>
        <InfoCard 
          title={t('healthInformation.commonDiseases.title')} 
          content={
            <ul className='space-y-2'>
              {t('healthInformation.commonDiseases.items', { returnObjects: true }).map((item, index) => (
                <li key={index} className='flex items-center space-x-2'>
                  <span className='text-blue-600 text-2xl'>•</span>
                  <span className='text-lg'>{item}</span>
                </li>
              ))}
            </ul>
          }
        />
        <InfoCard 
          title={t('healthInformation.healthyDos.title')} 
          content={
            <ul className='space-y-2'>
              {t('healthInformation.healthyDos.items', { returnObjects: true }).map((item, index) => (
                <li key={index} className='flex items-center space-x-2'>
                  <span className='text-blue-600 text-2xl'>•</span>
                  <span className='text-lg'>{item}</span>
                </li>
              ))}
            </ul>
          }
        />
        <InfoCard 
          title={t('healthInformation.healthyDonts.title')} 
          content={
            <ul className='space-y-2'>
              {t('healthInformation.healthyDonts.items', { returnObjects: true }).map((item, index) => (
                <li key={index} className='flex items-center space-x-2'>
                  <span className='text-blue-600 text-2xl'>•</span>
                  <span className='text-lg'>{item}</span>
                </li>
              ))}
            </ul>
          }
        />
        <InfoCard 
          title={t('healthInformation.mentalHealth.title')} 
          content={
            <ul className='space-y-2'>
              {t('healthInformation.mentalHealth.items', { returnObjects: true }).map((item, index) => (
                <li key={index} className='flex items-center space-x-2'>
                  <span className='text-blue-600 text-2xl'>•</span>
                  <span className='text-lg'>{item}</span>
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
};

const InfoCard = ({ title, content }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
      <h3 className='text-2xl font-semibold mb-4 text-blue-800'>{title}</h3>
      <div className='text-gray-800'>{content}</div>
    </div>
  );
};

export default Information;
