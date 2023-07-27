import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  btn: {
    marginTop: 5,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 98,
    backgroundColor: Colors.primary700,
    borderRadius: 12,
  },
  btnText: {
    marginLeft: 5,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    color: Colors.white,
    textTransform: "capitalize",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  modalCard: {
    backgroundColor: Colors.white,
    padding: width * 0.025,
    width: width * 0.95,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: Colors.primary100,
    borderRadius: 8,
    height: width * 0.125,
    paddingLeft: 8,
    marginVertical: 10,
  },
  btn: {
    alignSelf: "flex-end",
    backgroundColor: Colors.primary500,
    padding: width * 0.0125,
    borderRadius: 8,
  },
  btnText: {
    color: Colors.white,
    fontFamily: "Montserrat_400Regular",
  },
});
