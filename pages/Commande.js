import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CommandStyles from "../assets/Styles/CommandStyles";
import CommandeEnCour from "../components/CommandeEnCour";
import CommandeRecente from "../components/CommandeRecente";

const Commande = () => {
  return (
    <View style={CommandStyles.container}>
      <Text style={CommandStyles.statusCommande}>En cours de livraison</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CommandeEnCour />
        <Text style={CommandStyles.statusCommande}>Commande récente</Text>
        <CommandeRecente />
        <CommandeRecente />
        <CommandeRecente />
        <CommandeRecente />
        <CommandeRecente />
      </ScrollView>
    </View>
  );
};

export default Commande;

const styles = StyleSheet.create({});
