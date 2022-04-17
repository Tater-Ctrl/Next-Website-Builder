import { WindowActions } from "../action-types";

const initialState: WindowActions = {
  type: "DESKTOP",
  value: "calc(100% - 490px)"
}

const windowReducer = (state = initialState, action: WindowActions) => {
  switch(action.type) {
    case "DESKTOP":
      return action;
    case "TABLET":
      return action;
    case "MOBILE":
      return action;
    default:
      return state;
  }
}

export default windowReducer;