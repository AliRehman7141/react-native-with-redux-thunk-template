import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
} from "react-native";
import { useSelector } from 'react-redux'
import moment from 'moment'
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from "../../../utils/colors";
import styles from "./styles";
import Header from '../../../components/Header'
import Loader from '../../../components/Loader'

const NotificationsScreen = (props) => {

    const { navigation } = props

    const { notifications } = useSelector((state) => state.notifications)

    const [loading, setLoading] = useState(false);

    const renderNotificationItem = ({ item, index }) => {
        return (

            <View
                activeOpacity={1}
                style={styles.itemStyle}>
                <View style={styles.itemInnerMainContainer}>
                    <View style={styles.cointImageContainer}>
                        <Text style={index === 0 ? styles.coinNameRead : styles.coinNameUnRead}>{item.title}</Text>
                    </View>
                    <Text style={styles.description}>{item.message}</Text>
                    <Text style={styles.itemDate}>{moment(item.created_at).fromNow()}</Text>
                </View>
            </View>

        );
    };

    return (
        <SafeAreaView style={styles.safeStyle}>
            <Header
                hearderText={'NOTIFICATIONS'}
                leftIconChildren={<AntDesign name={"menu"} size={22} color={colors.black} />}
                leftButtonIconStyle={{ width: 18, height: 18 }}
                onLeftAction={() => { navigation.goBack() }}
            />
            <View style={styles.flatListContainer}>
                <FlatList
                    listKey={notifications}
                    data={notifications}
                    renderItem={renderNotificationItem}
                    keyExtractor={(item, index) => `notifications${item.id}_${index}`}
                    contentContainerStyle={{ width: '100%', paddingBottom: 50 }}
                />
            </View>
            <Loader loading={loading} />
        </SafeAreaView>
    );
};

export default NotificationsScreen;
