import React from 'react';
import Hero from '../sections/Hero';
import Impact from '../sections/Impact';
import Empowerment from '../sections/Empowerment';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="bg-offcut-cream py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-offcut-primary mb-4">OUR PHILOSOPHY</h2>
          <p className="text-offcut-secondary max-w-2xl mx-auto">
            We believe in a circular future where fashion doesn't cost the earth. 
            Green technology meets artisan craftsmanship.
          </p>
        </div>
      </div>
      <Impact />
      <Empowerment />
    </div>
  );
};

export default Home;
