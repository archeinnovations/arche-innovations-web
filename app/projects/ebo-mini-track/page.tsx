import Image from "next/image"
import Link from "next/link"

export default function EboMiniTrack() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <Link href="/" className="text-4xl font-bold tracking-tight">
          <span className="text-white">ἀρ</span>
          <span className="text-red-800">χ</span>
          <span className="text-white">ή</span>
          <div className="text-xs font-light tracking-widest text-zinc-500 uppercase mt-0.5">
            Innovations
          </div>
        </Link>

        <nav className="flex gap-8 text-sm text-zinc-400">
          <Link href="/#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/#support" className="hover:text-white transition">
            Support
          </Link>
        </nav>
      </header>

      {/* Hero Image */}
      <section className="w-full max-w-6xl mx-auto px-8 py-12">
        <Image
          src="/ebo-mini-track-hero.png"
          alt="EBO Mini Track Reverse Engineering Infographic"
          width={1340}
          height={770}
          className="rounded-2xl w-full"
          priority
        />
      </section>

      {/* Project Header */}
      <section className="max-w-3xl mx-auto px-8 pb-12">
        <div className="text-sm text-red-800 font-medium mb-3">
          Repair & Replacement
        </div>

        <h1 className="text-4xl font-bold mb-4">
          EBO Mini Replacement Track
        </h1>

        <p className="text-zinc-400 text-lg mb-8">
          A 3D scanned and printed functional replacement for the EBO Mini robot
          track — born from one very motivated Shiba Inu puppy.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "3D Scanning",
            "Revopoint MetroX Pro",
            "Fusion 360",
            "Bambu Lab H2C",
            "Siraya Tech TPU 85A",
            "Repair",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://makerworld.com"
            className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition"
          >
            Download on MakerWorld
          </a>

          <a
            href="https://printables.com"
            className="border border-zinc-700 hover:border-zinc-400 text-zinc-300 px-6 py-3 rounded-lg transition"
          >
            Download on Printables
          </a>

          <a
            href="https://ko-fi.com/archeinnovations"
            className="border border-red-900 hover:border-red-700 text-red-800 hover:text-red-700 px-6 py-3 rounded-lg transition"
          >
            ☕ Tip the Builder
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-8">
        <div className="border-t border-zinc-800" />
      </div>

      {/* The Story */}
      <section className="max-w-3xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">The Story</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 text-zinc-400 leading-relaxed space-y-4">
            <p>
              Meet Mochi — our Shiba Inu puppy and self-appointed quality
              control inspector. He decided one of our EBO Mini&apos;s tracks
              didn&apos;t meet his standards and handled the situation
              accordingly.
            </p>

            <p>
              Rather than retire the robot or hunt down an OEM replacement, I
              scanned the intact track with a Revopoint MetroX Pro, did some
              light cleanup in Fusion 360, and let the printer do the rest. The
              Bambu Lab H2C smoothed out most of the scan noise beautifully.
            </p>

            <p>
              Printed in Siraya Tech Flex TPU 85A Shore — it fits, it grips, and
              EBO is rolling again.
            </p>
          </div>

          <div className="w-full md:w-64 flex-shrink-0">
            <Image
              src="/mochi.png"
              alt="Mochi the Shiba Inu — quality control inspector"
              width={400}
              height={400}
              className="rounded-2xl w-full object-cover"
            />
            <p className="text-xs text-zinc-600 text-center mt-2 italic">
              Mochi. No regrets.
            </p>
          </div>
        </div>
      </section>

      {/* Print Details */}
      <section className="max-w-3xl mx-auto px-8 py-12 bg-zinc-950 rounded-2xl mb-8">
        <h2 className="text-2xl font-bold mb-8">Print Details</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Outer Size", value: "67.3 × 66.2 mm" },
            { label: "Track Width", value: "8.7 mm" },
            { label: "Material", value: "85A TPU" },
            { label: "Weight", value: "~6g each" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4 text-zinc-300">
          Material Note
        </h3>

        <p className="text-zinc-400 mb-8">
          Tested with Siraya Tech Flex TPU 85A — this is the sweet spot. I also
          tried 90A and the tracks didn&apos;t roll cleanly; too stiff for the
          EBO Mini&apos;s drive system. Softer than 85A may be too floppy. Save
          yourself the filament and go straight to 85A.
        </p>

        <h3 className="text-lg font-semibold mb-4 text-zinc-300">
          Print Settings — Bambu Lab H2C
        </h3>

        <p className="text-zinc-500 text-sm mb-6">
          Using Generic TPU profile in Bambu Studio with TPU Feed Assist Module
          installed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">
              Temperature
            </h4>

            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex justify-between">
                <span>Nozzle</span>
                <span className="text-white">220°C – 225°C</span>
              </li>
              <li className="flex justify-between">
                <span>Bed</span>
                <span className="text-white">30°C – 45°C</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">
              Speed
            </h4>

            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex justify-between">
                <span>Outer/Inner Wall</span>
                <span className="text-white">20 – 40 mm/s</span>
              </li>
              <li className="flex justify-between">
                <span>First Layer</span>
                <span className="text-white">15 – 25 mm/s</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">
              Extrusion
            </h4>

            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex justify-between">
                <span>Max Vol. Speed</span>
                <span className="text-white font-medium">
                  2.8 – 3.2 mm³/s ⚠️
                </span>
              </li>
              <li className="flex justify-between">
                <span>Retraction Length</span>
                <span className="text-white">0.4 – 0.8 mm</span>
              </li>
              <li className="flex justify-between">
                <span>Retraction Speed</span>
                <span className="text-white">25 – 30 mm/s</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">
              Cooling
            </h4>

            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex justify-between">
                <span>Part Cooling Fan</span>
                <span className="text-white">50% – 100%</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-zinc-600 text-xs mt-6">
          ⚠️ Max Volumetric Speed is critical — pushing faster risks extruder
          stripping with 85A TPU.
        </p>
      </section>

      {/* Support */}
      <section className="max-w-3xl mx-auto px-8 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">If This Helped You</h2>

        <p className="text-zinc-400 mb-8">
          This file is free. If it saved your EBO Mini, a coffee tip helps fund
          the next build.
        </p>

        <a
          href="https://ko-fi.com/archeinnovations"
          className="bg-red-800 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition text-lg"
        >
          ☕ Buy Us a Coffee
        </a>

        <p className="text-zinc-600 text-xs mt-4 italic">
          Never expected. Always appreciated.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-zinc-800 text-center text-zinc-600 text-sm mt-12">
        © 2026 Archē Innovations — Small beginnings. Real solutions.
      </footer>
    </main>
  )
}
