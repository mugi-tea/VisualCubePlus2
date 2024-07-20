/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getSpace, viewportM } from "../lib/variables";
import { SettinCubeType } from "./SettingCubeType";
import { SettingCubeView } from "./SettingCubeView";
import { VisualizerType } from "sr-puzzlegen/dist/lib/visualizer/enum";
import { PNGVisualizerOptions } from "sr-puzzlegen";
import { SettingAlg } from "./SettingAlg";
import { SettingCase } from "./SettingCase";
import { SettingSize } from "./SettingSize";
import { SettingScale } from "./SettingScale";
import { SettingRotation } from "./SettingRotation";

type Props = {
  config: PNGVisualizerOptions;
  type: VisualizerType;
  setConfig: React.Dispatch<React.SetStateAction<PNGVisualizerOptions>>;
  setType: React.Dispatch<React.SetStateAction<VisualizerType>>;
};

export const Setting = ({ config, type, setConfig, setType }: Props) => {
  return (
    <div css={containerStyle}>
      <SettinCubeType type={type} setType={setType} />
      <SettingCubeView type={type} setType={setType} />
      <SettingSize config={config} setConfig={setConfig} />
      <SettingAlg config={config} setConfig={setConfig} />
      <SettingCase config={config} setConfig={setConfig} />
      <SettingScale config={config} setConfig={setConfig} />
      <SettingRotation config={config} setConfig={setConfig} />
    </div>
  );
};

const containerStyle = css({
  flexShrink: 0,
  overflowX: "hidden",
  overflowY: "scroll",
  padding: getSpace(2),
  width: "50%",
  ...viewportM({
    width: "100%",
  }),
});
