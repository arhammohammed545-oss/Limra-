"use client";

import Spline from "@splinetool/react-spline";

const LIMRA_VILLA_SCENE =
  "https://prod.spline.design/7pK5JuMC4BXUVu6n/scene.splinecode";

export function HeroVilla() {
  return (
    <div className="h-full w-full" aria-label="Interactive 3D architectural villa">
      <Spline
        scene={LIMRA_VILLA_SCENE}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
