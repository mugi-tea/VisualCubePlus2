/**@jsxImportSource @emotion/react */

import { PNGVisualizerOptions } from "sr-puzzlegen";
import { Input } from "./Input";
import { getSpace } from "../lib/variables";

type Props = {
  config: PNGVisualizerOptions;
  setConfig: React.Dispatch<React.SetStateAction<PNGVisualizerOptions>>;
};

export const SettingCase = ({ config, setConfig }: Props) => {
  return (
    <div css={{ marginTop: getSpace(2) }}>
      <Input
        css={{ width: "100%" }}
        onChange={(e) => {
          setConfig({
            ...config,
            puzzle: { ...config.puzzle, case: e.target.value },
          });
        }}
        placeholder="case"
        value={config.puzzle?.case}
      />
    </div>
  );
};
