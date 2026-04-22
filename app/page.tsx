export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-black to-black" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            SJ Response Systems
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Sentinel
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300 md:text-2xl">
            Autonomous mission intelligence and wildfire observation systems
            designed for real-world aerial response operations.
          </p>

          <div className="overflow-hidden rounded-2xl border border-orange-500/20 shadow-2xl shadow-orange-500/10">
            <img
              src="/images/sentinel-wildfire-panel.png"
              alt="Sentinel Wildfire Panel"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}