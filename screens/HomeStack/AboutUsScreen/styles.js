import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors'
import { RobotoMedium } from '../../../assets/fonts'

const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
  },
  mainContainer: {
    padding: 20
  },
  extraDarkText: {
    fontSize: 15,
    color: colors.textTab,
    lineHeight: 21.75
  },
  darkText: {
    fontSize: 13,
    fontFamily: RobotoMedium,
    color: colors.gemsDate
  },
  lightText: {
    fontSize: 15,
    fontFamily: RobotoMedium,
    color: "#808080",
  },
  copyRightText: {
    marginTop: 30,
    fontSize: 15,
    fontFamily: RobotoMedium,
    color: "#808080"
  },
  tickContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  greenTick: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
    marginRight: 3
  },
  btnText: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.white
  },
  btnContainer: {
    borderRadius: 3,
    marginTop: 13,
    width: '45%',
    backgroundColor: colors.skyBlue
  },
  headingText: {
    fontSize: 16,
    fontFamily: RobotoMedium,
    color: colors.gemsDate
  },
  priceText: {
    fontSize: 13,
    fontFamily: RobotoMedium,
    color: colors.gemsDate,
    textAlign: 'right'
  },
  combineRadioContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
    marginBottom: 9,
    flexWrap: 'wrap'
  },
  radioTouch: {
    marginRight: 10
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioView: {
    width: 8,
    height: 8,
    backgroundColor: colors.accordianHeaderColor,
    borderRadius: 4,
    marginRight: 2
  },
  radioSelectView: {
    width: 8,
    height: 8,
    backgroundColor: colors.yellow,
    borderRadius: 4,
    marginRight: 2
  },
  bottomNote: {
    fontSize: 11,
    fontFamily: RobotoMedium,
    color: colors.gemsDate
  },
  cryptoMainContainer: {
    backgroundColor: '#F3F3F3',
    borderRadius: 3,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  copyImage: {
    width: 10,
    height: 12,
    marginLeft: 4,
    resizeMode: 'contain'
  },
  adressContainer: {
    flexDirection: 'row'
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  linkButtonStyle: {
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: 3,
    backgroundColor: '#616CF1',
  },
  linkButtonLogo: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: 'cover'
  },
  linkText: {
    fontSize: 15,
    fontFamily: RobotoMedium,
    color: "#FFF"
  },
  joinText: {
    fontSize: 11,
    fontFamily: RobotoMedium,
    color: colors.inputTextColor,
    alignSelf: 'center',
    marginTop: 30
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center'
  },
  socialImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
  },
  socialTouch: {
    marginLeft: 10
  },
  shareContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  shareImage: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    marginRight: 4
  },
  shareText: {
    fontFamily: RobotoMedium,
    fontSize: 11,
    color: colors.inputTextColor
  },
});

export default styles