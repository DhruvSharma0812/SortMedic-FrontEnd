import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Bringing Accessible Healthcare Solutions to Rural Communities</p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 bg-gradient-to-b from-blue-100 to-blue-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="about.png"
                alt="Our Mission"
                className="rounded-lg shadow-2xl h-80 w-full object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
              <h2 className="text-4xl font-extrabold mb-4 text-blue-900">
                Who We Are
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                We are a dedicated team of healthcare professionals, technologists, and innovators focused on addressing healthcare challenges in rural and underserved areas. Our mission is to leverage technology and community-driven solutions to provide accessible, affordable, and high-quality medical care to everyone, regardless of their location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-blue-200 to-white py-16 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-25 bg-blue-300 transform scale-110 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-blue-800">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed shadow-md p-6 rounded-lg bg-white">
            Our mission is to revolutionize rural healthcare by providing innovative telemedicine solutions. We strive to bring essential medical services to remote areas, where access to healthcare is limited. By combining cutting-edge technology with compassionate care, we aim to bridge the gap between urban and rural healthcare, ensuring that every individual receives the care they deserve.
          </p>
        </div>
      </section>



      <section className="py-16 bg-gradient-to-r from-blue-100 to-purple-200 flex justify-center items-center">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="Dhruv.jpeg"
              alt="Dhruv Sharma"
              className="mx-auto rounded-full mb-4 w-24 h-24 border-4 border-blue-500 shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-800">Dhruv Sharma</h3>
            <p className="text-gray-600 text-sm">Backend Developer</p>
            <p className="text-gray-700 mt-4">
              Full Stack Developer
            </p>
            <p className="text-gray-500 mt-2">
              Passionate about building scalable applications and working with modern technologies. Experienced in MERN stack and cloud integration.
            </p>
            <div className="mt-4">
              <a href="#!" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition duration-200">
                Connect
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Rural Health Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
