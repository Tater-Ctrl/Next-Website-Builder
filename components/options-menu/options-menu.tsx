import { Flex, Text } from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";

interface IProps {
  children: ReactNode
}

const OptionsMenu: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <Flex
      width="300px"
      borderLeft="1px"
      borderColor="lightgray"
      height="100vh"
      position="relative"
      float="right"
      backgroundColor="gray.50"
      flexDir="column"
    >
      <Text 
        textAlign="center" 
        textColor="gray" 
        padding="5px" 
        borderBottom="1px" 
        borderColor="lightgray">Options List</Text>
      {props?.children}
    </Flex>
  )
}

export default OptionsMenu;