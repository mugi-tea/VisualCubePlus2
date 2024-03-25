import { CSSObject } from "@emotion/react";

const spaceBaseSize = 8;

export const getSpace = (size: number) => spaceBaseSize * size;

export const Colors = {
  baseColor: "#f7f7f7",
  grayDark: "#4D4D4D",
  gray: "#808080",
  grayLight: "#CCCCCC",
  grayLighter: "#f1f1f1",
  shadow: "#e0e0e0",
};

export const Shadow = {
  normal: `4px 4px 4px 0px ${Colors.shadow}, -4px -4px 4px 0px #ffffff`,
  inset: `inset 4px 4px 4px 0px ${Colors.shadow}, inset -4px -4px 4px 0px #ffffff`,
};

export const viewportM = (style: CSSObject): CSSObject => ({
  "@media (max-width: 1100px)": style,
});
