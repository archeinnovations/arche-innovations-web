export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <div className="text-4xl font-bold tracking-tight">
          <span className="text-white">ἀρ</span>
          <span className="text-red-800">χ</span>
          <span className="text-white">ή</span>
          <div className="text-xs font-light tracking-widest text-zinc-500 uppercase mt-0.5">
            Innovations
          </div>
        </div>
        <nav className="flex gap-8 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#support" className="hover:text-white transition">Support</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-20">
        <h1 className="text-5xl font-bold mb-6">
          Small beginnings.<br />
          <span className="text-red-800">Real solutions.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mb-10">
          Archē Innovations is a faith-rooted open innovation studio creating practical tools, repair files, smart home systems, and family-friendly maker builds. Most projects are freely shared.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
            Explore Projects
          </a>
          <a href="#support" className="border border-zinc-700 hover:border-zinc-400 text-zinc-300 px-6 py-3 rounded-lg transition">
            Support Future Builds
          </a>
        </div>
      </section>

      {/* First Project */}
      <section id="projects" className="px-8 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Project</h2>
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <div className="text-sm text-red-800 font-medium mb-2">Repair & Replacement</div>
          <h3 className="text-2xl font-bold mb-4">EBO Mini Replacement Track</h3>
          <p className="text-zinc-400 mb-6">
            Our Shiba Inu Mochi chewed through the original EBO Mini track. Rather than retire the robot, we 3D scanned the intact track, cleaned it up in Fusion 360, and printed a functional replacement in Siraya Tech Flex TPU 85A. It works. EBO is rolling again.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {["3D Scanning", "Fusion 360", "TPU Print", "Repair"].map(tag => (
              <span key={tag} className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="text-sm text-zinc-500 italic">
            Scan it. Model it. Print it. Fix it. Share it.
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 bg-zinc-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Archē</h2>
          <p className="text-zinc-400 leading-relaxed">
            Archē (ἀρχή) means beginning, origin, first principle. Every useful solution starts somewhere small. This studio is built on the belief that faith-rooted creativity, engineering, and generosity can turn everyday problems into practical solutions — freely shared with whoever needs them.
          </p>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Support Future Builds</h2>
          <p className="text-zinc-400 mb-8">
            Most Archē projects are shared freely. If something helped you, a coffee tip helps fund the next build.
          </p>
          <a href="https://ko-fi.com" className="bg-red-800 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition text-lg">
            Buy Us a Coffee ☕
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
        © 2026 Archē Innovations — Small beginnings. Real solutions.
      </footer>
    </main>
  )
}