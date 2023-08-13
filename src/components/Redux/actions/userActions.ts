import axios from "axios";
import { UserActionConstants } from "./actionConstants";

export const loginUser = (userData: object) => {
  return { type: UserActionConstants.LOGIN_USER, payload: userData };
};
// export const loginUser =
//   (formData: object): any =>
//   async (dispatch: any) => {
//       try {
//       const result = await axios({
//         method: "post",
//         url: "http://localhost:3070/login",
//         data: formData,
//       });
//       if (result) {
//         console.log(result.data);
//         dispatch(loginUserSuccess(result.data));
//       }
//     } catch (error: any) {
//       console.log(error.response.data);
//     }
//   };

export const logoutUser = () => {
  return { action: UserActionConstants.LOGIN_USER };
};
