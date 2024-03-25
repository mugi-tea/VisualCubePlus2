/**@jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Type } from "sr-puzzlegen";
import { GeneralButton } from "./GeneralButton";
import { VisualizerType } from "sr-puzzlegen/dist/lib/visualizer/enum";
import { useEffect } from "react";
import { getSpace } from "../lib/variables";

type Props = {
  type: VisualizerType;
  setType: React.Dispatch<React.SetStateAction<VisualizerType>>;
};

export const SettingCubeView = ({ type, setType }: Props) => {
  useEffect(() => {
    console.log(type);
  }, [type]);
  return (
    <div css={containerStyle}>
      <GeneralButton
        pressed={!type.includes("net") && !type.includes("top")}
        onClick={() => {
          if (type.includes("cube")) setType(Type.CUBE);
          if (type.includes("megaminx")) setType(Type.MEGAMINX);
          if (type.includes("pyraminx")) setType(Type.PYRAMINX);
          if (type.includes("skewb")) setType(Type.SKEWB);
          if (type.includes("square1")) setType(Type.SQUARE1);
        }}
        width={
          type.includes("cube") || type.includes("megaminx") ? "33%" : "50%"
        }
      >
        立体
      </GeneralButton>
      <GeneralButton
        pressed={type.includes("net")}
        onClick={() => {
          if (type.includes("cube")) setType(Type.CUBE_NET);
          if (type.includes("megaminx")) setType(Type.MEGAMINX_NET);
          if (type.includes("pyraminx")) setType(Type.PYRAMINX_NET);
          if (type.includes("skewb")) setType(Type.SKEWB_NET);
          if (type.includes("square1")) setType(Type.SQUARE1_NET);
        }}
        width={
          type.includes("cube") || type.includes("megaminx") ? "33%" : "50%"
        }
      >
        展開図
      </GeneralButton>
      {type.includes("cube") || type.includes("megaminx") ? (
        <GeneralButton
          pressed={type.includes("top")}
          onClick={() => {
            if (type.includes("cube")) setType(Type.CUBE_TOP);
            if (type.includes("megaminx")) setType(Type.MEGAMINX_TOP);
          }}
          width={"34%"}
        >
          上面
        </GeneralButton>
      ) : null}
    </div>
  );
};

const containerStyle = css({
  display: "flex",
  gap: getSpace(1),
  marginTop: getSpace(1),
  width: "100%",
});
