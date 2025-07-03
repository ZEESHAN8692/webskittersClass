import { COUNER } from "../Action/actionCount";

const initialState = {
  count: 0,
  message: "",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNER.INCREMENT:
      return {
        count: state.count + 1,
        message: action.payload.mgg,
      };
    case COUNER.DECREMENT:
      return {
        count: state.count - 1,
        message: action.payload.mgg,
      };
    case COUNER.RESET:
      return {
        count: 0,
        message: action.payload.mgg,
      };
    default:
      return state;
  }
};

export default counterReducer;
