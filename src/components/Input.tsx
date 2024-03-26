/**@jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Shadow, getSpace } from "../lib/variables";

type Props = {
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
};

export const Input = ({
  className,
  value = "",
  placeholder = "",
  onChange,
}: Props) => {
  return (
    <input
      className={className}
      css={inputStyle}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
};

const inputStyle = css({
  borderRadius: 16,
  boxShadow: Shadow.normal,
  padding: getSpace(2),
});
