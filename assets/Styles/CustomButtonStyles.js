import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Colors from "../Colors/Colors";

const { width, height } = Dimensions.get("screen");

export default ScaledSheet.create({
  btn: {
    backgroundColor: Colors.primary700,
    padding: "12@s",
    width: width * 0.85,
    borderRadius: "8@s",
    // width: width * 1,
  },
  btnText: {
    color: Colors.white,
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
    fontSize: "12@s",
  },
});
