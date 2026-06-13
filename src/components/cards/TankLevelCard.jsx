import { Droplets } from 'lucide-react'

function TankLevelCard({ value = 78 }) {
  return (
    <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[#0145F2]/10 p-3 text-[#0145F2]">
          <Droplets size={22} />
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          Live
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-slate-500">Tank Level</p>

      <h3 className="mt-2 text-4xl font-bold text-slate-900">{value}%</h3>

      <div className="mt-5 h-3 rounded-full bg-slate-100">
        <div
          className="h-3 rounded-full bg-[#0145F2]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default TankLevelCard