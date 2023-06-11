import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";
const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("screen");
const PageHeight = height * 0.06;
const PageWidth = width * 0.075;
export default StyleSheet.create({
  textInput: {
    height: 51,
    borderColor: Colors.grey,
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.25);",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 2.5,
    padding: 10,
    width: 330,
  },
  contentMargin: {
    marginHorizontal: PageWidth,
    marginVertical: PageHeight,
  },
  pageTitle: {
    fontSize: 40,
    color: Colors.black,
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 15,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: "#0fc147",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 28.5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat_400Regular",
  },
});
