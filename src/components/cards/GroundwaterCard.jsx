import { jjmData } from "../../data/jjmData";

export default function GroundwaterCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-[#0145F2] mb-4">
        Groundwater Dependency
      </h2>

      <div className="space-y-3">
        <p>
          <span className="font-medium">Primary Source:</span>{" "}
          {jjmData.primarySource}
        </p>

        <p>
          <span className="font-medium">Source Type:</span>{" "}
          {jjmData.sourceType}
        </p>

        <p>
          <span className="font-medium">Active Sources:</span>{" "}
          {jjmData.waterSources}
        </p>

        <p className="text-red-500 font-medium">
          High Dependency on Groundwater
        </p>

        <p className="text-green-600 font-medium">
          Recommended: {jjmData.projectNeed}
        </p>
      </div>
    </div>
  );
}