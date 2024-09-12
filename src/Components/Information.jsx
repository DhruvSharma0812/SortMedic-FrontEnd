import React from 'react';

const Information = () => {
  return (
    <section className='bg-blue-50 py-8 mt-4'>
      <h2 className='text-4xl font-bold text-center text-blue-900 mb-8'>Health Information</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-4'>
        <InfoCard 
          title='Common Diseases & Cures' 
          content={
            <ul className='custom-list'>
              <li>Common Cold: Rest, hydration, over-the-counter medications.</li>
              <li>Flu: Rest, fluids, antivirals (if prescribed).</li>
              <li>Strep Throat: Antibiotics prescribed by a doctor.</li>
              <li>Consult a doctor if symptoms persist or worsen.</li>
            </ul>
          }
        />
        <InfoCard 
          title='Healthy Life Do’s' 
          content={
            <ul className='custom-list'>
              <li>Balanced Diet: Include fruits, vegetables, and whole grains.</li>
              <li>Exercise: Regular physical activity is essential.</li>
              <li>Hydration: Drink plenty of water.</li>
              <li>Sleep: Ensure proper rest to boost your immune system.</li>
              <li>Regular Check-ups: Visit your doctor for routine health assessments.</li>
            </ul>
          }
        />
        <InfoCard 
          title='Healthy Life Don’ts' 
          content={
            <ul className='custom-list'>
              <li>Avoid Junk Food: Limit unhealthy snacks and sugary drinks.</li>
              <li>No Smoking: Avoid tobacco products.</li>
              <li>Alcohol: Drink in moderation.</li>
              <li>Manage Stress: Don’t let stress pile up—practice self-care.</li>
              <li>Avoid Sedentary Habits: Keep active to promote well-being.</li>
            </ul>
          }
        />
        
        <InfoCard 
          title='Mental Health' 
          content={
            <ul className='custom-list'>
              <li>Exercise: Physical activity improves mental well-being.</li>
              <li>Sleep & Nutrition: Prioritize sleep and a healthy diet.</li>
              <li>Stay Connected: Keep social connections strong.</li>
              <li>Seek Help: Reach out if you experience anxiety or depression.</li>
              <li>Therapy: Counseling or therapy offers helpful coping strategies.</li>
            </ul>
          }
        />
      </div>
    </section>
  );
};

const InfoCard = ({ title, content }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-300 ease-in-out'>
      <h3 className='text-xl font-semibold mb-4 text-blue-700'>{title}</h3>
      <div className='text-gray-800'>{content}</div>
    </div>
  );
};

export default Information;
