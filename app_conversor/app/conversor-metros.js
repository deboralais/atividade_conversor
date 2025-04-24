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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Conversor de Metragem</h1>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Metros:</label>
          <input
            type="number"
            placeholder="Metros"
            value={metros}
            onChange={handleMetrosChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Pés:</label>
          <input
            type="number"
            placeholder="Pés"
            value={pes}
            onChange={handlePesChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Polegadas:</label>
          <input
            type="number"
            placeholder="Polegadas"
            value={polegadas}
            onChange={handlePolegadasChange}
            className="border p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
}