import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  splashIcon: {
    width: "100%",
    height: 135,
    resizeMode: 'contain'
  }
});

export default styles