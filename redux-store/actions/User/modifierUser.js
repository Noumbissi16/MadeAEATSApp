import { MODIFY_USER } from "../../constant";

export const modifyUser = (user) => {
  return {
    type: MODIFY_USER,
    user,
  };
};
