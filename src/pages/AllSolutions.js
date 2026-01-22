import React from 'react';
import solutions from '../database/solutions';

const AllSolutions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Solutions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {solutions.map((solution) => (
          <div key={solution.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={solution.image} alt={solution.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{solution.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSolutions;
