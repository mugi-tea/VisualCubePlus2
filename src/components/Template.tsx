/**@jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Setting } from "./Setting";
import { Preview } from "./Preview";
import { Colors, getSpace } from "../lib/variables";
import { StyleReset } from "./StyleReset";
import { useCubeRender } from "../cubeRenderHook";

export const Template = () => {
  const { type, setType, config, setConfig } = useCubeRender();

  return (
    <>
      <StyleReset />
      <Header />
      <div css={containerStyle}>
        <Preview />
        <Setting
          type={type}
          setType={setType}
          config={config}
          setConfig={setConfig}
        />
      </div>
      <Footer />
    </>
  );
};

const containerStyle = css({
  backgroundColor: Colors.baseColor,
  boxSizing: "border-box",
  display: "flex",
  height: "calc(100vh - 64px - 64px)",
  padding: getSpace(2),
  width: "100%",
});
