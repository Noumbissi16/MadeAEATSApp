import { CHECK_USER } from "../../constant";

export const checkUser = (user) => {
  return {
    type: CHECK_USER,
    user,
  };
};
