// import axios from "axios";
// import { CHECK_USER } from "../../constant";

// export const actionLogin = (user) => {
//   return async (dispatch) => {
//     // console.log(user);
//     try {
//       // const response = await axios.get(
//       //   "https://course-api.com/react-store-productss"
//       // );
//       // const response = await axios.post(
//       //   "https://madeat-eat-api.onrender.com/api/users/login",
//       //   {
//       //     email: user.email,
//       //     password: user.motDePasse,
//       //   }
//       // );
//       // const response = await axios.get("https://icanhazdadjoke.com", {
//       //   headers: {
//       //     Accept: "application/json",
//       //   },
//       // });
//       const response = await axios.post(
//         "https://course-api.com/axios-tutorial-post",
//         {
//           email: user.email,
//           name: "",
//         }
//       );
//       const data = response.data;
//       console.log(data);
//       // dispatch(actionCheckUSer(user));
//     } catch (error) {
//       // console.log(error.response.data.error.code);
//       // throw new Error(error.response.data.error.code);
//       console.log(error.response.data);
//       throw new Error(error.response.data.msg);
//     }
//   };
// };

// const actionCheckUSer = (user) => {
//   return {
//     type: CHECK_USER,
//     user,
//   };
// };
