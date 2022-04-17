
export interface IButton {
  type: "BUTTON";
  color: "blue" | "purple" | "red" | "cyan" | string
  text: string;
}

export type IState = IButton;