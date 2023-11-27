import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "../../pages/AppNavigation";
import CommandeRepas from "../../pages/CommandeRepas";
import ModifierProfile from "../../pages/ModifierProfile";
import MenuBoutique from "../../pages/MenuBoutique";
import PayementRepas from "../../pages/PayementRepas";
import DetailsCommande from "../../pages/DetailsCommande";
import Colors from "../../assets/Colors/Colors";
const Stack = createNativeStackNavigator();

const UnProtectedRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppNavigation"
          component={AppNavigation}
          options={{
            headerStyle: { backgroundColor: Colors.secondary400 },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CommanderRepas"
          component={CommandeRepas}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.primary700 },
          }}
        />
        <Stack.Screen
          name="Modifier Profile"
          component={ModifierProfile}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.primary700 },
          }}
        />
        <Stack.Screen
          name="Menu Restaurant"
          component={MenuBoutique}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.primary700 },
          }}
        />
        <Stack.Screen
          name="Payer votre repas"
          component={PayementRepas}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.primary700 },
          }}
        />
        <Stack.Screen
          name="Details Commande"
          component={DetailsCommande}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.primary700 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UnProtectedRoutes;
