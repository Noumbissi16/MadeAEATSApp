import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import MenuResto from "../assets/Styles/MenuResto";
import { MaterialIcons } from "@expo/vector-icons";
import MenuRestoComponent from "../components/MenuRestoComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";

const MenuBoutique = ({ navigation }) => {
  const [shopOpen, setShopOpen] = useState(true);
  const toggleShopOpen = () => {
    setShopOpen(!shopOpen);
  };
  const handleCommander = () => {
    if (!shopOpen) {
      alert("Cette boutique est fermez a cette heure");
    } else {
      navigation.navigate("CommanderRepas");
    }
  };
  return (
    <View style={MenuResto.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={toggleShopOpen}>
          <Image
            style={MenuResto.imgResto}
            resizeMode="cover"
            source={require("../assets/images/resto2.jpeg")}
          />
        </TouchableOpacity>
        <Text style={shopOpen ? MenuResto.ouvert : MenuResto.fermez}>
          {shopOpen ? "Ouvert" : "Fermez"}
        </Text>
        <View style={MenuResto.pagePadding}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={MenuResto.imgProfile}
              source={require("../assets/images/logoresto.jpg")}
            />
            <View>
              <Text style={MenuResto.nomResto}>Mr N Fast Food</Text>
              <View style={MenuResto.localisationHourFlex}>
                <View style={MenuResto.locationResto}>
                  <MaterialIcons
                    name="location-pin"
                    size={scale(20)}
                    color="black"
                  />
                  <Text style={MenuResto.descLocation}>Bafoussam </Text>
                </View>
                <View style={MenuResto.locationResto}>
                  <MaterialCommunityIcons
                    name="store-clock"
                    size={scale(20)}
                    color="black"
                  />
                  <Text style={MenuResto.descLocation}>07h-17h </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={MenuResto.line} />
          <Text style={MenuResto.menu}>Menu</Text>
          <View style={MenuResto.menuFlex}>
            <MenuRestoComponent handleCommander={handleCommander} />
            <MenuRestoComponent handleCommander={handleCommander} />
            <MenuRestoComponent handleCommander={handleCommander} />
            <MenuRestoComponent handleCommander={handleCommander} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuBoutique;
