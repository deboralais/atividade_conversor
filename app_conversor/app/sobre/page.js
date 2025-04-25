'use client'// pages/sobre.js



export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Sobre Mim
        </h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Quem sou eu?
          </h2>
          <p className="text-gray-600">
            Eu me chamo Débora Laís, sou mãe, trabalho como Analista de Customer Success na Recrut.AI,
            sou estudante de Sistemas para Internet na UNIPAC.
            Esse trabalho foi desenvolvido para a disciplina de Front-End, ministrado pelo professor Márcio Bueno.
          </p>
          <div className="text-center mt-6">
          <a
            href="/"
            className="bg-red-500 text-white px-6 py-3 rounded-full shadow hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Voltar para a Home
          </a>
        </div>
        </section>
        
      </div>
    </div>
  );
}

