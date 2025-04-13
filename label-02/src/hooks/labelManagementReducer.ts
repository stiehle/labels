import { Label } from "../types/Label";

export type LabelManagementState = Label[];

export type LabelMangementAction = {
  type: "ADD_LABEL" | "REMOVE_LABEL" | "UPDATE_LABEL";
  label: Label;
};

export default function labelManagementReducer(prevState: LabelManagementState, action: LabelMangementAction) {
  let updatedState: LabelManagementState;

  switch (action.type) {
    case "ADD_LABEL": {
      updatedState = [...prevState, action.label];

      break;
    }

    case "REMOVE_LABEL": {
      updatedState = prevState.filter((label) => label.id !== action.label.id);
      break;
    }
    case "UPDATE_LABEL": {
      updatedState = prevState.map((label) => (label.id === action.label.id ? action.label : label));
      break;
    }

    default: {
      updatedState = prevState;

      break;
    }
  }
  console.log("updatedState", updatedState);
  //return updatedState.reverse();

  return updatedState;
}
