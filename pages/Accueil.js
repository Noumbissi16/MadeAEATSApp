import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
//
import AccueilStyles from "../assets/Styles/AccueilStyles";
import DATA from "../assets/data";
import CardRestaurant from "../components/CardRestaurant";
//
const Accueil = ({ navigation }) => {
  const handleSearch = () => {
    console.log(searchText);
  };
  const handleBtnPress = () => {
    navigation.navigate("CommanderRepas");
  };
  const [searchText, setSearchText] = useState();
  return (
    <View style={AccueilStyles.container}>
      <View>
        <TextInput
          style={AccueilStyles.searchInput}
          placeholder="Recherchez un repas ou restaurant"
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          autoCapitalize="none"
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => {
          return <CardRestaurant item={item} handleBtnPress={handleBtnPress} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Accueil;
