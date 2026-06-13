import { AlertTriangle, CloudRain, ShieldCheck } from 'lucide-react'
import OverflowCard from '../components/cards/OverflowCard.jsx'
import RainStatusCard from '../components/cards/RainStatusCard.jsx'
import SystemHealthCard from '../components/cards/SystemHealthCard.jsx'
import TankLevelCard from '../components/cards/TankLevelCard.jsx'
import WaterSavedCard from '../components/cards/WaterSavedCard.jsx'
import { dashboardSummary } from '../data/mockData.js'

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#EDF1F5] px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-[2rem] bg-white px-6 py-7 shadow-sm md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0145F2]">
                Smart Village Infrastructure
              </p>

              <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
                Smart Rainwater Harvesting and Groundwater Recharge System
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-slate-500 md:text-base">
                Low-Cost Sustainable Water Conservation for Rural Homes
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-[#0145F2]/10 px-4 py-3 text-[#0145F2]">
              <ShieldCheck size={26} />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#0145F2]/80">System Mode</p>
                <p className="text-lg font-semibold">Operational</p>
              </div>
            </div>
          </div>
        </header>

        <section className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">System Overview</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Live Monitoring Dashboard</h2>
            </div>

            <div className="hidden rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 md:block">
              Updated now
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            <TankLevelCard value={dashboardSummary.tankLevel} />
            <RainStatusCard value={dashboardSummary.rainStatus} />
            <WaterSavedCard value={dashboardSummary.waterSaved} />
            <OverflowCard value={dashboardSummary.overflowStatus} />
            <SystemHealthCard value={dashboardSummary.systemHealth} />
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#0145F2]/10 p-3 text-[#0145F2]">
                <CloudRain size={22} />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Current Rain Status</p>
                <h3 className="text-2xl font-semibold text-slate-900">{dashboardSummary.rainStatus}</h3>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Tank Level</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{dashboardSummary.tankLevel}%</p>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Water Saved</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{dashboardSummary.waterSaved.toLocaleString()} Litres</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#0145F2]/10 p-3 text-[#0145F2]">
                <AlertTriangle size={22} />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Overflow Status</p>
                <h3 className="text-2xl font-semibold text-slate-900">{dashboardSummary.overflowStatus}</h3>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">System Health</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{dashboardSummary.systemHealth}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard