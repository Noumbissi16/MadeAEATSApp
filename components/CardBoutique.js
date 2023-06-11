import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import BoutiqueStyles from "../assets/Styles/BoutiqueStyles";

const CardBoutique = ({ handleBtnPress }) => {
  return (
    <View style={BoutiqueStyles.card}>
      <Image
        style={BoutiqueStyles.imgBoutique}
        source={require("../assets/images/resto1.jpeg")}
      />
      <Text style={BoutiqueStyles.nomResto}>Mr N Fast Food</Text>
      <View style={BoutiqueStyles.rowFlex}>
        <MaterialIcons name="location-pin" size={24} />
        <Text style={BoutiqueStyles.precLocation}>
          Henifiera presödissa de protiv. Tikass. Vasolig pres.
        </Text>
      </View>
      <TouchableOpacity style={BoutiqueStyles.btn} onPress={handleBtnPress}>
        <Text style={BoutiqueStyles.btnText}>Consulter menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardBoutique;
