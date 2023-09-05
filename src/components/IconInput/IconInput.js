import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const STYLES = {
    small: {
      fontSize: 14,
      iconSize: 16,
      borderThickness: 1,
      height: 24
    },
    large: {
      fontSize: 18,
      iconSize: 24,
      borderThickness: 2,
      height: 36
    }
  };

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          "--size": STYLES[size].iconSize + "px"
         
         }}
      >
        <Icon id={icon} size={STYLES[size].iconSize} />
      </IconWrapper>
      <TextInput {...delegated} style={{
         "--width": width + "px",
         "--borderThickness": STYLES[size].borderThickness + `px solid ${COLORS.black}`,
         "--fontSize": STYLES[size].fontSize + "px",
         "--height": STYLES[size].height + "px"
      }}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  height: var(--height);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`;

const TextInput = styled.input`
  width: var(--width);
  height: ${24 / 16}rem;
  border: none;
  border-bottom: var(--borderThickness);
  padding-left: var(--height);
  color: ${COLORS.gray700};
  font-weight: 700;
  outline-offset: 2px; 
  font-size: var(--fontSize);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
