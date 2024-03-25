/**@jsxImportSource @emotion/react */
import { PNGVisualizerOptions } from "sr-puzzlegen";
import { getSpace } from "../lib/variables";

type Props = {
  config: PNGVisualizerOptions;
  setConfig: React.Dispatch<React.SetStateAction<PNGVisualizerOptions>>;
};

export const SettingSize = ({ config, setConfig }: Props) => {
  return <div css={{ marginTop: getSpace(2) }}></div>;
};
