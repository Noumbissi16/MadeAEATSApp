import { FlatList, View } from "react-native";
import React, { useState } from "react";
//
import AccueilStyles from "../assets/Styles/AccueilStyles";
import CardRestaurant from "../components/CardRestaurant";
import { Searchbar } from "react-native-paper";
import { useSelector } from "react-redux";
//
const Accueil = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const restaurantData = useSelector((state) => state.restaurant.restaurants);

  const [restaurantDataToDisplay, setrestaurantDataToDisplay] =
    useState(restaurantData);

  //

  const handleSearch = () => {
    if (!searchText) return setrestaurantDataToDisplay(restaurantData);

    const result = restaurantDataToDisplay.filter((restaurant) => {
      const restaurantMatches = restaurant.nomResto.includes(searchText);
      return restaurantMatches;
    });

    setrestaurantDataToDisplay(result);
  };

  return (
    <View style={AccueilStyles.container}>
      <View>
        <Searchbar
          style={AccueilStyles.searchInput}
          placeholder="Rechercher un repas"
          value={searchText}
          onChangeText={(e) => setSearchText(e)}
          onSubmitEditing={handleSearch}
          onClearIconPress={() => {
            setrestaurantDataToDisplay(restaurantData);
          }}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={restaurantDataToDisplay}
        renderItem={({ item }) => {
          return <CardRestaurant item={item} navigation={navigation} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Accueil;
