
import React from 'react';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-3xl font-bold underline border-4 border-white bg-red-400 text-white text-center p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-500">
        <a href="/About" className="hover:text-yellow-300 hover:transition-transform transfr">
          Welcome to My About Page
        </a>
      </div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwiVqpNd0zv349lznWpZI0-KKoEyp-sFiA_g&s' alt="Cover Hub" className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none" />
    </div>
  );
}
