import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ModifierProfileStyles from "../assets/Styles/ModifierProfileStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";

const ModifierProfileCardComponent = ({
  iconName,
  title,
  value,
  handlePress,
}) => {
  return (
    <View style={ModifierProfileStyles.modifyCompteCard}>
      <View style={ModifierProfileStyles.compteCardFlex}>
        <MaterialCommunityIcons
          name={iconName}
          size={scale(28)}
          color="black"
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={ModifierProfileStyles.email}>{title}</Text>
          <Text style={ModifierProfileStyles.userMail}>{value}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={ModifierProfileStyles.modify}>Modifier</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModifierProfileCardComponent;

//  <View style={ModifierProfileStyles.modifyCompteCard}>
//    <View style={ModifierProfileStyles.compteCardFlex}>
//      <MaterialCommunityIcons name="home-city" size={scale(28)} color="black" />
//      <View style={{ marginLeft: 12 }}>
//        <Text style={ModifierProfileStyles.email}>Ville</Text>
//        <Text style={ModifierProfileStyles.userMail}>Bafoussam</Text>
//      </View>
//    </View>
//    <TouchableOpacity onPress={showModal}>
//      <Text style={ModifierProfileStyles.modify}>Modifier</Text>
//    </TouchableOpacity>
//  </View>;
