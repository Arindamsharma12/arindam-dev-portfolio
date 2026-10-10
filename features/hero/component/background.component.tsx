"use client";

import RippleGrid from "../../../components/RippleGrid";

const Background = () => {
  return (
    <div className="absolute inset-0">
      <RippleGrid
        enableRainbow={false}
        gridColor="#5227FF"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction
        mouseInteractionRadius={0.8}
        opacity={1}
        fadeDistance={1.5}
        vignetteStrength={2}
        glowIntensity={0.1}
        gridRotation={0}
        lightMode={false}
      />
    </div>
  );
};

export default Background;
