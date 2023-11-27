import { ADD_USER } from "../../constant";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};
