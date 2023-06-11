import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//
import Accueil from "./Accueil";
import Commande from "./Commande";
import Boutique from "./Boutique";
import Profile from "./Profile";
import BottomTapHeaderStyles from "../assets/Styles/BottomTapHeaderStyles";
import Colors from "../assets/Colors/Colors";

//
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Tab.Navigator
        initialRouteName="Accueil"
        backBehavior="none"
        shifting={true}
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: { paddingBottom: 5, paddingTop: 5, height: 60 },
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.white,
          tabBarItemStyle: { borderRadius: 25 },
          tabBarActiveBackgroundColor: Colors.primary700,
          headerTitle: "MadeAEATS",
          headerTintColor: Colors.white,
          headerTitleStyle: BottomTapHeaderStyles.commonTitle,
          headerStyle: { backgroundColor: Colors.primary700 },
        }}
      >
        <Tab.Screen
          name="Accueil"
          component={Accueil}
          options={{
            tabBarIcon: (icon) => {
              return icon.focused ? (
                <FontAwesome name="home" size={25} color={Colors.white} />
              ) : (
                <FontAwesome name="home" size={22} color={Colors.primary800} />
              );
            },
            // tabBarBadge: "1",
            headerRight: () => (
              <View style={BottomTapHeaderStyles.headerRight}>
                <Text style={BottomTapHeaderStyles.pageText}>Restaurant</Text>
                <View style={BottomTapHeaderStyles.sideBar} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Commande"
          component={Commande}
          options={{
            tabBarIcon: (icon) => {
              return icon.focused ? (
                <FontAwesome5
                  name="shopping-cart"
                  size={22}
                  color={Colors.white}
                />
              ) : (
                <FontAwesome5
                  name="shopping-cart"
                  size={18}
                  color={Colors.primary800}
                />
              );
            },
            headerRight: () => (
              <View style={BottomTapHeaderStyles.headerRight}>
                <Text style={BottomTapHeaderStyles.pageText}>Commande</Text>
                <View style={BottomTapHeaderStyles.sideBar} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Boutique"
          component={Boutique}
          options={{
            tabBarIcon: (icon) => {
              return icon.focused ? (
                <FontAwesome5 name="store-alt" size={22} color={Colors.white} />
              ) : (
                <FontAwesome5
                  name="store-alt"
                  size={17}
                  color={Colors.primary800}
                />
              );
            },
            headerRight: () => (
              <View style={BottomTapHeaderStyles.headerRight}>
                <Text style={BottomTapHeaderStyles.pageText}>Boutique</Text>
                <View style={BottomTapHeaderStyles.sideBar} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: (icon) => {
              return icon.focused ? (
                <FontAwesome name="user" size={25} color={Colors.white} />
              ) : (
                <FontAwesome name="user" size={20} color={Colors.primary800} />
              );
            },
            headerRight: () => (
              <View style={BottomTapHeaderStyles.headerRight}>
                <Text style={BottomTapHeaderStyles.pageText}>Compte</Text>
                <View style={BottomTapHeaderStyles.sideBar} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AppNavigation;
