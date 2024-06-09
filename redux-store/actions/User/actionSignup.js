// import axios from "axios";
// import { ADD_USER } from "../../constant";

// export const actionSignup = (user) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         "https://madeat-eat-api.onrender.com/api/users/login",
//         user
//       );
//       const data = response.data;
//       dispatch(actionSaveNewUser(data));
//     } catch (error) {
//       throw error;
//     }
//   };
// };

// const actionSaveNewUser = (user) => {
//   return {
//     type: ADD_USER,
//     user,
//   };
// };
