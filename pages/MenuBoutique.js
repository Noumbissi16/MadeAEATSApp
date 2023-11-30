import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import MenuResto from "../assets/Styles/MenuResto";
import { MaterialIcons } from "@expo/vector-icons";
import MenuRestoComponent from "../components/MenuRestoComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";

const MenuBoutique = ({ navigation, route }) => {
  const restaurant = route.params.restaurant;

  const [shopOpen, setShopOpen] = useState(restaurant.ouvert);

  const handleCommander = (menu) => {
    if (!shopOpen) {
      alert("Cette boutique est fermez a cette heure");
    } else {
      navigation.navigate("CommanderRepas", {
        menu,
        restaurant,
      });
    }
  };
  return (
    <View style={MenuResto.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ position: "relative" }}>
          <TouchableOpacity>
            <Image style={MenuResto.imgResto} source={restaurant.imgResto} />
          </TouchableOpacity>
          <Text style={shopOpen ? MenuResto.ouvert : MenuResto.fermez}>
            {shopOpen ? "Ouvert" : "Fermez"}
          </Text>
        </View>
        <View style={MenuResto.pagePadding}>
          <View style={{ flexDirection: "row" }}>
            <Image style={MenuResto.imgProfile} source={restaurant.imgAdmin} />
            <View>
              <Text style={MenuResto.nomResto}>{restaurant.nomResto}</Text>
              <View style={MenuResto.localisationHourFlex}>
                <View style={MenuResto.locationResto}>
                  <MaterialIcons
                    name="location-pin"
                    size={scale(20)}
                    color="black"
                  />
                  <Text style={MenuResto.descLocation}>{restaurant.town} </Text>
                </View>
                <View style={MenuResto.locationResto}>
                  <MaterialCommunityIcons
                    name="store-clock"
                    size={scale(20)}
                    color="black"
                  />
                  <Text style={MenuResto.descLocation}>
                    {restaurant.horraire}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={MenuResto.line} />
          <Text style={MenuResto.menu}>Menu</Text>

          <View style={MenuResto.menuFlex}>
            {restaurant.menu.map((menu) => (
              <MenuRestoComponent
                handleCommander={() => handleCommander(menu)}
                menu={menu}
                key={menu.id}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuBoutique;
