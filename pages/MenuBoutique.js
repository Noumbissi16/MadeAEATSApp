import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import MenuResto from "../assets/Styles/MenuResto";
import { MaterialIcons } from "@expo/vector-icons";

const MenuBoutique = () => {
  const [shopOpen, setShopOpen] = useState(true);
  const toggleShopOpen = () => {
    setShopOpen(!shopOpen);
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
          <Text style={MenuResto.nomResto}>Mr N Fast Food</Text>
          <View style={MenuResto.locationResto}>
            <MaterialIcons name="location-pin" size={24} color="black" />
            <Text style={MenuResto.descLocation}>
              Henifiera presödissa de protiv. Tikass. Vasolig pres.
            </Text>
          </View>
          <View style={MenuResto.line} />
          <Text style={MenuResto.menu}>Menu</Text>
          <View style={MenuResto.menuFlex}>
            <View style={MenuResto.card}>
              <Image
                style={MenuResto.imgMenu}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
              <Text style={MenuResto.menuText}>Porc braiser</Text>
              <Text style={MenuResto.menuPrix}>2000F cfa</Text>
              <TouchableOpacity style={MenuResto.btn}>
                <Text style={MenuResto.bntText}>Commander</Text>
              </TouchableOpacity>
            </View>
            <View style={MenuResto.card}>
              <Image
                style={MenuResto.imgMenu}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
              <Text style={MenuResto.menuText}>Porc braiser</Text>
              <Text style={MenuResto.menuPrix}>2000F cfa</Text>
              <TouchableOpacity style={MenuResto.btn}>
                <Text style={MenuResto.bntText}>Commander</Text>
              </TouchableOpacity>
            </View>
            <View style={MenuResto.card}>
              <Image
                style={MenuResto.imgMenu}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
              <Text style={MenuResto.menuText}>Porc braiser</Text>
              <Text style={MenuResto.menuPrix}>2000F cfa</Text>
              <TouchableOpacity style={MenuResto.btn}>
                <Text style={MenuResto.bntText}>Commander</Text>
              </TouchableOpacity>
            </View>
            <View style={MenuResto.card}>
              <Image
                style={MenuResto.imgMenu}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
              <Text style={MenuResto.menuText}>Porc braiser</Text>
              <Text style={MenuResto.menuPrix}>2000F cfa</Text>
              <TouchableOpacity style={MenuResto.btn}>
                <Text style={MenuResto.bntText}>Commander</Text>
              </TouchableOpacity>
            </View>
            <View style={MenuResto.card}>
              <Image
                style={MenuResto.imgMenu}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
              <Text style={MenuResto.menuText}>Porc braiser</Text>
              <Text style={MenuResto.menuPrix}>2000F cfa</Text>
              <TouchableOpacity style={MenuResto.btn}>
                <Text style={MenuResto.bntText}>Commander</Text>
              </TouchableOpacity>
            </View>
            <View style={MenuResto.card}>
              <Image
                style={MenuResto.imgMenu}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
              <Text style={MenuResto.menuText}>Porc braiser</Text>
              <Text style={MenuResto.menuPrix}>2000F cfa</Text>
              <TouchableOpacity style={MenuResto.btn}>
                <Text style={MenuResto.bntText}>Commander</Text>
              </TouchableOpacity>
            </View>
            <View style={MenuResto.card}>
              <Image
                style={MenuResto.imgMenu}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
              <Text style={MenuResto.menuText}>Porc braiser</Text>
              <Text style={MenuResto.menuPrix}>2000F cfa</Text>
              <TouchableOpacity style={MenuResto.btn}>
                <Text style={MenuResto.bntText}>Commander</Text>
              </TouchableOpacity>
            </View>
            <View style={MenuResto.card}>
              <Image
                style={MenuResto.imgMenu}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
              <Text style={MenuResto.menuText}>Porc braiser</Text>
              <Text style={MenuResto.menuPrix}>2000F cfa</Text>
              <TouchableOpacity style={MenuResto.btn}>
                <Text style={MenuResto.bntText}>Commander</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuBoutique;
