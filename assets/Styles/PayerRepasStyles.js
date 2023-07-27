import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";

const { width, height } = Dimensions.get("screen");

export default ScaledSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.025,
  },
  inputText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "15@s",
    marginBottom: "10@s",
  },
  logo: {
    width: "60@s",
    height: "40@s",
    marginRight: "15@s",
    resizeMode: "contain",
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: "11@s",
  },
  dropdown: {
    height: "50@s",
    backgroundColor: "white",
    borderRadius: "12@s",
    padding: "12@s",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginBottom: "15@s",
  },
  item: {
    padding: "5@s",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: Colors.white,
    padding: "12@s",
    borderRadius: "12@s",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginBottom: "15@s",
  },
  imageInputText: {
    position: "absolute",
    marginLeft: "255@s",
    marginTop: "3@s",
    resizeMode: "contain",
  },
  btn: {
    marginTop: "5@s",
    alignItems: "center",
    paddingVertical: "12@s",
    paddingHorizontal: "98@s",
    backgroundColor: Colors.primary700,
    borderRadius: "12@s",
  },
  btnText: {
    marginLeft: "5@s",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "15@s",
    color: Colors.white,
    textTransform: "capitalize",
  },
});
