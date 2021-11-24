import { StyleSheet } from 'react-native';
import { RobotoMedium } from '../../../assets/fonts';
import colors from '../../../utils/colors'

const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
  },
  textRowContainer: {
    flexDirection: 'row',
    borderBottomWidth: .6,
    borderBottomColor: colors.black,
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop:8,
    paddingTop: 10,
    paddingBottom: 8
  },
  verticalTextContainer: {
    width: '48%',
  },
  darkText: {
    fontFamily: RobotoMedium,
    fontSize: 13,
    color: colors.inputTextColor,
    lineHeight: 24,
    textAlign: 'center'
  },
  lightText: {
    fontFamily: RobotoMedium,
    fontSize: 10,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.inputTextColor
  },
  mainMapListContainer: {
    flexDirection: 'row',
    marginTop: 40,
    width: '80%',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  filterText: {
    fontSize: 13,
    fontFamily: RobotoMedium,
    color: colors.inputTextColor
  },
  filterSelectStyle: {
    backgroundColor: colors.yellow,
    padding: 4,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 15
  },
  filterStyle: {
    backgroundColor: colors.white,
    padding: 4,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 15
  },
  categoryMainContainer: {
    flexDirection: 'row',
    // backgroundColor:'red',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  CatgoryInner: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  colorView: {
    width: 9,
    height: 9,
    backgroundColor: colors.yellow
  },
  categoryText: {
    color: colors.inputTextColor,
    fontFamily: RobotoMedium,
    fontSize: 12,
    marginLeft: 2
  },
  lineItemView: { backgroundColor: colors.lightGrey, width: 4, alignSelf: 'baseline' }
});

export default styles