import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import ticketReducer from "./ticketReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  board: boardReducer,
  tickets: ticketReducer,
  user: userReducer,
});
export default rootReducer;
