import React from "react";

export const WavyBackground: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className} style={{ width: "100%", height: "100%" }}>
    {/* Placeholder: Replace with your wavy SVG or animation */}
    <svg width="100%" height="100%">
      <path d="M0,100 Q50,200 100,100 T200,100 T300,100 T400,100" stroke="#facc15" strokeWidth="8" fill="none" />
    </svg>
  </div>
);