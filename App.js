import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";
//
import Inscription from "./pages/Inscription";
import Presentation from "./pages/presentation";
import Connexion from "./pages/Connexion";
import Accueil from "./pages/Accueil";
import AppNavigation from "./pages/AppNavigation";
import Colors from "./assets/Colors/Colors";
import CommandeRepas from "./pages/CommandeRepas";
import ModifierProfile from "./pages/ModifierProfile";
import MenuBoutique from "./pages/MenuBoutique";
//
// for splash screen to load all app content before stop displaying
SplashScreen.preventAutoHideAsync();
// for navigation
const Stack = createNativeStackNavigator();
//
export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      // setTimeout(() => {
      //   console.log("");
      // }, 2000);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
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
            name="Menu Boutique"
            component={MenuBoutique}
            options={{
              headerTintColor: "white",
              headerStyle: { backgroundColor: Colors.primary700 },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
