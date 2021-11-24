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
  orText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.inputTextColor,
    alignSelf: 'center',
    marginTop: 15,
    fontFamily: RobotoMedium
  },

});

export default styles