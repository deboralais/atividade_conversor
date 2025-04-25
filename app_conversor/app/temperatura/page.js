'use client'
// pages/temperatura.js

import { useState } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);
    setFahrenheit(c ? (c * 9 / 5 + 32).toFixed(2) : '');
  };

  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    setCelsius(f ? ((f - 32) * 5 / 9).toFixed(2) : '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-red-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Conversor de Temperatura
        </h1>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Celsius (°C):</label>
            <input
              type="number"
              placeholder="Digite o valor em Celsius"
              value={celsius}
              onChange={handleCelsiusChange}
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Fahrenheit (°F):</label>
            <input
              type="number"
              placeholder="Digite o valor em Fahrenheit"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>
        <div className="text-center mt-6">
        <a
  href="/"
  className="bg-yellow-600 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-700 transition duration-300 ease-in-out"
>
  Voltar para a Home
</a>
        </div>
      </div>
    </div>
  );
}
