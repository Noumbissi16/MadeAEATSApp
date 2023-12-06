import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";

const { width, height } = Dimensions.get("screen");

export default ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.background,
  },
  card: {
    width: width * 0.9,
    backgroundColor: Colors.white,
    borderRadius: "25@s",
    marginBottom: "15@s",
    elevation: 2,
  },

  statusCommande: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "20@s",
    marginBottom: "10@s",
  },
  idCommande: {
    alignSelf: "flex-end",
    marginTop: "14@s",
    marginRight: "19@s",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "12@s",
    color: Colors.primary500,
    marginBottom: "5@s",
  },
  imgPlat: {
    width: width * 0.175,
    height: width * 0.175,
    // resizeMode: "contain",
    borderRadius: "8@s",
  },
  imgContainer: {
    backgroundColor: Colors.white,
    width: "78@s",
    height: "78@s",
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: "18@s",
    borderRadius: "12@s",
    marginRight: 8,
  },
  nomPlat: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "18@s",
    textAlign: "center",
    // display: "flex",
    // textAlign: "center",
    // alignSelf: "flex-start",
    // flexWrap: "wrap",
  },
  nomResto: {
    fontFamily: "Montserrat_500Medium",
    color: Colors.secondary600,
    // width: "5@s",
  },
  rowFlex: {
    flexDirection: "row",
    // // alignItems: "flex-start",
    // // flexWrap: "wrap",
    // justifyContent: "center",
    alignItems: "center",
    // width: width * 0.75,
    // alignSelf: "center",
    // paddingHorizontal: width * 0.055,
    paddingHorizontal: 15,
  },
  locPlat: {
    fontFamily: "Montserrat_300Light",
    fontSize: "12@s",
  },
  btn: {
    marginTop: "8@s",
    alignItems: "center",
    paddingVertical: "17@s",
    backgroundColor: Colors.secondary500,
    borderBottomRightRadius: "25@s",
    borderBottomLeftRadius: "25@s",
  },
  btnText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: "15@s",
    color: Colors.white,
    alignSelf: "center",
  },
  prix_Temp: {
    fontFamily: "Montserrat_500Medium",
    fontSize: "13@s",
    color: Colors.secondary600,
  },
  prix_TempQte: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "28@s",
  },
  small: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "15@s",
  },
  flexSpace: {
    marginTop: "12@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flexSpaceCommande: {
    marginHorizontal: "18@s",
    marginTop: "12@s",
    marginBottom: "10@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  horizontalMargin: {
    // marginHorizontal: 25,
  },
  dateCommande: {
    fontFamily: "Montserrat_300Light",
    fontSize: "12@s",
  },
  statusLivrer: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "12@s",
    color: Colors.secondary400,
  },
  prixCommand: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "13@s",
    color: Colors.primary500,
    marginTop: "10@s",
  },
  bntFlex: {
    marginVertical: "15@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnDetails: {
    paddingHorizontal: width * 0.075,
    paddingVertical: "12@s",
    elevation: 1,
    backgroundColor: Colors.white,
    borderRadius: "25@s",
  },
  btnDetailsTxt: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "13@s",
  },
  btnReccomander: {
    backgroundColor: Colors.primary500,
  },
  btnReccomanderTxt: {
    color: Colors.white,
  },
  emptyTxt: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "12@s",
    // color: Colors.secondary600,
    backgroundColor: Colors.white,
    padding: "20@s",
    borderRadius: "5@s",

    // borderColor: Colors.secondary100,
    // borderWidth: 1,
    textAlign: "center",
  },

  bottomSheetContainer: {
    alignSelf: "center",
  },
  bottomSheetTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "18@s",
    alignSelf: "center",
  },
  bottomSheetText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "12@s",
    color: Colors.grey,
    lineHeight: 12,
    marginVertical: 15,
    alignSelf: "center",
  },
});
