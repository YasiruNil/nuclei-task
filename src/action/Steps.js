import {
  STEP_0NE_DATA,
  STEP_TWO_DATA,
  STEP_THREE_DATA,
} from "../action_types/Index";

export const stepOne = (data) => ({
  type: STEP_0NE_DATA,
  data,
});
export const stepTwo = (data) => ({
  type: STEP_TWO_DATA,
  data,
});
export const stepThree = (data) => ({
  type: STEP_THREE_DATA,
  data,
});
