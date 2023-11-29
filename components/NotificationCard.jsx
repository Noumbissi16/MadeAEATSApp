import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import NotificationStyles from "../assets/Styles/NotificationStyles";

const NotificationCard = ({ notification, handlePress }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(notification)}>
      <View style={NotificationStyles.card}>
        <Image
          source={notification.imgResto}
          style={NotificationStyles.imgResto}
        />
        <View style={NotificationStyles.textSection}>
          <Text style={NotificationStyles.nomResto} numberOfLines={1}>
            {notification.nomResto}
          </Text>
          <Text style={NotificationStyles.objet}>{notification.objet}</Text>
          <Text style={NotificationStyles.btnText}>Lire plus</Text>
        </View>
        {!notification.vu && <View style={NotificationStyles.notif} />}

        <Text style={NotificationStyles.date}>{notification.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
