import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";
const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("screen");
const PageHeight = height * 0.06;
const PageWidth = width * 0.075;
export default ScaledSheet.create({
  textInput: {
    height: "51@s",
    borderColor: Colors.grey,
    borderRadius: "12@s",
    shadowColor: "rgba(0, 0, 0, 0.25);",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 2.5,
    padding: "10@s",
    // width: 330,
    // backgroundColor: Colors.white,
  },
  contentMargin: {
    marginHorizontal: PageWidth,
    marginVertical: PageHeight,
  },
  pageTitle: {
    fontSize: "40@s",
    color: Colors.black,
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: "15@s",
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
    borderRadius: 28.5,
  },
  buttonText: {
    color: "white",
    fontSize: "20@s",
    fontFamily: "Montserrat_400Regular",
  },
});
