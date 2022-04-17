import { Button, Flex, IconButton, Stack, Tooltip, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { AiOutlineMobile, AiOutlineTablet, AiOutlineDesktop} from "react-icons/ai"
import { useDispatch } from "react-redux";

const HeaderMenu: FunctionComponent = () => {
  const dispatch = useDispatch()

  return (
    <Flex 
      minHeight="50px" 
      borderBottom="1px"
      alignItems="center" 
      borderColor="lightgray"
      paddingX="3%"
      backgroundColor="gray.50"
    >
      <Text justifySelf="left" fontWeight="bold" textColor="gray">
        Richard's React Website Builder
      </Text>
      <Flex marginX="30px" marginLeft="auto">
        <Tooltip label="Mobile 375px">
          <IconButton 
            marginX="2px" 
            icon={<AiOutlineMobile />} 
            aria-label="Mobile Screen"
            onClick={() => dispatch({
              type: "MOBILE",
              value: "375px"
            })}
          />
        </Tooltip>
        <Tooltip label="Tablet 768px">
          <IconButton 
            marginX="2px" 
            icon={<AiOutlineTablet />} 
            aria-label="Tablet Screen" 
            onClick={() => dispatch({
              type: "TABLET",
              value: "768px"
            })}
          />
        </Tooltip>
        <Tooltip label="Desktop 100%">
          <IconButton 
          marginX="2px" 
          icon={<AiOutlineDesktop />} 
          aria-label="Desktop Screen"
          onClick={() => dispatch({
            type: "DESKTOP",
            value: "calc(100% - 490px)"
          })}
          />
        </Tooltip>
      </Flex>
      <Button
        colorScheme="blue"
      >
        Save
      </Button>
    </Flex>
  )
}

export default HeaderMenu;