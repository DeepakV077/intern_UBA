import { CheckCircle2, Cpu, Droplets, Radar, Recycle, Wrench } from 'lucide-react'
import { systemComponents } from '../data/mockData.js'

const componentIcons = [Droplets, Radar, Recycle, Cpu, Wrench, CheckCircle2]

function WaterSources() {
  return (
    <div className="min-h-screen bg-[#EDF1F5] px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-[2rem] bg-white px-6 py-7 shadow-sm md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0145F2]">System Components</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">System Components</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-500 md:text-base">Core devices and infrastructure used for rainwater harvesting and groundwater recharge.</p>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {systemComponents.map((component, index) => {
            const Icon = componentIcons[index]

            return (
              <article key={component.name} className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#0145F2]/10 p-3 text-[#0145F2]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0145F2]">Component</p>
                      <h2 className="mt-1 text-2xl font-semibold text-slate-900">{component.name}</h2>
                    </div>
                  </div>

                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {component.status}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">{component.purpose}</p>
              </article>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default WaterSources