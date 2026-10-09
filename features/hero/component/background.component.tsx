"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import RippleGrid from "../../../components/RippleGrid";

const emptySubscribe = () => () => {};

const Background = () => {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isLight = mounted && resolvedTheme === "light";

  return (
    <div className="absolute inset-0">
      <RippleGrid
        enableRainbow={false}
        gridColor={isLight ? "#4f46e5" : "#5227FF"}
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction
        mouseInteractionRadius={0.8}
        opacity={isLight ? 0.75 : 1}
        fadeDistance={1.5}
        vignetteStrength={2}
        glowIntensity={isLight ? 0.05 : 0.1}
        gridRotation={0}
        lightMode={isLight}
      />
    </div>
  );
};

export default Background;
