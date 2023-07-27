import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";
import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
const { width, height } = Dimensions.get("screen");
export default ScaledSheet.create({
  title1: {
    fontFamily: "Montserrat_500Medium",
    color: Colors.primary500,
    fontSize: "20@s",
    textAlign: "center",
    marginTop: "25@s",
    marginBottom: "15@s",
  },
  text: {
    fontFamily: "Montserrat_300Light",
    fontSize: "15@s",
    textAlign: "center",
    lineHeight: "20@s",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    alignSelf: "center",
    width: width * 0.85,
  },
  button: {
    marginTop: "25@s",
    // marginBottom: "15@s",
    backgroundColor: Colors.primary500,
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    paddingVertical: "15@s",
    paddingHorizontal: "80@s",
    borderRadius: "28.5@s",
  },
  buttonText: {
    color: "white",
    fontSize: "16@s",
    fontFamily: "Montserrat_400Regular",
  },
});
