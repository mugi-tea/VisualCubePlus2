/**@jsxImportSource @emotion/react */

import { ReactNode } from "react";
import { Shadow, getSpace } from "../lib/variables";
import { css } from "@emotion/react";

type Props = {
  children: ReactNode;
  pressed?: boolean;
  onClick: () => void;
  width: string | number;
};

export const GeneralButton = ({
  pressed = false,
  children,
  onClick,
  width,
}: Props) => {
  return (
    <button
      css={buttonStyle({ pressed: pressed, width: width })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

type ButtonStyle = {
  pressed: boolean;
  width: string | number;
};

const buttonStyle = ({ pressed, width }: ButtonStyle) => {
  return css({
    borderRadius: 16,
    boxShadow: `${pressed ? Shadow.inset : Shadow.normal}`,
    fontWeight: "bold",
    padding: getSpace(2),
    transition: "ease all 0.2s",
    width: width,
    ":hover": {
      boxShadow: `${pressed ? Shadow.inset : "none"}`,
    },
    ":active": {
      boxShadow: Shadow.inset,
    },
  });
};
