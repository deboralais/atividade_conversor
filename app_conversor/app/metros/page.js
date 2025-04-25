'use client'


// pages/metros.js

import { useState } from 'react';

export default function ConversorMetragem() {
  const [metros, setMetros] = useState('');
  const [pes, setPes] = useState('');
  const [polegadas, setPolegadas] = useState('');

  const handleMetrosChange = (e) => {
    const m = e.target.value;
    setMetros(m);
    setPes(m ? (m * 3.28084).toFixed(2) : '');
    setPolegadas(m ? (m * 39.3701).toFixed(2) : '');
  };

  const handlePesChange = (e) => {
    const p = e.target.value;
    setPes(p);
    setMetros(p ? (p / 3.28084).toFixed(2) : '');
    setPolegadas(p ? (p * 12).toFixed(2) : '');
  };

  const handlePolegadasChange = (e) => {
    const pol = e.target.value;
    setPolegadas(pol);
    setMetros(pol ? (pol / 39.3701).toFixed(2) : '');
    setPes(pol ? (pol / 12).toFixed(2) : '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Conversor de Metragem
        </h1>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Metros:</label>
            <input
              type="number"
              placeholder="Digite o valor em metros"
              value={metros}
              onChange={handleMetrosChange}
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Pés:</label>
            <input
              type="number"
              placeholder="Digite o valor em pés"
              value={pes}
              onChange={handlePesChange}
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Polegadas:</label>
            <input
              type="number"
              placeholder="Digite o valor em polegadas"
              value={polegadas}
              onChange={handlePolegadasChange}
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href="/"
            className="bg-purple-500 text-white px-6 py-3 rounded-full shadow hover:bg-purple-600 transition duration-300 ease-in-out"
          >
            Voltar para a Home
          </a>
        </div>
      </div>
    </div>
  );
}
