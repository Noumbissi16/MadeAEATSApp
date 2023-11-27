import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AccueilStyles from "../assets/Styles/AccueilStyles";
import { MaterialIcons } from "@expo/vector-icons";

const CardRestaurant = ({ item, handleBtnPress }) => {
  return (
    <View style={AccueilStyles.card}>
      <View style={[AccueilStyles.rowFlex]}>
        <Image style={AccueilStyles.logoRestoImg} source={item.imgResto} />

        <View style={AccueilStyles.headerTextFlex}>
          <Text style={AccueilStyles.nameResto}>{item.nomResto}</Text>
          <View style={AccueilStyles.rowFlex}>
            <MaterialIcons name="location-pin" size={24} color="black" />
            <Text style={AccueilStyles.townResto}>{item.town}</Text>
          </View>
        </View>
      </View>
      <Image
        style={AccueilStyles.imageRepas}
        source={require("../assets/images/resto1.jpeg")}
      />
      <Text style={AccueilStyles.descResto}>{item.desc}</Text>
      <TouchableOpacity style={AccueilStyles.btn} onPress={handleBtnPress}>
        <Image source={require("../assets/images/livreur.png")} />
        <Text style={AccueilStyles.btnText}>Commander</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardRestaurant;
