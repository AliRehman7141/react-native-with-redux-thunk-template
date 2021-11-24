import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors'
import { RobotoMedium } from '../../../assets/fonts'

const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
  },
  flatListContainer: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  itemStyle: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 6,
    borderRadius: 3,
    backgroundColor: colors.white
  },
  itemInnerMainContainer: {
    backgroundColor: colors.white,
    borderRadius: 3,
    padding: 10,
    justifyContent: 'space-between'
  },
  cointImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemDate: {
    fontSize: 11,
    fontFamily: RobotoMedium,
    color: colors.gemsDate,
    marginTop: 5
  },
  coineImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: colors.inputTextColor
  },
  coineImageRead: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: colors.textTab
  },
  coinNameRead: {
    fontFamily: RobotoMedium,
    fontSize: 15,
    color: colors.textTab,
    marginLeft: 5,
    width: '86%'
  },
  coinNameUnRead: {
    fontFamily: RobotoMedium,
    fontSize: 15,
    color: colors.inputTextColor,
    marginLeft: 5,
    width: '86%'
  },
  description: {
    fontSize: 12,
    fontFamily: RobotoMedium,
    color: colors.gemsDate,
    width: '90%'
  },

});

export default styles