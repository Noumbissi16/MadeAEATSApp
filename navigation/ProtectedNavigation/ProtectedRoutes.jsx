import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Presentation from "../../pages/presentation";
import Inscription from "../../pages/Inscription";
import Connexion from "../../pages/Connexion";

const Stack = createNativeStackNavigator();

const ProtectedRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Presentation"
          component={Presentation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Page Inscription"
          component={Inscription}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Page Connexion"
          component={Connexion}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProtectedRoutes;
