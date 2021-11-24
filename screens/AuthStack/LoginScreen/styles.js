import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors'
import { RobotoMedium } from '../../../assets/fonts'

const styles = StyleSheet.create({
  safeStyle: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    marginTop: 40
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  logoText: {
    fontSize: 25,
    fontFamily: RobotoMedium,
    alignSelf: 'center',
    color: colors.yellow,
    marginTop: 15
  },
  innerContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 50,
    paddingLeft: 22,
    paddingRight: 22
  },

  btnText: {
    fontSize: 14,
    lineHeight: 22,
  },
  btnContainer: {
    borderRadius: 3,
    marginTop: 20
  },
  signUpTextTouch: {
    marginBottom: 20
  },
  fogretPasswordText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.tintColor,
    alignSelf: 'center',
    marginVertical: 15,
    fontFamily: RobotoMedium
  },
  signUpText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.inputTextColor,
    alignSelf: 'center',
    marginTop: 15,
    fontFamily: RobotoMedium
  },
  orText: {
    fontSize: 14,
    color: colors.inputTextColor,
    fontFamily: RobotoMedium,
    marginHorizontal: 10
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 40
  },
  horizontalDivider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.inputTextColor
  }
});

export default styles