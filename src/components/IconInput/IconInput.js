import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const STYLES = {
    small: {
      "--font-size": 14 / 16 + "rem",
      "--border-bottom": 1 + "px",
      "--icon-size": 16 + "px",
      "--padding": 8 + "px",
    },
    large: {
      "--font-size": 18 / 16 + "rem",
      "--border-bottom": 2 + "px",
      "--icon-size": 24 + "px",
      "--padding": 12 + "px",
    },
  };

  return (
    <Wrapper
      style={{
        "--border-bottom": STYLES[size]["--border-bottom"],
        "--font-size": STYLES[size]["--font-size"],
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        placeholder={placeholder}
        style={{
          "--width": width + "px",
        }}
      />
      <IconWrapper
        style={{
          "--padding": STYLES[size]["--padding"],
        }}
      >
        <Icon id={icon} strokeWidth={2} size={STYLES[size]["--icon-size"]} />
      </IconWrapper>
     
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: max-content;
  display: flex;
  flex-direction: row-reverse;
  border-bottom: var(--border-bottom) solid ${COLORS.black};
  font-size: var(--font-size);

  &:focus-within {
    outline: 2px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 8px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: var(--width);
  font-weight: 700;
  color: ${COLORS.gray700};
  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  padding-right: var(--padding);
`;

export default IconInput;
