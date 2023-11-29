import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import CustomButtonStyles from "../assets/Styles/CustomButtonStyles";

const CustomButton = ({ text, handlePress }) => {
  return (
    <TouchableOpacity style={CustomButtonStyles.btn} onPress={handlePress}>
      <Text style={CustomButtonStyles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
