import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import BoutiqueStyles from "../assets/Styles/BoutiqueStyles";
import CardBoutique from "../components/CardBoutique";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";

const Boutique = ({ navigation }) => {
  const restaurants = useSelector((state) => state.restaurant.restaurants);

  // console.log(restaurants);

  const handleBtnPress = (restaurant) => {
    navigation.navigate("Menu Restaurant", {
      restaurant,
    });
  };
  return (
    <View style={BoutiqueStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={restaurants}
        renderItem={({ item }) => (
          <CardBoutique
            handleBtnPress={() => handleBtnPress(item)}
            restaurant={item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Boutique;

const styles = StyleSheet.create({});
