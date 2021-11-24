import React, { useState } from "react";
import {
    View,
    SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Loader from '../../../components/Loader'
import InputField from '../../../components/InputField'
import Button from '../../../components/Button'
import Header from '../../../components/Header'

import { forgetPasswordAPI } from '../../../api/methods/auth'
import styles from "./styles";
import { BackIcon } from '../../../assets/icons'
import { showErrorMsg } from "../../../utils/flashMessage";

const ForgotPasswordScreen = (props) => {

    const { navigation } = props

    const [loading, setLoading] = useState(false);
    const [email, emailchange] = useState("");

    const onSendPassword = async () => {
        if (email === "") {
            showErrorMsg("Email is required");
        } else if ((/^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/).test(email.trim()) == false) {
            showErrorMsg('Email format is invalid')
        } else {
            forgetPassword()
        }
    };

    const forgetPassword = async () => {
        try {
            setLoading(true)
            const response = await forgetPasswordAPI({
                "email": email.toLowerCase(),
            })
            setLoading(false)
        } catch (error) {
            if (error?.response?.data?.message) showErrorMsg(error?.response?.data?.message)
            else showErrorMsg(error?.message)
            console.log('loginAPI-error-->', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={styles.safeStyle}>
            <Header
                hearderText={'FORGET PASSWORD'}
                leftButtonIconStyle={{ width: 18, height: 18 }}
                leftIcon={BackIcon}
                onLeftAction={() => { navigation.goBack() }}
                leftButtonIconStyle={{ width: 18, height: 18 }}
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.innerContainer}>
                    <InputField
                        inputHeading={'Email'}
                        value={email}
                        textContentType={'emailAddress'}
                        autoComplete={'email'}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        onChangeText={(text) => {
                            emailchange(text)
                        }}
                    />
                    <Button
                        text={'Send Password'}
                        textStyle={styles.btnText}
                        backgroundColorStyle={styles.btnContainer}
                        clickAction={onSendPassword}
                    />
                </View>
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;
