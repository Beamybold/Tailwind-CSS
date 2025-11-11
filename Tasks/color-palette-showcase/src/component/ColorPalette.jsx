import React from "react";

function ColorPaletteShowcase() {
  const colors = [
    { name: "Nigerian Flag Green", hex: "#03ac68ff" },
    { name: "Nigerian Flag White", hex: "#FFFFFF" },
    { name: "Naija Green 50", hex: "#f0fdf4" },
    { name: "Naija Green 100", hex: "#dcfce7" },
    { name: "Naija Green 200", hex: "#bbf7d0" },
    { name: "Naija Green 300", hex: "#86efac" },
    { name: "Naija Green 400", hex: "#4ade80" },
    { name: "Naija Green 500", hex: "#22c55e" },
    { name: "Naija Green 600", hex: "#16a34a" },
    { name: "Naija Green 700", hex: "#15803d" },
    { name: "Naija Green 800", hex: "#166534" },
    { name: "Naija Green 900", hex: "#14532d" },
    { name: "Naija Green 950", hex: "#052e16" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">🇳🇬 Color Palette Showcase</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col items-center">
            <div
              className="w-20 h-20 rounded shadow-md"
              style={{ backgroundColor: color.hex }}
            ></div>
            <p
              className={`mt-2 text-sm font-medium ${
                color.hex === "#FFFFFF" ? "text-black" : "text-white"
              }`}
              style={{ backgroundColor: color.hex }}
            >
              {color.name}
            </p>
            <p className="text-xs text-gray-600">{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPaletteShowcase;
