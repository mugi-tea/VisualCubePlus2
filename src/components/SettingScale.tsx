/**@jsxImportSource @emotion/react */

import { PNGVisualizerOptions } from "sr-puzzlegen";
import { Colors, Shadow, getSpace } from "../lib/variables";

type Props = {
  config: PNGVisualizerOptions;
  setConfig: React.Dispatch<React.SetStateAction<PNGVisualizerOptions>>;
};

export const SettingScale = ({ config, setConfig }: Props) => {
  return (
    <div
      css={{
        alignItems: "center",
        display: "flex",
        gap: getSpace(1),
        marginTop: getSpace(1),
      }}
    >
      <input
        type="range"
        css={{
          backgroundColor: Colors.baseColor,
          height: 8,
          borderRadius: 4,
          boxShadow: Shadow.normal,
        }}
        min={1}
        max={20}
        defaultValue={1}
        onChange={(e) => {
          setConfig({
            ...config,
            puzzle: { ...config.puzzle, scale: Number(e.target.value) * 0.1 },
          });
        }}
        value={Math.floor((config.puzzle?.scale ?? 1) * 10)}
      />
      <div>{Math.floor((config.puzzle?.scale ?? 1) * 10) / 10}</div>
    </div>
  );
};
