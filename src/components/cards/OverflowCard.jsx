import { AlertTriangle } from 'lucide-react'

function OverflowCard({ value = 'Normal' }) {
  const isOverflow = value === 'Overflow Active'

  return (
    <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[#0145F2]/10 p-3 text-[#0145F2]">
          <AlertTriangle size={22} />
        </div>

        <span className={`rounded-full px-3 py-1 text-xs font-medium ${isOverflow ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
          {isOverflow ? 'Attention' : 'Normal Flow'}
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-slate-500">Overflow Status</p>

      <h3 className="mt-2 text-3xl font-bold text-slate-900">{value}</h3>
    </div>
  )
}

export default OverflowCard