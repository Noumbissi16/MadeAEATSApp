import { Dimensions, StyleSheet } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";
const { width, height } = Dimensions.get("screen");
export default ScaledSheet.create({
  inputFlex: {
    alignItems: "flex-start",
    marginTop: width * 0.015,
    // alignSelf: "center",
  },
  inputText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: "13@s",
    marginBottom: "3@s",
  },
  textConnexion: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "13@s",
    marginTop: "15@s",
    textAlign: "center",
    alignSelf: "center",
    // marginRight: "5@s",
  },
  altConnexionMediaTitle: {
    color: "#5b5b5e",
    fontSize: "14@s",
    fontFamily: "Montserrat_400Regular",
  },
  decorationConnexion: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "15@s",
  },
  logoFlex: {
    paddingTop: "12@s",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  singleLogoFlex: {
    padding: "10@s",
    width: "147@s",
    borderRadius: "28.5@s",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  mediaText: {
    fontFamily: "Montserrat_400Regular",
    marginLeft: "8@s",
    textTransform: "uppercase",
  },
  textInput: {
    height: width * 0.125,
    borderColor: Colors.grey,
    borderRadius: "8@s",
    shadowColor: "rgba(0, 0, 0, 0.25);",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 2.5,
    padding: "10@s",
    width: width * 0.85,
    backgroundColor: Colors.white,
  },
  pageTitle: {
    fontSize: "28@s",
    color: Colors.black,
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: "8@s",
  },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    width: width,
  },
  button: {
    marginTop: "30@s",
    marginBottom: "15@s",
    backgroundColor: "#0fc147",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    paddingVertical: "15@s",
    paddingHorizontal: "80@s",
    borderRadius: "28.5@s",
  },
  buttonText: {
    color: "white",
    fontSize: "14@s",
    fontFamily: "Montserrat_400Regular",
  },
  imgMedia: {
    width: "22@s",
    resizeMode: "contain",
  },
});
