import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <header className="flex justify-end space-x-4 p-4 bg-gray-900">
        <Link href={"/post/create"} className="bg-purple-500 text-white py-2 px-4 rounded">
          Iniciar sesión
        </Link>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="p-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-lg max-w-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Bienvenido al generador con IA
          </h1>
          <p className="text-gray-300 mb-6 text-center">
            Descubre cómo nuestra tecnología avanzada puede ayudarte a crear contenido de manera eficiente y efectiva.
          </p>
          <div className="flex justify-center">
            <Link href={"/post/create"} className="bg-purple-500 text-white py-2 px-4 rounded">
              Generar publicación con IA
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 p-4 text-center">
        <p className="text-gray-400">
        © 2024 Generador de contenido con IA | Diseñado y desarrollado con ❤
        </p>
      </footer>
    </div>
  );
}
