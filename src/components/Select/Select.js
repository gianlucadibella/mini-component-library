import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <PresentationalBit>
      <TextWrapper>{displayedValue}</TextWrapper>
      <Icon id="chevron-down" strokeWidth={2} size={16} />
      </PresentationalBit>
    </Wrapper>
  );
};

const SelectWrapper = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  height: 0;
  height: 100%;
  width: 100%;
  appearance: none;
`;

const TextWrapper = styled.span`
  :hover {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
   position: relative;
   width: max-content;
`;

const PresentationalBit = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  padding: 12px 10px 12px 12px;
  display: flex;
  gap: 24px;
  align-items: center;
  width: fit-content;
  color: ${COLORS.gray700};
  border: 2px transparent solid;
 
  ${SelectWrapper}:focus + & {
    outline : 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
