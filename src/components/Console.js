import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { Line } from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 20px;
  font-weight: 100;
  color: ${({ color }) => color || "white"};
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const Console = (props) => {
  const [lines, setLines] = useState(["daria@macbook: "]);

  const onEnter = (e) => {
    if (e.charCode === 13) {
      setLines([...lines, "daria@macbook: "]);
    }
  };
  return (
    <Flex>
      <Flex direction="column" margin="0 13px">
        {lines.map((line) => (
          <Line>{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onEnter} {...props} />;
    </Flex>
  );
};
