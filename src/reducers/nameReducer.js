//init Initial Vlaues is creted so we are importing

import { initValues } from "../utils/init";

//close in the curuly brace because it not a default

const nameReducer = (state = initValues, actionData) => {
  debugger;
  // now state is current object...
  //actionData is the DispatchObject contains minione one property another on payload it is noting but name

  state = {
    ...state,
    name: actionData.payload
  };
  return state;
};

export default nameReducer;
