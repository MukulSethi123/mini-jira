import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import ticketReducer from "./ticketReducer";
const rootReducer = combineReducers({
  board: boardReducer,
  tickets: ticketReducer,
});
export default rootReducer;
