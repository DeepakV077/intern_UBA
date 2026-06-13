import { Waves } from 'lucide-react'

function WaterSavedCard({ value = 4250 }) {
  return (
    <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[#0145F2]/10 p-3 text-[#0145F2]">
          <Waves size={22} />
        </div>
      </div>

      <p className="mt-5 text-sm font-medium text-slate-500">Water Saved</p>

      <h3 className="mt-2 text-4xl font-bold text-slate-900">{value.toLocaleString()} Litres</h3>

      <p className="mt-3 text-sm text-slate-500">Estimated conservation through rooftop harvesting.</p>
    </div>
  )
}

export default WaterSavedCard