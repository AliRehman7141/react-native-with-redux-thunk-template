import React, { } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

//Assets
import { RobotoBold } from '../assets/fonts';

//Utils
import colors from '../utils/colors';

import { logoutAPI } from '../api/methods/auth'
import { logoutUser, userSessionChangeState } from '../actions/userSession'
import { SUPPORT_LINK } from '../api/config';

const DrawerItem = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.drawerItemContainer, props.containerStyle]}
            onPress={() => {
                if (props.onPress && typeof props.onPress == 'function') props.onPress()
            }}>
            <Text style={[styles.itemText, props.titleStyle]}>{props.title}</Text>
            {props.loading &&
                <ActivityIndicator
                    animating={props.loading}
                    size={'small'}
                    color={colors.red}
                    style={[{ marginLeft: 5 }]}
                />
            }
        </TouchableOpacity>
    )
}

const DrawerComponent = (props) => {

    const { navigation } = props

    const dispatch = useDispatch()

    const { currentUser } = useSelector((state) => state.userSession)

    const navigateToNext = (nextRoute) => {
        navigation.closeDrawer()
        navigation.navigate(nextRoute)
    }

    return (
        <ScrollView
            bounces={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.drawerContainer}>
                <View style={styles.drawerHeader}>
                    <Text>Vendor Drawer</Text>
                </View>
                <DrawerItem
                    title={'About this app'}
                    containerStyle={{ marginTop: 5 }}
                    onPress={() => {
                        navigateToNext('AboutUsScreen', true)
                    }}
                />
                <DrawerItem
                    title={'Log Out'}
                    containerStyle={{ marginTop: 5 }}
                    onPress={async () => {
                        try {
                            await logoutAPI()
                        } catch (error) {
                            console.log('logoutAPI-error-->', error)
                        } finally {
                            dispatch(logoutUser())
                        }
                    }}
                />
                <Text style={styles.rightStyle}>© 2021 All Rights Reserved | Vendor</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
    },
    drawerHeader: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C2C2C2'
    },
    drawerItemContainer: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 29,
    },
    itemText: {
        color: colors.inputTextColor,
        fontSize: 17,
        fontFamily: RobotoBold,
        marginLeft: 12
    },
    logoutText: {
        color: '#C4C4C4',
        marginTop: 60,
        fontFamily: RobotoBold,
        fontSize: 17,
        marginLeft: 29,
    },
    rightStyle: {
        marginTop: 10,
        marginBottom: 30,
        width: '77%',
        fontSize: 11,
        fontFamily: RobotoBold,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#AEAEAE'
    },
})

export default DrawerComponent