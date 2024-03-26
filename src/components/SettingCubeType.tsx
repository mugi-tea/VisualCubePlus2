/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GeneralButton } from "./GeneralButton";
import { Type } from "sr-puzzlegen";
import { getSpace } from "../lib/variables";
import { VisualizerType } from "sr-puzzlegen/dist/lib/visualizer/enum";
import { viewportM } from "../lib/variables";

type Props = {
  type: VisualizerType;
  setType: React.Dispatch<React.SetStateAction<VisualizerType>>;
};

export const SettinCubeType = ({ type, setType }: Props) => {
  return (
    <div css={containerStyle}>
      <GeneralButton
        css={buttonStyle}
        onClick={() => {
          if (type.includes("net")) {
            setType(Type.CUBE_NET);
          } else if (type.includes("top")) {
            setType(Type.CUBE_TOP);
          } else {
            setType(Type.CUBE);
          }
        }}
        pressed={type.includes("cube")}
      >
        キューブ
      </GeneralButton>
      <GeneralButton
        css={buttonStyle}
        onClick={() => {
          if (type.includes("net")) {
            setType(Type.MEGAMINX_NET);
          } else if (type.includes("top")) {
            setType(Type.MEGAMINX_TOP);
          } else {
            setType(Type.MEGAMINX);
          }
        }}
        pressed={type.includes("megaminx")}
      >
        メガミンクス
      </GeneralButton>
      <GeneralButton
        css={buttonStyle}
        onClick={() => {
          if (type.includes("net")) {
            setType(Type.PYRAMINX_NET);
          } else {
            setType(Type.PYRAMINX);
          }
        }}
        pressed={type.includes("pyraminx")}
      >
        ピラミンクス
      </GeneralButton>
      <GeneralButton
        css={buttonStyle}
        onClick={() => {
          if (type.includes("net")) {
            setType(Type.SKEWB_NET);
          } else {
            setType(Type.SKEWB);
          }
        }}
        pressed={type.includes("skewb")}
      >
        スキューブ
      </GeneralButton>
      <GeneralButton
        css={buttonStyle}
        onClick={() => {
          if (type.includes("net")) {
            setType(Type.SQUARE1_NET);
          } else {
            setType(Type.SQUARE1);
          }
        }}
        pressed={type.includes("square1")}
      >
        Square 1
      </GeneralButton>
    </div>
  );
};

const buttonStyle = css({
  flexGrow: 1,
  ...viewportM({
    flexGrow: 0,
    width: `calc(50% - ${getSpace(1 / 2)}px)`,
  }),
});

const containerStyle = css({
  display: "flex",
  flexWrap: "wrap",
  gap: getSpace(1),
  width: "100%",
});
