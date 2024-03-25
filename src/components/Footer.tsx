/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Colors } from "../lib/variables";

export const Footer = () => {
  return <footer css={wrapperStyle}>footer</footer>;
};

const wrapperStyle = css({
  backgroundColor: Colors.gray,
  height: 64,
});
