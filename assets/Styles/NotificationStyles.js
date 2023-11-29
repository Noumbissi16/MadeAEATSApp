import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Colors from "../Colors/Colors";

const { width, height } = Dimensions.get("screen");

export default ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.025,
    backgroundColor: Colors.background,
  },
  card: {
    backgroundColor: Colors.white,
    padding: "10@s",
    marginBottom: "15@s",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    paddingRight: 25,
    borderRadius: "5@s",
  },
  imgResto: {
    width: "60@s",
    height: "60@s",
    flexShrink: 0,
    borderRadius: "75@s",
  },
  nomResto: {
    fontFamily: "Montserrat_500Medium",
    fontSize: "18@s",
    fontWeight: "500",
    overflow: "hidden",
  },
  textSection: {
    marginLeft: 20,
  },
  date: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: "10@s",
    right: "10@s",
    fontFamily: "Montserrat_400Regular",
    fontSize: "8@s",
    color: Colors.grey,
  },
  objet: {
    fontSize: "12@s",
    color: Colors.grey,
    fontWeight: "400",
    fontFamily: "Montserrat_400Regular",
  },
  btnText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "10@s",
    color: Colors.primary600,
    marginTop: "10@s",
  },
  notif: {
    width: "9@s",
    height: "9@s",
    backgroundColor: Colors.primary500,
    borderRadius: 100,
    position: "absolute",
    top: 6,
    right: 6,
  },
  bottomSheetLogoRestoFlex: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8@s",
  },
  bottomSheetContainer: {
    paddingTop: "10@s",
    paddingHorizontal: "20@s",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Colors.background,
  },
  bottomSheetImgResto: {
    width: "45@s",
    aspectRatio: 1,
    borderRadius: 100,
  },
  bottomSheetnomResto: {
    fontFamily: "Montserrat_500Medium",
    fontSize: "15@s",
    fontWeight: "500",
    marginLeft: "5@s",
  },
  bottomSheetObjetTitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "15@s",
    color: Colors.lightGrey,
    alignSelf: "center",
  },
  bottomSheetObjet: {
    lineHeight: "16@s",
    alignSelf: "center",
    fontFamily: "Montserrat_400Regular",
    fontSize: "12@s",
    marginTop: "3@s",
    marginBottom: "12@s",
  },
  bottomSheetAlignCenterContent: {
    alignItems: "center",
  },
});
