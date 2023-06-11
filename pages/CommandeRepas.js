import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import CommandeRepasStyles from "../assets/Styles/CommandeRepasStyles";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../assets/Colors/Colors";

const CommandeRepas = () => {
  const [nombreRepas, setNombreRepas] = useState(1);
  const [prixRepas, setPrixRepas] = useState(1000);

  const decreaseRepas = () => {
    if (nombreRepas > 1) {
      setNombreRepas(nombreRepas - 1);
    } else {
      alert("Vous ne pouvez pas commander moins de 1 plat");
    }
  };
  useEffect(() => {
    setPrixRepas(1000 * nombreRepas);
  }, [nombreRepas]);
  const increaseRepas = () => {
    setNombreRepas(nombreRepas + 1);
  };
  return (
    <View style={CommandeRepasStyles.container}>
      <StatusBar style="inverted" />
      <Image
        style={CommandeRepasStyles.imagePlat}
        source={require("../assets/images/resto1.jpeg")}
      />
      <Text style={CommandeRepasStyles.nomPlat}>Poisson braisser</Text>
      <View style={CommandeRepasStyles.rowFlex}>
        <Text style={CommandeRepasStyles.nomResto}>
          Restaurant le Restoration
        </Text>
        <View style={CommandeRepasStyles.rowFlex}>
          <MaterialIcons
            name="location-pin"
            size={24}
            color={Colors.secondary800}
          />
          <Text style={CommandeRepasStyles.locResto}>Bafoussam</Text>
        </View>
      </View>
      <View style={CommandeRepasStyles.rowFlex}>
        <Text style={CommandeRepasStyles.prixPlat}> {prixRepas} Fcfa </Text>
        <View style={CommandeRepasStyles.rowFlex}>
          <TouchableOpacity onPress={increaseRepas}>
            <MaterialIcons
              name="add-circle"
              size={25}
              color={Colors.secondary600}
            />
          </TouchableOpacity>
          <Text style={CommandeRepasStyles.qtyPlat}>{nombreRepas}</Text>
          <TouchableOpacity onPress={decreaseRepas}>
            <MaterialIcons
              name="remove-circle-outline"
              size={25}
              color={Colors.secondary600}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={CommandeRepasStyles.descPlat}>
        Monoker primagraf tosm. Enfoni hungerpandemi. Åns ul. Autora defili
        faskade. Nygären euvis antide. Trarade antede epiplaning. Rer san och
        mining. Javuskap tongen. Monogygt lant. Anatigåheten eurosade tunde.{" "}
      </Text>
      <TouchableOpacity style={CommandeRepasStyles.btn}>
        <Text style={CommandeRepasStyles.btnText}>Commander</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommandeRepas;
