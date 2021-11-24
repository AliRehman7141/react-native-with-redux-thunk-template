import React, { useState, useRef } from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Pressable,
} from "react-native";
import messaging from '@react-native-firebase/messaging';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from "react-redux";

import Loader from '../../../components/Loader'
import InputField from '../../../components/InputField'
import Button from '../../../components/Button'
import Header from '../../../components/Header'

import { loginAPI } from '../../../api/methods/auth'
import { userSessionChangeState } from '../../../actions/userSession'
import { BackIcon } from '../../../assets/icons'
import { showErrorMsg } from "../../../utils/flashMessage";
import colors from "../../../utils/colors";

import styles from "./styles";

const LoginScreen = (props) => {

    const { navigation } = props

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const { showBack } = useSelector((state) => state.userSession)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [email, emailchange] = useState("");
    const [password, setPassword] = useState("");
    const [secureTypePassword, setSecureTypePassword] = useState(true);

    const onSignInPress = async () => {
        if (email === "") {
            showErrorMsg("Email Id / Username is required");
        } else if (email.includes('@') && (/^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/).test(email.trim()) == false) {
            showErrorMsg('Email format is invalid')
        } else if (password === "") {
            showErrorMsg("Enter password");
        } else {
            fetchFcmToken()
        }
    };

    const signInBtn = async (_fcmtoken) => {
        //for template only remove after real time apis
        dispatch(userSessionChangeState({
            isSignedIn: true
        }))
        // try {
        //     setLoading(true)
        //     const response = await loginAPI({
        //         "email": email.toLowerCase(),
        //         "password": password,
        //         'token': _fcmtoken
        //     })
        //     setLoading(false)
        // } catch (error) {
        //     showErrorMsg(error?.response?.data?.message)
        //     console.log('loginAPI-error-->', error)
        // } finally {
        //     setLoading(false)
        // }
    }

    const fetchFcmToken = () => {
        messaging().hasPermission().then((hasPermission) => {
            console.log('fetchFcmToken-hasPermission', hasPermission)
            messaging().getToken().then((fcmToken) => {
                if (fcmToken) {
                    signInBtn(fcmToken)
                    console.log('Firebase token: ' + JSON.stringify(fcmToken))
                } else {
                    // user doesn't have a device token yet
                    console.log('Firebase token: else' + JSON.stringify(fcmToken))
                }
            }).catch(error => {
                console.log('Firebase getToken error: ' + JSON.stringify(error))
                console.log('Firebase getToken error: ' + error)
            })
        }).catch(error => {
            console.log('Firebase hasPermission error: ' + JSON.stringify(error))
        })
    }

    return (
        <SafeAreaView style={styles.safeStyle}>
            <Header
                hearderText={'SIGN IN'}
                leftButtonIconStyle={{ width: 18, height: 18 }}
                {...showBack ? {
                    leftIcon: BackIcon,
                    onLeftAction: () => {
                        dispatch(userSessionChangeState({
                            isSignedIn: true,
                        }))
                    },
                    leftButtonIconStyle: { width: 18, height: 18 }
                } : {}}
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.innerContainer}>
                    <InputField
                        fieldRef={emailRef}
                        inputHeading={'Email Id / Username'}
                        value={email}
                        textContentType={'emailAddress'}
                        autoComplete={'email'}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        returnKeyType={'next'}
                        onChangeText={(text) => {
                            emailchange(text.toLocaleLowerCase())
                        }}
                        onSubmitEditing={() => {
                            passwordRef?.current?.focus()
                        }}
                    />
                    <InputField
                        fieldRef={passwordRef}
                        showRightIcon={true}
                        secureTextEntry={secureTypePassword}
                        inputHeading={'Password'}
                        autoCapitalize={'none'}
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        onRightPress={() => {
                            setSecureTypePassword(!secureTypePassword)
                        }}
                    />
                    <Pressable
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => {
                            navigation.navigate("ForgotPasswordScreen")
                        }}>
                        <Text style={styles.fogretPasswordText}>Forget Password?</Text>
                    </Pressable>
                    <Button
                        text={'Sign in'}
                        textStyle={styles.btnText}
                        backgroundColorStyle={styles.btnContainer}
                        clickAction={onSignInPress}
                    />
                    <View style={styles.rowContainer}>
                        <View style={styles.horizontalDivider} />
                        <Text style={styles.orText}>OR</Text>
                        <View style={styles.horizontalDivider} />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignupScreen')
                        }}
                        style={styles.signUpTextTouch}>
                        <Text style={[styles.signUpText, { color: colors.tintColor, }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </SafeAreaView>
    );
};

export default LoginScreen;
