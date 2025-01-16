import Link from "next/link";

export default function Sidebar({ user }: {user: string}) {
    return (
        <div className="flex flex-col justify-between h-screen w-64 bg-gray-800 text-gray-100 p-5">
            <div>
                <button className="w-full bg-purple-500 hover:bg-purple-700 text-gray-100 py-2 px-4 rounded font-bold rounded">
                    <Link href="/post/create">
                        Nueva publicación
                    </Link>
                </button>
                <div className="text-center mb-4">
                Tokens Disponibles: 0
                <Link href="/buy-tokens">
                    <span className="block bg-purple-500 hover:bg-purple-700 text-gray-100 py-2 px-4 rounded mb-4">Comprar Más Tokens</span>
                </Link>
                </div>
            </div>
            <div className="text-center">
                <p>{user}</p>
                <button className="mt-2 bg-purple-500 hover:bg-purple-700 text-gray-100 py-2 px-4 rounded font-bold rounded">
                    <Link href="/api/auth/logout">Cerrar Sesión</Link>
                </button>
            </div>
        </div>
    )
}