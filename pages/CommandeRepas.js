import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CommandeRepasStyles from "../assets/Styles/CommandeRepasStyles";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../assets/Colors/Colors";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";

const CommandeRepas = ({ navigation, route }) => {
  const idrestaurantToSelectMenu = route.params.idRestaurant;
  const restaurantToSelectMenu = useSelector((state) =>
    state.restaurant.restaurants.find(
      (restaurant) => restaurant.id === idrestaurantToSelectMenu
    )
  );
  const menu = route.params.menu;

  const [nombreRepas, setNombreRepas] = useState(1);
  const [prixRepas, setPrixRepas] = useState(menu.prix);
  const prixTotal = prixRepas + 1000;
  const handleBtnPress = () => {
    const commanderRepasInfo = {
      ...menu,
      idResto: restaurantToSelectMenu.id,
      nomResto: restaurantToSelectMenu.nomResto,
      nombreRepas,
      prixTotal,
    };

    navigation.navigate("Payer votre repas", {
      commanderRepasInfo,
    });
  };

  const decreaseRepas = () => {
    if (nombreRepas > 1) {
      setNombreRepas(nombreRepas - 1);
    } else {
      alert("Vous ne pouvez pas commander moins de 1 plat");
    }
  };
  useEffect(() => {
    setPrixRepas(menu.prix * nombreRepas);
  }, [nombreRepas]);
  const increaseRepas = () => {
    setNombreRepas(nombreRepas + 1);
  };

  return (
    <View style={CommandeRepasStyles.container}>
      <Image style={CommandeRepasStyles.imagePlat} source={menu.img} />
      <Text style={CommandeRepasStyles.nomPlat}>{menu.nom}</Text>
      <View style={CommandeRepasStyles.rowFlex}>
        <Text style={CommandeRepasStyles.nomResto}>
          {restaurantToSelectMenu.nomResto}
        </Text>
        <View style={CommandeRepasStyles.rowFlex}>
          <MaterialIcons
            name="location-pin"
            size={scale(18)}
            color={Colors.secondary800}
          />
          <Text style={CommandeRepasStyles.locResto}>
            {restaurantToSelectMenu.town}
          </Text>
        </View>
      </View>
      <View style={CommandeRepasStyles.rowFlex}>
        <View style={CommandeRepasStyles.rowFlex}>
          <TouchableOpacity onPress={increaseRepas}>
            <MaterialIcons
              name="add-circle"
              size={scale(20)}
              color={Colors.secondary600}
            />
          </TouchableOpacity>
          <Text style={CommandeRepasStyles.qtyPlat}>{nombreRepas}</Text>
          <TouchableOpacity onPress={decreaseRepas}>
            <MaterialIcons
              name="remove-circle-outline"
              size={scale(20)}
              color={Colors.secondary600}
            />
          </TouchableOpacity>
        </View>
        <Text style={CommandeRepasStyles.prixPlat}> {prixRepas} Fcfa </Text>
      </View>
      <Text style={CommandeRepasStyles.descPlat}>{menu.desc}</Text>
      <View style={CommandeRepasStyles.rowFlex}>
        <Text style={CommandeRepasStyles.nomResto}>Prix de livraison </Text>
        <Text style={CommandeRepasStyles.prixPlat}> 1000 Fcfa </Text>
      </View>
      <View style={CommandeRepasStyles.rowFlex}>
        <Text style={CommandeRepasStyles.nomResto}>Total </Text>
        <Text style={CommandeRepasStyles.prixPlat}>{prixTotal} Fcfa</Text>
      </View>
      <TouchableOpacity
        style={CommandeRepasStyles.btn}
        onPress={handleBtnPress}
      >
        <Text style={CommandeRepasStyles.btnText}>Commander</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommandeRepas;
