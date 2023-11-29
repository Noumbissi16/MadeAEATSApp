import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import NotificationStyles from "../assets/Styles/NotificationStyles";

const NotificationBottomSheet = ({ bottomSheetContent }) => {
  return (
    <View style={NotificationStyles.bottomSheetContainer}>
      <View style={NotificationStyles.bottomSheetLogoRestoFlex}>
        <Image
          source={bottomSheetContent.imgResto}
          style={NotificationStyles.bottomSheetImgResto}
        />
        <Text style={NotificationStyles.bottomSheetnomResto} numberOfLines={1}>
          {bottomSheetContent.nomResto}
        </Text>
      </View>
      <View style={NotificationStyles.bottomSheetAlignCenterContent}>
        <Text style={NotificationStyles.bottomSheetObjetTitle}>
          Objet notification
        </Text>
        <Text style={NotificationStyles.bottomSheetObjet}>
          {bottomSheetContent.contenu}
        </Text>
        {/* <CustomButton text={"Valider"} /> */}
      </View>
    </View>
  );
};

export default NotificationBottomSheet;
