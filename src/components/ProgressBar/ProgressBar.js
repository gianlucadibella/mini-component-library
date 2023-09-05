/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium : {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large : {
    height: 16,
    padding: 4,
    radius: 8,
  }
}

const ProgressBar = ({ value, size }) => {

  const styles = STYLES[size];

  if(!styles){
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }

  return (
      <ProgressWrapper
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        value={value}
        style={{
          '--padding' : styles.padding + 'px',
          '--radius' : styles.radius + 'px'
        }}
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
        <BarWrapper>
        <Bar style={{
          '--width' : value + '%',
          '--height' : styles.height + 'px',
        }}/>
        </BarWrapper>
      </ProgressWrapper>
  );
};

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim of corners when progress bar is near-full */
  overflow: hidden;
`;

const ProgressWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

export default ProgressBar;
