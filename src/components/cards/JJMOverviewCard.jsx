import { jjmData } from "../../data/jjmData";

export default function JJMOverviewCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-[#0145F2] mb-4">
        Village Overview
      </h2>

      <div className="space-y-3">
        <p>
          <span className="font-medium">Village:</span>{" "}
          {jjmData.village}
        </p>

        <p>
          <span className="font-medium">Population:</span>{" "}
          {jjmData.population.toLocaleString()}
        </p>

        <p>
          <span className="font-medium">Households:</span>{" "}
          {jjmData.households.toLocaleString()}
        </p>

        <p>
          <span className="font-medium">Tap Connections:</span>{" "}
          {jjmData.tapConnections.toLocaleString()}
        </p>

        <p>
          <span className="font-medium">Coverage:</span>{" "}
          {jjmData.coverage}
        </p>

        <p>
          <span className="font-medium">JJM Status:</span>{" "}
          {jjmData.jjmStatus}
        </p>
      </div>
    </div>
  );
}