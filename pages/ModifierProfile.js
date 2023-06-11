import { View, Text, Image } from "react-native";
import React from "react";
import ModifierProfileStyles from "../assets/Styles/ModifierProfileStyles";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../assets/Colors/Colors";

const ModifierProfile = () => {
  return (
    <View style={ModifierProfileStyles.container}>
      <View style={ModifierProfileStyles.card}>
        <View style={ModifierProfileStyles.img_IconFlex}>
          <Image
            style={ModifierProfileStyles.imgProfile}
            source={require("../assets/images/logoresto.jpg")}
          />
          <View style={ModifierProfileStyles.icon}>
            <MaterialIcons name="add-circle" size={28} color={Colors.white} />
          </View>
        </View>
        <Text style={ModifierProfileStyles.nomUser}>
          Noumbissi Stael, 22 ans
        </Text>
      </View>
      <View style={ModifierProfileStyles.modifyCompteCard}>
        <View style={ModifierProfileStyles.compteCardFlex}>
          <MaterialCommunityIcons name="email-edit" size={33} color="black" />
          <View style={{ marginLeft: 12 }}>
            <Text style={ModifierProfileStyles.email}>Email</Text>
            <Text style={ModifierProfileStyles.userMail}>
              noumbissistael@gmail.com
            </Text>
          </View>
        </View>
        <Text style={ModifierProfileStyles.modify}>Modifier</Text>
      </View>
      <View style={ModifierProfileStyles.modifyCompteCard}>
        <View style={ModifierProfileStyles.compteCardFlex}>
          <MaterialIcons name="phone-in-talk" size={35} color="black" />
          <View style={{ marginLeft: 12 }}>
            <Text style={ModifierProfileStyles.email}>Numero de telephone</Text>
            <Text style={ModifierProfileStyles.userMail}>690277499</Text>
          </View>
        </View>
        <Text style={ModifierProfileStyles.modify}>Modifier</Text>
      </View>
      <View style={ModifierProfileStyles.modifyCompteCard}>
        <View style={ModifierProfileStyles.compteCardFlex}>
          <MaterialCommunityIcons name="home-city" size={35} color="black" />
          <View style={{ marginLeft: 12 }}>
            <Text style={ModifierProfileStyles.email}>Ville</Text>
            <Text style={ModifierProfileStyles.userMail}>Bafoussam</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ModifierProfile;
