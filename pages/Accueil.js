import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
//
import AccueilStyles from "../assets/Styles/AccueilStyles";
import DATA from "../assets/data";
import CardRestaurant from "../components/CardRestaurant";
import { Searchbar } from "react-native-paper";
import * as Location from "expo-location";
//
const Accueil = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log(location);
      setLocation(location);
    })();
  }, []);
  // console.log(location);
  const handleSearch = (text) => {
    setSearchText(text);
  };
  const handleBtnPress = () => {
    navigation.navigate("CommanderRepas");
  };
  const [searchText, setSearchText] = useState("");
  return (
    <View style={AccueilStyles.container}>
      <View>
        <Searchbar
          style={AccueilStyles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
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
