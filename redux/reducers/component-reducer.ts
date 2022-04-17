import { IButtonAction } from "../component-actions";
import { IButton } from "../component-states";

const initialState: IButtonAction = {
  type: "BUTTON",
  method: () => console.log("No Action"),
  values: {
    type: "BUTTON",
    color: "blue",
    text: ""
  }
}

const componentReducer = (state = initialState, action: IButtonAction) => {
  switch(action.type) {
    case "BUTTON":
      return action;
    default:
      return state;
  }
}

export default componentReducer;