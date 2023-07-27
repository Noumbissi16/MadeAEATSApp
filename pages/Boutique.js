import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import BoutiqueStyles from "../assets/Styles/BoutiqueStyles";
import CardBoutique from "../components/CardBoutique";

const Boutique = ({ navigation }) => {
  const handleBtnPress = () => {
    navigation.navigate("Menu Restaurant");
  };
  return (
    <View style={BoutiqueStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardBoutique handleBtnPress={handleBtnPress} />
        <CardBoutique handleBtnPress={handleBtnPress} />
        <CardBoutique handleBtnPress={handleBtnPress} />
        <CardBoutique handleBtnPress={handleBtnPress} />
        <CardBoutique handleBtnPress={handleBtnPress} />
        <CardBoutique handleBtnPress={handleBtnPress} />
      </ScrollView>
    </View>
  );
};

export default Boutique;

const styles = StyleSheet.create({});
