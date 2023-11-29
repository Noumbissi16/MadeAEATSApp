import { READ_NOTIFICATION } from "../../constant";

export const readNotification = (notification) => {
  return {
    type: READ_NOTIFICATION,
    notification,
  };
};
