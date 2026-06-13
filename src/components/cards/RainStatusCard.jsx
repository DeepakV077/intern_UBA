import { CloudRain } from 'lucide-react'

function RainStatusCard({ value = 'Rain Detected' }) {
  const isRainDetected = value === 'Rain Detected'

  return (
    <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[#0145F2]/10 p-3 text-[#0145F2]">
          <CloudRain size={22} />
        </div>

        <span className={`rounded-full px-3 py-1 text-xs font-medium ${isRainDetected ? 'bg-sky-50 text-sky-700' : 'bg-slate-100 text-slate-600'}`}>
          {isRainDetected ? 'Collection Active' : 'System Standby'}
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-slate-500">Rain Status</p>

      <h3 className="mt-2 text-3xl font-bold text-slate-900">{value}</h3>
    </div>
  )
}

export default RainStatusCard