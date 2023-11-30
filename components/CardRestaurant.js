import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AccueilStyles from "../assets/Styles/AccueilStyles";
import { MaterialIcons } from "@expo/vector-icons";

const CardRestaurant = ({ item, navigation }) => {
  const handlePress = (menu, restaurant) => {
    navigation.navigate("CommanderRepas", {
      menu,
      restaurant,
    });
  };

  const restaurant = item.menu.map((menu) => (
    <View style={AccueilStyles.card} key={menu.id}>
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
      <Image style={AccueilStyles.imageRepas} source={menu.img} />
      <Text style={AccueilStyles.descResto}>{menu.desc}</Text>
      <TouchableOpacity
        style={AccueilStyles.btn}
        onPress={() => handlePress(menu, item)}
        // onPress={handleBtnPress}
      >
        <Image source={require("../assets/images/livreur.png")} />
        <Text style={AccueilStyles.btnText}>Commander</Text>
      </TouchableOpacity>
    </View>
  ));

  return restaurant;

  // <View style={AccueilStyles.card}>
  //   <View style={[AccueilStyles.rowFlex]}>
  //     <Image style={AccueilStyles.logoRestoImg} source={item.imgResto} />

  //     <View style={AccueilStyles.headerTextFlex}>
  //       <Text style={AccueilStyles.nameResto}>{item.nomResto}</Text>
  //       <View style={AccueilStyles.rowFlex}>
  //         <MaterialIcons name="location-pin" size={24} color="black" />
  //         <Text style={AccueilStyles.townResto}>{item.town}</Text>
  //       </View>
  //     </View>
  //   </View>
  //   <Image style={AccueilStyles.imageRepas} source={item.imgResto} />
  //   <Text style={AccueilStyles.descResto}>{item.menu[0].desc}</Text>
  //   <TouchableOpacity style={AccueilStyles.btn} onPress={handleBtnPress}>
  //     <Image source={require("../assets/images/livreur.png")} />
  //     <Text style={AccueilStyles.btnText}>Commander</Text>
  //   </TouchableOpacity>
  // </View>
};

export default CardRestaurant;
