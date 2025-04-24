import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Conversor Inteligente</h1>
      <p>Este aplicativo oferece várias ferramentas de conversão para facilitar a sua vida!</p>
      <nav className="mt-4 space-y-2">
        <Link href="/sobre" className="text-blue-500 hover:underline">
          Sobre
        </Link>
        <br />
        <Link href="/dolar" className="text-blue-500 hover:underline">
          Conversor de Dólar
        </Link>
        <br />
        <Link href="/temperatura" className="text-blue-500 hover:underline">
          Conversor de Temperatura
        </Link>
        <br />
        <Link href="/metros" className="text-blue-500 hover:underline">
          Conversor de Metros
        </Link>
      </nav>
    </div>
  );
}