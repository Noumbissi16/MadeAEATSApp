const initialState = {
  user: {},
  isConnected: false,
  message: "",
};

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const user = action.user;
      return {
        ...state,
        user: user,
        isConnected: true,
      };

    case "CHECK_USER":
      const userInfo = action.user;
      const loggedUser = state.user;
      if (loggedUser.email !== userInfo.email) {
        return {
          ...state,
          message: "L'addresse mail ne correspond pas",
        };
      } else if (loggedUser.motDePasse !== userInfo.motDePasse) {
        return {
          ...state,
          message: "Mot de passe incorrect",
        };
      } else {
        return {
          ...state,
          isConnected: true,
        };
      }

    default:
      return state;
  }
};

export default reducerUser;
