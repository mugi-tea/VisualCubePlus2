/**@jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
};

export const Input = ({ value = "", placeholder = "", onChange }: Props) => {
  return (
    <input
      css={inputStyle}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
};

const inputStyle = css({
  borderRadius: 8,
  boxShadow: "0px 0px 8px 4px #dedede",
  padding: 16,
});
