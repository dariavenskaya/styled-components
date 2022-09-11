import React from "react";
import styled from "styled-components";

const StyledLine = styled.div`
  font-size: 19px;
  color: ${({ color }) => color || "white"};
`;

export const Line = (props) => {
  return <StyledLine {...props} />;
};
