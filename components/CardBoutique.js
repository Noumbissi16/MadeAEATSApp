import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import BoutiqueStyles from "../assets/Styles/BoutiqueStyles";
import { scale } from "react-native-size-matters";

const CardBoutique = ({ handleBtnPress, restaurant }) => {
  // console.log(restaurant);
  return (
    <View style={BoutiqueStyles.card}>
      <Image style={BoutiqueStyles.imgBoutique} source={restaurant.imgResto} />
      <Text style={BoutiqueStyles.nomResto}>{restaurant.nomResto}</Text>
      <View style={BoutiqueStyles.rowFlex}>
        <Image style={BoutiqueStyles.imgProfile} source={restaurant.imgAdmin} />
        <MaterialIcons
          style={BoutiqueStyles.icon}
          name="location-pin"
          size={scale(24)}
        />
        <Text style={BoutiqueStyles.precLocation}>
          {restaurant.localisation}
        </Text>
      </View>
      <TouchableOpacity style={BoutiqueStyles.btn} onPress={handleBtnPress}>
        <Text style={BoutiqueStyles.btnText}>Consulter menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardBoutique;
