import React, { useState } from "react";
import {
    SafeAreaView,
} from "react-native";
import Feather from 'react-native-vector-icons/Feather';

import styles from "./styles";

import Header from '../../../components/Header'
import Loader from '../../../components/Loader'

import { NotificationIcon } from '../../../assets/icons'
import colors from '../../../utils/colors'

const MarketScreen = (props) => {

    const { navigation } = props

    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView style={styles.safeStyle}>
            <Header
                hearderText={'First Screen'}
                leftIconChildren={<Feather name={"menu"} size={22} color={colors.black} />}
                onLeftAction={() => { navigation.toggleDrawer() }}
                rightIcon={NotificationIcon}
                onRightAction={() => {
                    navigation.navigate('NotificationsScreen')
                }}
            />
            <Loader loading={loading} />
        </SafeAreaView>
    );
};
export default MarketScreen;
