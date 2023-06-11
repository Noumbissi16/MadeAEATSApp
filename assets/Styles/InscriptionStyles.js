import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";

export default StyleSheet.create({
  inputFlex: {
    alignItems: "flex-start",
    marginTop: 15,
  },
  inputText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 15,
  },
  textConnexion: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
  },
  altConnexionMediaTitle: {
    color: "#5b5b5e",
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
  decorationConnexion: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  logoFlex: {
    paddingTop: 12,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  singleLogoFlex: {
    padding: 11,
    width: 147,
    borderRadius: 28.5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  mediaText: {
    fontFamily: "Montserrat_400Regular",
    marginLeft: 8,
    textTransform: "uppercase",
  },
});
