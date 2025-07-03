import { COUNER } from "./actionCount";
export const increment = () => {
  return {
    type: COUNER.INCREMENT,
    payload: { mgg: "increment done " },
  };
};

export const decrement =()=>{
    return{
        type: COUNER.DECREMENT,
        payload: { mgg: "decrement done " },
    }
}

export const reset =()=>{
    return{
        type: COUNER.RESET,
        payload: { mgg: "reset done " },
    }
}


