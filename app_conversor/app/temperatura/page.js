'use client'
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Conversor de Temperatura</h1>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Celsius (°C):</label>
          <input
            type="number"
            placeholder="°C"
            value={celsius}
            onChange={handleCelsiusChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Fahrenheit (°F):</label>
          <input
            type="number"
            placeholder="°F"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            className="border p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
}