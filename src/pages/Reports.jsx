import { BarChart3, CalendarDays, CloudRain, Download, Droplets, FileText } from 'lucide-react'
import { systemReportMetrics } from '../data/mockData.js'

function Reports() {
  const reports = [
    {
      id: 1,
      date: '12 June 2026',
      title: 'Monthly Harvesting Summary',
      status: 'Ready',
    },
    {
      id: 2,
      date: '11 June 2026',
      title: 'Tank Refill Analysis',
      status: 'Ready',
    },
    {
      id: 3,
      date: '10 June 2026',
      title: 'Recharge Event Log',
      status: 'Archived',
    },
  ]

  const summaryIcons = [Droplets, CloudRain, BarChart3, FileText]

  return (
    <div className="min-h-screen bg-[#EDF1F5] px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-[2rem] bg-white px-6 py-7 shadow-sm md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0145F2]">System Reports</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">System Reports</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-500 md:text-base">Static operational summary for rainwater collection, storage, and recharge activity.</p>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {systemReportMetrics.map((metric, index) => {
            const Icon = summaryIcons[index]

            return (
              <div key={metric.label} className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-900">{metric.value}</h2>
                    <p className="mt-3 text-sm text-slate-500">{metric.detail}</p>
                  </div>

                  <div className="rounded-2xl bg-[#0145F2]/10 p-3 text-[#0145F2]">
                    <Icon size={22} />
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h3 className="text-xl font-semibold text-slate-900">Available Reports</h3>

            <button className="inline-flex items-center gap-2 self-start rounded-xl bg-[#0145F2] px-4 py-2 text-white transition hover:opacity-90 md:self-auto">
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex flex-col gap-5 rounded-2xl border border-slate-100 p-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-[#0145F2]/10 p-3 text-[#0145F2]">
                    <FileText size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">{report.title}</h4>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays size={14} />
                      {report.date}
                    </div>
                  </div>
                </div>

                <span className={`rounded-full px-3 py-1 text-sm font-medium ${report.status === 'Ready' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                  {report.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Reports