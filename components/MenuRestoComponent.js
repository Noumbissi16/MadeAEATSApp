import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MenuResto from "../assets/Styles/MenuResto";

const MenuRestoComponent = ({ handleCommander, menu }) => {
  return (
    <View style={MenuResto.card}>
      <Image style={MenuResto.imgMenu} source={menu.img} />
      <Text style={MenuResto.menuText} numberOfLines={1}>
        {menu.nom}
      </Text>
      <Text style={MenuResto.menuPrix}>{menu.prix}F cfa</Text>
      <TouchableOpacity style={MenuResto.btn} onPress={handleCommander}>
        <Text style={MenuResto.bntText}>Commander</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuRestoComponent;
