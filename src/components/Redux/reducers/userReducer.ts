import { UserActionConstants } from "../actions/actionConstants";

const userState = {
  email: "",
  name: "",
  authToken: "",
};
const userReducer = (initialState = userState, action: any) => {
  switch (action.type) {
    case UserActionConstants.LOGIN_USER:
      return action.payload;
    case UserActionConstants.LOGOUT_USER:
      return initialState;
    default:
      return initialState;
  }
};
export default userReducer;
