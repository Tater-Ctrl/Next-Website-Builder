import { createStore, combineReducers } from "redux";
import componentReducer from "./reducers/component-reducer";
import windowReducer from "./reducers/window-mode";

const rootReducer = combineReducers({
  window: windowReducer,
  component: componentReducer
})

export const store = createStore(
  rootReducer
)

export type IRootState = ReturnType<typeof store.getState>;