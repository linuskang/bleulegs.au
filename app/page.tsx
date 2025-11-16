export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-black tracking-[-0.02em]">BLEULEGS</span>
          </div>
          <nav className="flex gap-1">
            <button className="ml-2 px-5 py-2 text-[13px] bg-white text-black hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] font-semibold">contact</button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section className="px-8 py-32 md:py-48 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-[11px] uppercase tracking-[0.15em] font-semibold">established 2024</span>
            </div>
            <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black tracking-[-0.03em] leading-[0.9]">
              TEAM<br />BLEULEGS
            </h1>
            <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] text-gray-400 max-w-3xl leading-relaxed">
              we build robots. we solve problems. we compete.
            </p>
          </div>
        </section>

        <section className="px-8 pb-20 md:pb-32 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white">
            <div className="bg-black p-10 text-center group hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-transparent transition-all cursor-default">
              <div className="text-5xl md:text-6xl font-black mb-3 tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">5</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-medium">awards won</div>
            </div>

            <div className="bg-black p-10 text-center group hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-transparent transition-all cursor-default">
              <div className="text-5xl md:text-6xl font-black mb-3 tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">6</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-medium">team members</div>
            </div>

            <div className="bg-black p-10 text-center group hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-transparent transition-all cursor-default">
              <div className="text-5xl md:text-6xl font-black mb-3 tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">4</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-medium">competitions</div>
            </div>

            <div className="bg-black p-10 text-center group hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-transparent transition-all cursor-default">
              <div className="text-5xl md:text-6xl font-black mb-3 tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">2</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-medium">years active</div>
            </div>
          </div>
        </section>

        <section className="px-8 py-20 md:py-32 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">achievements</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
          <div className="space-y-0">
            <div className="group flex items-baseline gap-8 py-6 border-b border-white/5 hover:border-blue-500/30 transition-all cursor-default">
              <span className="text-5xl font-black text-white/5 group-hover:text-blue-500/30 transition-colors">01</span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">Championship Award 2025 @ Scarborough</h3>
              </div>
            </div>
            <div className="group flex items-baseline gap-8 py-6 border-b border-white/5 hover:border-blue-500/30 transition-all cursor-default">
              <span className="text-5xl font-black text-white/5 group-hover:text-blue-500/30 transition-colors">02</span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">Design Award 2025 @ Scarborough</h3>
              </div>
            </div>
            <div className="group flex items-baseline gap-8 py-6 border-b border-white/5 hover:border-blue-500/30 transition-all cursor-default">
              <span className="text-5xl font-black text-white/5 group-hover:text-blue-500/30 transition-colors">03</span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">2nd place Championship Award @ Gladston</h3>
              </div>
            </div>
            <div className="group flex items-baseline gap-8 py-6 border-b border-white/5 hover:border-blue-500/30 transition-all cursor-default">
              <span className="text-5xl font-black text-white/5 group-hover:text-blue-500/30 transition-colors">04</span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">Core Values Award @ TAFE</h3>
              </div>
            </div>
            <div className="group flex items-baseline gap-8 py-6 border-b border-white/5 hover:border-blue-500/30 transition-all cursor-default">
              <span className="text-5xl font-black text-white/5 group-hover:text-blue-500/30 transition-colors">05</span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">Peer Award @ TAFE</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-20 md:py-32 max-w-6xl mx-auto">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-12 font-semibold">competition history</h2>
          <div className="space-y-8">
            <div className="relative pl-10 pb-8 border-l border-blue-500">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/50"></div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight">National Championships 2025 @ Griffith Uni</h3>
                <span className="text-[10px] px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full uppercase tracking-wider font-semibold">upcoming</span>
              </div>
              <p className="text-[13px] text-gray-500">gold coast, queensland</p>
            </div>
            <div className="relative pl-10 pb-8 border-l border-white/5">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight">Regionals 2025 @ Scarborough</h3>
                <span className="text-[10px] px-3 py-1 bg-green-500/20 text-green-400 rounded-full uppercase tracking-wider font-semibold">1st place</span>
              </div>
              <p className="text-[13px] text-gray-500">redcliffe, queensland</p>
            </div>
            <div className="relative pl-10 pb-8 border-l border-white/5">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight">International Championships 2025 @ Maquarie Uni</h3>
                <span className="text-[10px] px-3 py-1 bg-white/5 text-gray-400 rounded-full uppercase tracking-wider font-semibold">qualified</span>
              </div>
              <p className="text-[13px] text-gray-500">sydney, new south wales</p>
            </div>
            <div className="relative pl-10 pb-8 border-l border-white/5">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight">National Championships 2024 @ Gladstone</h3>
                <span className="text-[10px] px-3 py-1 bg-white/5 text-gray-400 rounded-full uppercase tracking-wider font-semibold">2nd place</span>
              </div>
              <p className="text-[13px] text-gray-500">gladstone, queensland</p>
            </div>
            <div className="relative pl-10 pb-8 border-l border-white/5">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight">Regionals 2024 @ TAFE</h3>
                <span className="text-[10px] px-3 py-1 bg-white/5 text-gray-400 rounded-full uppercase tracking-wider font-semibold">qualified</span>
              </div>
              <p className="text-[13px] text-gray-500">brisbane, queensland</p>
            </div>
          </div>
        </section>

        <section className="px-8 py-20 md:py-32 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">the team</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-8 group hover:border-blue-500/30 transition-all cursor-default rounded-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 flex items-center justify-center text-2xl font-black">RG</div>
              <div className="text-[10px] text-blue-400 mb-2 uppercase tracking-[0.15em] font-semibold">team leader</div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">Rylan Gabriel</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">strategy / programming</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-8 group hover:border-purple-500/30 transition-all cursor-default rounded-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mb-6 flex items-center justify-center text-2xl font-black">LK</div>
              <div className="text-[10px] text-purple-400 mb-2 uppercase tracking-[0.15em] font-semibold">innovation leader</div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">Linus Kang</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">mechanical / engineering</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-8 group hover:border-blue-500/30 transition-all cursor-default rounded-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 mb-6 flex items-center justify-center text-2xl font-black">AR</div>
              <div className="text-[10px] text-blue-400 mb-2 uppercase tracking-[0.15em] font-semibold">innovation design</div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">Arjav Rabari</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">research / development</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-8 group hover:border-purple-500/30 transition-all cursor-default rounded-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 mb-6 flex items-center justify-center text-2xl font-black">CY</div>
              <div className="text-[10px] text-purple-400 mb-2 uppercase tracking-[0.15em] font-semibold">robot design</div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">Charles Yu</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">hardware / assembly</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-8 group hover:border-blue-500/30 transition-all cursor-default rounded-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 flex items-center justify-center text-2xl font-black">PP</div>
              <div className="text-[10px] text-blue-400 mb-2 uppercase tracking-[0.15em] font-semibold">innovation & game</div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">Pray Patel</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">planning / missions</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-8 group hover:border-purple-500/30 transition-all cursor-default rounded-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-6 flex items-center justify-center text-2xl font-black">XA</div>
              <div className="text-[10px] text-purple-400 mb-2 uppercase tracking-[0.15em] font-semibold">innovation & game</div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">Xavier Ashton</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">notebook / presentations</p>
            </div>
          </div>
        </section>

        <section className="px-8 py-20 md:py-32 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">our robot</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-[1.1] bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
                built for precision.<br />designed for speed.
              </h3>
              <p className="text-[16px] text-gray-400 leading-relaxed mb-10">
                our robot combines innovative mechanical design with advanced programming to tackle the most challenging missions.
                modular attachments, sensor-based navigation, and optimized pathfinding give us the competitive edge.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-[16px]">Modular Design</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">quick-swap attachments for maximum efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-[16px]">Autonomous Programming</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">precise sensor-based navigation and mission execution</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-[16px]">Optimized Performance</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">lightweight build with maximum structural integrity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-[10px] text-gray-600 uppercase tracking-wider">robot showcase</span>
            </div>
          </div>
        </section>

        <section className="px-8 py-20 md:py-32 max-w-6xl mx-auto">
          <div className="relative border border-white/10 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5"></div>
            <div className="relative p-10 md:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span className="text-purple-400 text-[11px] uppercase tracking-[0.15em] font-semibold">innovation project</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-[1.1] bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
                solving real problems.<br />making real impact.
              </h3>
              <p className="text-[16px] text-gray-400 leading-relaxed max-w-3xl mb-12">
                our innovation project focuses on addressing challenges in [project theme]. through extensive research,
                community engagement, and iterative development, we've created a solution that makes a tangible difference.
                we're committed to sharing our findings and inspiring others to tackle similar problems in their communities.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 transition-all group">
                  <span className="text-[10px] text-gray-600 group-hover:text-gray-500 uppercase tracking-wider">research</span>
                </div>
                <div className="aspect-square bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 transition-all group">
                  <span className="text-[10px] text-gray-600 group-hover:text-gray-500 uppercase tracking-wider">prototype</span>
                </div>
                <div className="aspect-square bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 transition-all group">
                  <span className="text-[10px] text-gray-600 group-hover:text-gray-500 uppercase tracking-wider">testing</span>
                </div>
                <div className="aspect-square bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 transition-all group">
                  <span className="text-[10px] text-gray-600 group-hover:text-gray-500 uppercase tracking-wider">presentation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-20 md:py-32 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">gallery</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-square bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-blue-500/40 hover:scale-[1.02] transition-all cursor-pointer group overflow-hidden">
              <span className="text-[10px] text-gray-600 group-hover:text-gray-400 uppercase tracking-wider">photo 01</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-purple-500/40 hover:scale-[1.02] transition-all cursor-pointer group overflow-hidden">
              <span className="text-[10px] text-gray-600 group-hover:text-gray-400 uppercase tracking-wider">photo 02</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-cyan-500/40 hover:scale-[1.02] transition-all cursor-pointer group overflow-hidden">
              <span className="text-[10px] text-gray-600 group-hover:text-gray-400 uppercase tracking-wider">photo 03</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-blue-500/40 hover:scale-[1.02] transition-all cursor-pointer group overflow-hidden">
              <span className="text-[10px] text-gray-600 group-hover:text-gray-400 uppercase tracking-wider">photo 04</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-purple-500/40 hover:scale-[1.02] transition-all cursor-pointer group overflow-hidden">
              <span className="text-[10px] text-gray-600 group-hover:text-gray-400 uppercase tracking-wider">photo 05</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/5 to-purple-500/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-pink-500/40 hover:scale-[1.02] transition-all cursor-pointer group overflow-hidden">
              <span className="text-[10px] text-gray-600 group-hover:text-gray-400 uppercase tracking-wider">photo 06</span>
            </div>
          </div>
        </section>

        <section className="px-8 py-20 md:py-32 max-w-6xl mx-auto">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-12 font-semibold text-center">supported by</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="aspect-video bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-center hover:border-blue-500/30 hover:bg-white/[0.04] transition-all">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">sponsor 1</span>
            </div>
            <div className="aspect-video bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 hover:bg-white/[0.04] transition-all">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">sponsor 2</span>
            </div>
            <div className="aspect-video bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-center hover:border-blue-500/30 hover:bg-white/[0.04] transition-all">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">sponsor 3</span>
            </div>
            <div className="aspect-video bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 hover:bg-white/[0.04] transition-all">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">sponsor 4</span>
            </div>
          </div>
        </section>

        <section className="relative px-8 py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black mb-8 tracking-[-0.02em] bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent">LET'S TALK</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-[17px] leading-relaxed">
              want to collaborate? got questions? we're always down to chat about robots, competitions, or anything FIRST.
            </p>
            <button className="px-10 py-5 bg-white text-black font-bold text-[13px] uppercase tracking-wider hover:from-blue-600 hover:to-purple-600 transition-all hover:scale-[1.05] active:scale-[0.98] rounded-full">
              GET IN TOUCH
            </button>
          </div>
        </section>
      </main>

    </div>
  );
}
