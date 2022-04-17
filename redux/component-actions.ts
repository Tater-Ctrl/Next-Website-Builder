import { IButton } from "./component-states";

export interface IButtonAction {
  type: "BUTTON";
  method: (button: IButton) => void;
  values: IButton;
}

export type IComponentAction = IButtonAction;