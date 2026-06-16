import JJMOverviewCard from "../components/cards/JJMOverviewCard";
import WaterInfrastructureCard from "../components/cards/WaterInfrastructureCard";
import GroundwaterCard from "../components/cards/GroundwaterCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#EDF1F5] p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#0145F2]">
          Smart Rainwater Harvesting System
        </h1>

        <p className="text-gray-600 mt-2">
          Poonthandalam Village • Groundwater Recharge • Water Monitoring
        </p>
      </div>

      {/* Village Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Village Overview
        </h2>

        <JJMOverviewCard />
      </section>

      {/* Water Infrastructure */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Water Infrastructure
        </h2>

        <WaterInfrastructureCard />
      </section>

      {/* Groundwater Dependency */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Groundwater Dependency
        </h2>

        <GroundwaterCard />
      </section>

      {/* Smart Monitoring */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Smart Monitoring System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-gray-500 text-sm">Tank Level</p>
            <h3 className="text-3xl font-bold text-[#0145F2] mt-2">
              78%
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-gray-500 text-sm">Rain Status</p>
            <h3 className="text-lg font-semibold text-green-600 mt-2">
              Rain Detected
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-gray-500 text-sm">Water Saved</p>
            <h3 className="text-2xl font-bold text-[#0145F2] mt-2">
              4,250 L
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-gray-500 text-sm">Overflow Status</p>
            <h3 className="text-lg font-semibold text-green-600 mt-2">
              Normal
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-gray-500 text-sm">System Health</p>
            <h3 className="text-lg font-semibold text-green-600 mt-2">
              Good
            </h3>
          </div>

        </div>
      </section>

      {/* Water Quality */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Water Quality Monitoring
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-gray-500 text-sm">
              JJM Water Quality Status
            </p>

            <h3 className="text-green-600 text-2xl font-bold mt-2">
              Safe
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-gray-500 text-sm">
              Turbidity Status
            </p>

            <h3 className="text-[#0145F2] text-2xl font-bold mt-2">
              Low
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-gray-500 text-sm">
              Monitoring Status
            </p>

            <h3 className="text-green-600 text-2xl font-bold mt-2">
              Active
            </h3>
          </div>

        </div>
      </section>

      {/* Village Location */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Village Location
        </h2>

        <div className="bg-white rounded-2xl p-4 shadow-sm overflow-hidden">

          <iframe
            title="Poonthandalam Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.663303207624!2d80.03344334650058!3d12.940909697944104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4f9bf66faf7%3A0xb7dcdd0f99e33331!2sPoonthandalam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1781507391725!5m2!1sen!2sin"
            className="w-full h-[450px] rounded-xl border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </section>

    </div>
  );
}