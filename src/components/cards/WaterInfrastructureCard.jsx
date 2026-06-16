import { jjmData } from "../../data/jjmData";

export default function WaterInfrastructureCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-[#0145F2] mb-4">
        Water Infrastructure
      </h2>

      <div className="space-y-3">
        <p>
          <span className="font-medium">Habitations:</span>{" "}
          {jjmData.habitations}
        </p>

        <p>
          <span className="font-medium">Water Sources:</span>{" "}
          {jjmData.waterSources}
        </p>

        <p>
          <span className="font-medium">Storage Structures:</span>{" "}
          {jjmData.storageStructures}
        </p>

        <p>
          <span className="font-medium">Schools Covered:</span>{" "}
          {jjmData.schoolsCovered}
        </p>

        <p>
          <span className="font-medium">Anganwadi Covered:</span>{" "}
          {jjmData.anganwadiCovered}
        </p>

        <p>
          <span className="font-medium">Service Level:</span>{" "}
          {jjmData.serviceLevel}
        </p>
      </div>
    </div>
  );
}