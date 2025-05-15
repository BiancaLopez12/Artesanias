import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-black">
        <button className="text-brown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <h1 className="text-4xl md:text-5xl font-serif text-amber text-center">ARTESANIAS</h1>
        <div className="w-8"></div> {/* Spacer for alignment */}
      </header>

      {/* Navigation */}
      <nav className="border-b border-black">
        <div className="flex justify-center gap-4 md:gap-12 py-6">
          <Link
            href="#"
            className="bg-brown text-cream rounded-full w-24 h-24 flex items-center justify-center text-center"
          >
            <span>Inicio</span>
          </Link>
          <Link
            href="#"
            className="bg-brown text-cream rounded-full w-24 h-24 flex items-center justify-center text-center"
          >
            <span>Productos</span>
          </Link>
          <Link
            href="#"
            className="bg-brown text-cream rounded-full w-24 h-24 flex items-center justify-center text-center"
          >
            <span className="px-2">Sobre Nosotros</span>
          </Link>
          <Link
            href="#"
            className="bg-brown text-cream rounded-full w-24 h-24 flex items-center justify-center text-center"
          >
            <span>Contacto</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-5xl md:text-6xl font-serif text-amber text-center mb-8">SOBRE NOSOTROS</h2>
        <p className="text-brown text-lg mb-16 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <h2 className="text-5xl md:text-6xl font-serif text-amber text-center mb-8">PROCESO ARTESANAL</h2>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt={`Proceso artesanal ${index}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
