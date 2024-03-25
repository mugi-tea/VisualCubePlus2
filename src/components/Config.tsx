/**@jsxImportSource @emotion/react */
import { Type } from "sr-puzzlegen";
import { useCubeRender } from "../cubeRenderHook";

export const Config = () => {
  const { setType, config, setConfig } = useCubeRender();

  const downloadImage = () => {
    const canvasElements = document.getElementsByTagName("canvas");
    if (!canvasElements.length) return;

    const canvas = canvasElements[0] as HTMLCanvasElement;
    const link = document.getElementById("download_link") as HTMLAnchorElement;
    link.download = "canvas_image.png";
    link.href = canvas.toDataURL(); // Canvasの内容を画像データURLに変換
    link.click();
  };

  return (
    <div>
      <div id="cube"></div>
      <button
        onClick={() => {
          setType(Type.CUBE);
        }}
      >
        cube
      </button>
      <button
        onClick={() => {
          setType(Type.SKEWB);
        }}
      >
        skewb
      </button>
      <button
        onClick={() => {
          setType(Type.PYRAMINX);
        }}
      >
        pyraminx
      </button>
      <button
        onClick={() => {
          setConfig({ ...config, height: 300, width: 300 });
        }}
      >
        300
      </button>
      <button
        onClick={() => {
          setConfig({ ...config, height: 500, width: 500 });
        }}
      >
        500
      </button>
      <button
        onClick={() => {
          setConfig({ ...config, puzzle: { alg: "R", size: 4 } });
        }}
      >
        4
      </button>
      <button onClick={downloadImage}>generate</button>
      <a id="download_link" style={{ display: "none" }} />
    </div>
  );
};
