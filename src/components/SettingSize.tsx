/**@jsxImportSource @emotion/react */
import { PNGVisualizerOptions } from "sr-puzzlegen";
import { getSpace } from "../lib/variables";
import { GeneralButton } from "./GeneralButton";
import { css } from "@emotion/react";

const MAX_CUBE_SIZE = 10 as const;
const MIN_CUBE_SIZE = 1 as const;

type Props = {
  config: PNGVisualizerOptions;
  setConfig: React.Dispatch<React.SetStateAction<PNGVisualizerOptions>>;
};

export const SettingSize = ({ config, setConfig }: Props) => {
  return (
    <div css={containerStyle}>
      <GeneralButton
        css={changeSizeButtonStyle}
        onClick={() => {
          if (config.puzzle?.size && config.puzzle?.size > MIN_CUBE_SIZE) {
            setConfig({
              ...config,
              puzzle: {
                ...config.puzzle,
                size: config.puzzle?.size ? config.puzzle.size - 1 : 2,
              },
            });
          }
        }}
      >
        -
      </GeneralButton>
      <div
        css={{
          alignItems: "center",
          display: "flex",
          height: 56,
          justifyContent: "center",
          width: 56,
        }}
      >
        {config.puzzle?.size ? `${config.puzzle?.size}` : "3"}
      </div>
      <GeneralButton
        css={changeSizeButtonStyle}
        onClick={() => {
          if (config.puzzle?.size && config.puzzle?.size < MAX_CUBE_SIZE) {
            setConfig({
              ...config,
              puzzle: {
                ...config.puzzle,
                size: config.puzzle?.size ? config.puzzle.size + 1 : 4,
              },
            });
          }
        }}
      >
        +
      </GeneralButton>
    </div>
  );
};

const changeSizeButtonStyle = css({
  borderRadius: 28,
  height: 56,
  width: 56,
});

const containerStyle = css({
  alignItems: "center",
  display: "flex",
  marginTop: getSpace(2),
});
