'use client'
// pages/dolar.js

import { useState } from 'react';

const TAXA_DOLAR = 5.00; // Cotação fixa em 14/04/2025

export default function Dolar() {
  const [valorDolar, setValorDolar] = useState('');
  const [valorReal, setValorReal] = useState('');

  const handleDolarChange = (e) => {
    const dolar = e.target.value;
    setValorDolar(dolar);
    setValorReal(dolar ? (dolar * TAXA_DOLAR).toFixed(2) : '');
  };

  const handleRealChange = (e) => {
    const real = e.target.value;
    setValorReal(real);
    setValorDolar(real ? (real / TAXA_DOLAR).toFixed(2) : '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Conversor de Dólar
        </h1>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Dólar (USD):</label>
            <input
              type="number"
              placeholder="Digite o valor em USD"
              value={valorDolar}
              onChange={handleDolarChange}
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Real (BRL):</label>
            <input
              type="number"
              placeholder="Digite o valor em BRL"
              value={valorReal}
              onChange={handleRealChange}
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>
        <div className="text-center mt-6">
        <a
  href="/"
  className="bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition duration-300 ease-in-out"
>
  Voltar para a Home
</a>

        </div>
      </div>
    </div>
  );
}
