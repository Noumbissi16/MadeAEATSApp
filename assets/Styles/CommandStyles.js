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
    marginBottom: "15@s",
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
    resizeMode: "contain",
    borderRadius: "8@s",
  },
  imgContainer: {
    backgroundColor: Colors.white,
    width: "78@s",
    height: "78@s",
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "18@s",
    borderRadius: "12@s",
    marginRight: width * 0.075,
  },
  nomPlat: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "18@s",
    textAlign: "center",
  },
  nomResto: {
    fontFamily: "Montserrat_500Medium",
    color: Colors.secondary600,
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
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
});
