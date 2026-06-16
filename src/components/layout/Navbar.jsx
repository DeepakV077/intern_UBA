import React from "react";
import { Droplets, CloudRain, MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-xl">
            <Droplets className="text-blue-600" size={28} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-800">
              Smart Rainwater Harvesting
            </h1>
            <p className="text-xs text-gray-500">
              Groundwater Recharge Monitoring System
            </p>
          </div>
        </div>

        {/* Village Info */}
        <div className="hidden md:flex items-center gap-2 bg-green-50 px-4 py-2 rounded-xl border">
          <MapPin size={18} className="text-green-600" />
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Nallur Village
            </p>
            <p className="text-xs text-gray-500">
              Poonthandalam Block, Kancheepuram
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl border">
          <CloudRain size={18} className="text-blue-600" />
          <span className="text-sm font-medium text-gray-700">
            System Active
          </span>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;