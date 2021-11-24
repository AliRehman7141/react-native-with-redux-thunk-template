import React, { } from "react";
import {
    SafeAreaView,
} from "react-native";

import styles from "./styles";
import Header from '../../../components/Header'
import { BackIcon } from '../../../assets/icons'

const AboutUsScreen = (props) => {

    const { navigation } = props

    return (
        <SafeAreaView style={styles.safeStyle}>
            <Header
                hearderText={'ABOUT'}
                leftIcon={BackIcon}
                onLeftAction={() => { navigation.goBack() }}
            />
        </SafeAreaView>
    );
};
export default AboutUsScreen;
