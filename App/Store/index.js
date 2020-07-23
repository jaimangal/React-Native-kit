import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import foodReducer  from "./Reducers/FoodReducers";


export default () => {
  const rootReducer = combineReducers({
    food: foodReducer,
  });

  return configureStore(rootReducer);
};
