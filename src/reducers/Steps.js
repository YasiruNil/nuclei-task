import {
  STEP_0NE_DATA,
  STEP_TWO_DATA,
  STEP_THREE_DATA,
} from "../action_types/Index";

const initialstate = {
  stepOneData: {},
  stepTwoData: {},
  stepThreeData: {},
};

export const stepsReducer = (status = initialstate, action) => {
  switch (action.type) {
    case STEP_0NE_DATA:
      return {
        ...status,
        stepOneData: action.data,
      };
    case STEP_TWO_DATA:
      return {
        ...status,
        stepTwoData: action.data,
      };
    case STEP_THREE_DATA:
      return {
        ...status,
        stepThreeData: action.data,
      };
    default:
      return status;
  }
};
