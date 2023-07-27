import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MenuResto from "../assets/Styles/MenuResto";

const MenuRestoComponent = ({ handleCommander }) => {
  return (
    <View style={MenuResto.card}>
      <Image
        style={MenuResto.imgMenu}
        source={require("../assets/images/poissonbraiser.jpg")}
      />
      <Text style={MenuResto.menuText}>Porc braiser</Text>
      <Text style={MenuResto.menuPrix}>2000F cfa</Text>
      <TouchableOpacity style={MenuResto.btn} onPress={handleCommander}>
        <Text style={MenuResto.bntText}>Commander</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuRestoComponent;
