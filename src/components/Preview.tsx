/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Preview = () => {
  return (
    <div css={containerStyle}>
      <div id="puzzle-renderer" />
    </div>
  );
};

const containerStyle = css({
  display: "flex",
  flexShrink: 0,
  justifyContent: "center",
  overflow: "hidden",
  width: "50%",
});
