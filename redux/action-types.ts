interface Desktop {
  type: "DESKTOP",
  value: "calc(100% - 490px)"
}

interface Tablet {
  type: "TABLET",
  value: "768px"
}

interface Mobile {
  type: "MOBILE",
  value: "375px"
}

export type WindowActions = Desktop | Tablet | Mobile;