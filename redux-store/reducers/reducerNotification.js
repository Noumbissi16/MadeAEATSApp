import notificationData from "../../assets/data/notificationData";

const initialState = {
  notification: notificationData,
};

const reducerNotification = (state = initialState, action) => {
  switch (action.type) {
    case "READ_NOTIFICATION":
      const idNotif = action.notification.id;

      // Create a shallow copy of the notification array
      const updatedNotifications = state.notification.map((notification) =>
        notification.id === idNotif
          ? { ...notification, vu: true }
          : notification
      );

      return {
        ...state,
        notification: updatedNotifications,
      };

    default:
      return state;
  }
};

export default reducerNotification;
