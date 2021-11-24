import React, { useEffect } from "react";
import { Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

import { SplashLogo } from '../../assets/images'
import styles from './styles';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('AfterSplash')
        }, 4000);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={SplashLogo}
                style={styles.splashIcon}
            />
        </SafeAreaView>
    );
};
export default SplashScreen;
