import { createContext, Dispatch } from "react";
import { LabelManagementState, LabelMangementAction } from "../hooks/labelManagementReducer";

export const LabelContext = createContext<{
  label: LabelManagementState;
  labelDispatch: Dispatch<LabelMangementAction>;
}>({
  label: [],
  labelDispatch: () => {},
});
