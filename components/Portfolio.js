import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Next.js Amazing website',
      liveLink: 'https://suf13.netlify.app',
      image: '/1.png',
    },
    {
      title: 'Afrikana Glasgow',
      description: 'Restaurant Online Menu',
      liveLink: 'https://afrikana-glasgow.netlify.app',
      image: '/2.png',
    },
    {
      title: 'Travel App in React.js',
      description: 'Portfolio website design',
      liveLink: 'https://s-travel.netlify.app',
      image: '/3.png',
    },
  ];

  return (
    <div className='bg-gray-100'>
   
    <section id="recent-work" className="bg-gray-100 py-20 mb-20">
      <h2 className="text-center text-4xl font-bold mb-10">Portfolio</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full overflow-hidden  cursor-pointer mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.liveLink}
              className="inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </a>
          </div>
        ))}
      </div>
    </section>
      <div className="text-center mt-10">
        <a
          href="/portfolio" // Change this link to your actual route
          className="inline-block text-white bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          View All
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
