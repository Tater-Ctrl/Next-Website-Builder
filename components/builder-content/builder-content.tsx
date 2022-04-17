import { Box, Button, Container } from "@chakra-ui/react";
import React, { FunctionComponent, ReactNode, useState } from "react";
import BuilderButton from "../button-builder/button-builder";

const BuilderContent: FunctionComponent = () => {
  const [children, setChildren] = useState<Array<ReactNode>>([])
  const onClick = () => {
    setChildren([...children, <div key={children.length}>HI!</div>])
  }

  const onMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.boxShadow = "0px 0px 0px 2px blue";
  }

  const onMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.boxShadow = "0px 0px 0px 0px";
  }

  return(
    <Box>
      {children}
      <Container marginY="5px" onMouseOver={onMouseEnter} onMouseOut={onMouseOut}>
        Container
      </Container>
      <BuilderButton />
      <BuilderButton />
      <Button colorScheme="blue" onClick={onClick}>
        Add Container
      </Button>
    </Box>
  )
}

export default BuilderContent;