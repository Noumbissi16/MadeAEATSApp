import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.background,
  },
  card: {
    width: width * 0.9,
    backgroundColor: Colors.white,
    borderRadius: 25,
    marginBottom: 15,
    elevation: 2,
  },

  statusCommande: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    marginBottom: 15,
  },
  idCommande: {
    alignSelf: "flex-end",
    marginTop: 14,
    marginRight: 19,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
    color: Colors.primary500,
  },
  imgPlat: {
    width: 60,
    height: 60,
  },
  imgContainer: {
    backgroundColor: Colors.white,
    width: 78,
    height: 78,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 18,
    borderRadius: 12,
    marginRight: 10,
  },
  nomPlat: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    textAlign: "center",
  },
  nomResto: {
    fontFamily: "Montserrat_500Medium",
    color: Colors.secondary600,
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  locPlat: {
    fontFamily: "Montserrat_300Light",
    fontSize: 12,
  },
  btn: {
    marginTop: 16,
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 98,
    backgroundColor: Colors.secondary500,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  btnText: {
    marginLeft: 5,
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    color: Colors.white,
  },
  prix_Temp: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 13,
    color: Colors.secondary600,
  },
  prix_TempQte: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 35,
  },
  small: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
  },
  flexSpace: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flexSpaceCommande: {
    marginHorizontal: 18,
    marginTop: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateCommande: {
    fontFamily: "Montserrat_300Light",
    fontSize: 12,
  },
  statusLivrer: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    color: Colors.secondary400,
  },
  prixCommand: {
    marginLeft: 32,
    fontFamily: "Montserrat_400Regular",
    fontSize: 13,
    color: Colors.primary500,
  },
  bntFlex: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnDetails: {
    paddingHorizontal: 43,
    paddingVertical: 12,
    elevation: 1,
    backgroundColor: Colors.white,
    borderRadius: 25,
  },
  btnDetailsTxt: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 13,
  },
  btnReccomander: {
    backgroundColor: Colors.primary500,
  },
  btnReccomanderTxt: {
    color: Colors.white,
  },
});
