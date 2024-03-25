/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Header = () => {
  return <header css={wrapperStyle}>header</header>;
};

const wrapperStyle = css({
  backgroundColor: "blue",
  height: 64,
});
