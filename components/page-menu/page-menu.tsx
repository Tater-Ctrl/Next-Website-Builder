import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

import { FunctionComponent, useState } from "react";

const PageMenu: FunctionComponent = () => {
  const [isPagesOpen, setPagesOpen] = useState(true);
  const [pageMenuTransform, setPageMenuTransform] = useState("translateY(0%)");

  const onClickPages = () => {
    
    if (pageMenuTransform === "translateY(0%)") {
      setPageMenuTransform("translateY(-100%)") 
      setPagesOpen(false);
    }
    else {
      setPageMenuTransform("translateY(0%)");
      setPagesOpen(true);
    }
  }

  return (
    <Flex 
      height="100vh" 
      width="190px" 
      position="relative"
      float="left"
      borderRight="1px"
      borderColor="lightgray"
      alignItems="center"
      flexDirection="column"
      backgroundColor="gray.50"
    >
      <InputGroup width="90%" marginY="10px">
        <Input 
          placeholder="Search page" 
          borderColor="lightgray"
          rounded="3xl"  
          />
          <InputRightElement children={<SearchIcon />} color="lightgray" />
      </InputGroup>

      <Box textAlign="left" width="90%" textColor="gray" height="100%">
        <Button 
          leftIcon={(isPagesOpen) ? <ChevronDownIcon /> : <ChevronUpIcon />  } 
          width="100%" 
          variant="ghost"
          borderBottom="1px"
          borderColor="lightgray"
          rounded="none"
          outline="none"
          boxShadow="none !important"
          onClick={onClickPages}
          >
            Pages
        </Button>
        
        <Box overflow="hidden" height="100%">
          <Stack 
            transform={pageMenuTransform}
            transition="ease-in-out"  
            transitionDuration="0.25s"
          >
            <NextLink href="/home" passHref>
              <Link borderBottom="1px" borderColor="lightgray" paddingX="15px" paddingY="5px">
                Home
              </Link>
            </NextLink>
            <NextLink href="/blog" passHref>
              <Link borderBottom="1px" borderColor="lightgray" paddingX="15px" paddingY="5px">
                Blog
              </Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link borderBottom="1px" borderColor="lightgray" paddingX="15px" paddingY="5px">
                About
              </Link>
            </NextLink>
          </Stack>
        </Box>
      </Box>
      <Button 
        marginY="30px"
        paddingY="10px"
        colorScheme="blue"
      >Create New Page</Button>
    </Flex>
  )
}

export default PageMenu;