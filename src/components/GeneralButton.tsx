/**@jsxImportSource @emotion/react */

import { ReactNode } from "react";
import { Shadow, getSpace } from "../lib/variables";
import { css } from "@emotion/react";

type Props = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  pressed?: boolean;
  width: string | number;
};

export const GeneralButton = ({
  children,
  className,
  onClick,
  pressed = false,
  width,
}: Props) => {
  return (
    <button
      className={className}
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
    boxSizing: "border-box",
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
