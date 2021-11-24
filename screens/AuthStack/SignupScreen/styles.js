import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors'

const styles = StyleSheet.create({
  safeStyle: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 30,
    paddingLeft: 22,
    paddingRight: 22,
    marginBottom: 20
  },
  btnText: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.white
  },
  btnContainer: {
    borderRadius: 3,
    marginTop: 20,
    backgroundColor: colors.green
  },
});

export default styles