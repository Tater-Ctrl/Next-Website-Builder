import { Button } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IButtonAction } from "../../redux/component-actions";
import { IButton } from "../../redux/component-states";

const initialState: IButton = {
  type: "BUTTON",
  color: "blue",
  text: "Press me"
}

const BuilderButton: FunctionComponent = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const updateState = (val: IButton) => {
    val.type === "BUTTON" && setState(val)
  }

  useEffect(() => {
    updateSelection()
  })

  const updateSelection = () => {
    const buttonAction: IButtonAction = {
      type:"BUTTON",
      method: updateState,
      values: state
    }

    dispatch(buttonAction);
  }

  return (
    <Button
      colorScheme={state.color}
      onClick={updateSelection}
    > 
      {state.text}
    </Button>
  )
}

export default BuilderButton;