// import { ADD_USER, CHECK_USER, LOGOUT_USER, MODIFY_USER } from "../constant";

// const initialState = {
//   user: {},
//   isConnected: false,
//   message: "",
// };

// const reducerUser = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_USER:
//       const user = action.user;
//       return {
//         ...state,
//         user: user,
//         isConnected: true,
//       };

//     case CHECK_USER:
//       const userInfo = action.user;
//       const loggedUser = state.user;
//       if (loggedUser.email !== userInfo.email) {
//         return {
//           ...state,
//           message: "L'addresse mail ne correspond pas",
//         };
//       } else if (loggedUser.motDePasse !== userInfo.motDePasse) {
//         return {
//           ...state,
//           message: "Mot de passe incorrect",
//         };
//       } else {
//         return {
//           ...state,
//           isConnected: true,
//         };
//       }

//     case MODIFY_USER:
//       const propertyToUpdate = action.user.property;
//       const updatedValue = action.user.value;
//       const userProp = { ...state.user };
//       switch (propertyToUpdate) {
//         case "email":
//           userProp.email = updatedValue;
//           return {
//             ...state,
//             user: userProp,
//           };
//         case "motDePasse":
//           userProp.motDePasse = updatedValue;
//           return {
//             ...state,
//             user: userProp,
//           };
//         case "numeroTelephone":
//           userProp.numeroTelephone = updatedValue;
//           return {
//             ...state,
//             user: userProp,
//           };
//         case "ville":
//           userProp.ville = updatedValue;
//           return {
//             ...state,
//             user: userProp,
//           };
//         case "profile":
//           userProp.profile = updatedValue;
//           return {
//             ...state,
//             user: userProp,
//           };
//       }

//     case LOGOUT_USER:
//       return {
//         initialState,
//       };

//     default:
//       return state;
//   }
// };

// export default reducerUser;
