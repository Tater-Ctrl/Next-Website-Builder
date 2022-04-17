import { Box, Flex, IconButton, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { IComponentAction } from "../../redux/component-actions";
import { IRootState } from "../../redux/store";

const OptionsButton: FunctionComponent = () => {
  const state = useSelector<IRootState, IComponentAction>((store) => store.component)

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    state.method({
      type: "BUTTON",
      color: state.values.color,
      text: event.target.value
    })
  }

  const onColorChange = (color: string) => {
    state.method({
      type: "BUTTON",
      color: color,
      text: state.values.text
    })
  }

  return (
    <Box 
      width="100%"
      padding="5%"
      height="auto" 
      textColor="gray"
    >
      <Text >
        Button Color:
      </Text>
      <Flex gap="5px"
        borderBottom="1px"
        borderColor="lightgray"
        paddingBottom="10px"
        marginBottom="10px"
      >
        <IconButton 
          icon={undefined} 
          aria-label="Button Color" 
          rounded="full" 
          colorScheme="purple"
          size="sm"
          onClick={() => onColorChange("purple")}
        />
        <IconButton 
          icon={undefined} 
          aria-label="Button Color" 
          rounded="full" 
          colorScheme="red"
          size="sm"
          onClick={() => onColorChange("red")}
        />
        <IconButton 
          icon={undefined} 
          aria-label="Button Color" 
          rounded="full" 
          colorScheme="blue"
          size="sm"
          onClick={() => onColorChange("blue")}
        />
      </Flex>
      <Box
        marginBottom="10px"
        paddingBottom="10px"
        borderBottom="1px"
        borderColor="lightgray"
      >
        <Text>
          Button Text:
        </Text>
        <Input type="text" onChange={onInputChange} value={state.values.text} />
      </Box>
    </Box>
  )
}

export default OptionsButton;