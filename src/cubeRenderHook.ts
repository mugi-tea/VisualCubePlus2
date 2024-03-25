import { useEffect, useState } from "react";
import { Type, Canvas, PNGVisualizerOptions } from "sr-puzzlegen";
import { VisualizerType } from "sr-puzzlegen/dist/lib/visualizer/enum";

export const useCubeRender = () => {
  const [type, setType] = useState<VisualizerType>(Type.CUBE);
  const [config, setConfig] = useState<PNGVisualizerOptions>({});

  useEffect(() => {
    const canvasRendererDiv = document.querySelector(
      ".canvas-renderer"
    ) as HTMLElement;
    if (canvasRendererDiv) {
      canvasRendererDiv.remove();
    }
    Canvas("#puzzle-renderer", type, config);
  }, [type, config]);

  return { type, setType, config, setConfig };
};
