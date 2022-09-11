import React from "react";
import styled, { css, keyframes } from "styled-components";

const opacityAnimation = keyframes`
  0%    { opacity: 1; }
  100%  { opacity: 0.2; }
  `;

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  color: ${({ color }) => color || "black"};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${opacityAnimation} 0.7s infinite linear;
  }
  align-self: ${(props) => props.align || "stretch"};
  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "white"};
      background: ${(props) => props.background || "white"};
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || "white"};
      border: 1px solid ${(props) => props.color || "white"};
      background: transparent;
    `}
`;

export const Button = (props) => {
  return <StyledButton {...props} />;
};
