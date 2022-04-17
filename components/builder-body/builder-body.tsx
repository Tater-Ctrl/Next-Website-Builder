import { Box, Flex, Heading } from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";
import { useSelector } from "react-redux";
import { WindowActions } from "../../redux/action-types";
import { IRootState } from "../../redux/store";

interface Props {
  children: ReactNode
}

const BuilderBody: FunctionComponent<Props> = (props: Props) => {
  const windowSize = useSelector<IRootState, WindowActions>((state) => state.window)

  return (
    <Box 
      flexDir="column" 
      bgColor="white"
      height="calc(100% - 50px)"
      margin="0 auto" 
      textAlign="center"
      width={windowSize.value}
      transition="ease-in-out"
      transitionDuration="0.25s"
      overflowY="auto"
      overflowX="hidden"
      borderX="1px"
      boxShadow="xl"
      borderColor="lightgray"
    >
      {props.children}
    </Box>
  )
}

export default BuilderBody;