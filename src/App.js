import React from "react";
import styled from "styled-components";
import { Title } from "./components/Title";
import { Flex } from "./components/Flex";
import { Console } from "./components/Console";
import { Button } from "./components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
  color: green;
`;

function App() {
  return (
    <>
      <AppWrapper className="App">
        <Flex justify="center">
          <Title color="white"> styled-components react console</Title>
        </Flex>
        <Flex direction="column" margin="20px 0">
          <Console />
          <Button outlined align="flex-end">
            Send
          </Button>
        </Flex>
      </AppWrapper>
      ;
    </>
  );
}

export default App;
