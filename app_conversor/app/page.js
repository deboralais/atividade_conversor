import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* Link para Sobre no canto superior direito */}
      <Link href="/sobre">
        <span className="absolute top-4 right-4 text-white bg-blue-500 hover:bg-blue-600 transition py-2 px-4 rounded-md font-medium">
          Sobre
        </span>
      </Link>

      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-center text-3xl font-bold">Multi conversores, para o seu dia-a-dia!</h1>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Aqui você encontra conversores de moeda, temperatura e medida:
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Este aplicativo oferece algumas ferramentas de conversão. 
            Escolha uma das opções abaixo:
          </p>

          {/* Navegação */}
          <nav className="flex flex-col gap-4">
            <Link href="/dolar">
              <span className="block text-white bg-green-500 hover:bg-green-600 transition py-2 px-4 text-center rounded-md font-medium">
                Conversor de Dólar
              </span>
            </Link>
            <Link href="/temperatura">
              <span className="block text-white bg-yellow-500 hover:bg-yellow-600 transition py-2 px-4 text-center rounded-md font-medium">
                Conversor de Temperatura
              </span>
            </Link>
            <Link href="/metros">
              <span className="block text-white bg-purple-500 hover:bg-purple-600 transition py-2 px-4 text-center rounded-md font-medium">
                Conversor de Metros
              </span>
            </Link>
          </nav>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-100 text-center py-4">
        <p className="text-gray-600 text-sm">
          Desenvolvido por Débora Laís usando Next.js e Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
