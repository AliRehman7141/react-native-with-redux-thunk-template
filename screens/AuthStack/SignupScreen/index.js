import React, { useState, useRef } from "react";
import {
    View,
    SafeAreaView,
    Pressable,
    Text,
    Linking,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import messaging from '@react-native-firebase/messaging';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import InputField from '../../../components/InputField'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import { BackIcon } from '../../../assets/icons'

import styles from "./styles";
import { sigupAPI } from '../../../api/methods/auth'
import Loader from '../../../components/Loader'
import { showErrorMsg } from "../../../utils/flashMessage";
import colors from "../../../utils/colors";
import { EULA_LINK, PRIVACY_POLICY_LINK } from "../../../api/config";

const SignupScreen = (props) => {

    const { navigation } = props

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordConfirmRef = useRef(null)

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [secureTypePassword, setSecureTypePassword] = useState(true);
    const [secureTypePasswordConfirm, setSecureTypePasswordConfirm] = useState(true);
    const [isEULAAgreed, setIsEULAAgreed] = useState(false)

    const onSignupPress = async () => {
        if (name === "") {
            showErrorMsg("Name is required");
        } else if (email === "") {
            showErrorMsg("Email is required");
        } else if ((/^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/).test(email.trim()) == false) {
            showErrorMsg('Email format is invalid')
        } else if (password === "") {
            showErrorMsg("Password is required");
        } else if (password.length < 6) {
            showErrorMsg("Password must be atleast 6 character");
        } else if (passwordConfirm != password) {
            showErrorMsg("Confirm password not match with password");
        } else if (!isEULAAgreed) {
            showErrorMsg('Please accept EULA agreement')
        } else {
            fetchFcmToken()
        }
    };

    const fetchFcmToken = () => {
        messaging().hasPermission().then(hasPermission => {
            messaging().getToken().then(fcmToken => {
                if (fcmToken) {
                    signUpApi(fcmToken)
                    console.log('Firebase token: ' + JSON.stringify(fcmToken))
                } else {
                    // user doesn't have a device token yet
                    console.log('Firebase token: ' + JSON.stringify(fcmToken))
                }
            }).catch(error => {
                console.log('Firebase getToken error: ' + JSON.stringify(error))
                console.log('Firebase getToken error: ' + error)
            })
        }).catch(error => {
            console.log('Firebase hasPermission error: ' + JSON.stringify(error))
        })
    }

    const signUpApi = async (_fcmtoken) => {
        //for template only remove after real time apis
        dispatch(userSessionChangeState({
            isSignedIn: true
        }))

        // try {
        //     setLoading(true)
        //     const response = await sigupAPI({
        //         "name": name,
        //         "email": email.toLowerCase(),
        //         "password": password,
        //         'token': _fcmtoken
        //     })
        //     console.log('signupAPI-response', response.status)
        // } catch (error) {
        //     showErrorMsg(error?.response?.data?.message)
        //     console.log('signupAPI-error-->', error)
        // } finally {
        //     setLoading(false)
        // }
    }

    return (
        <SafeAreaView style={styles.safeStyle}>
            <Header
                hearderText={'SIGN UP'}
                leftIcon={BackIcon}
                onLeftAction={() => { navigation.goBack() }}
                leftButtonIconStyle={{ width: 18, height: 18 }}
            />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.innerContainer}>
                    <InputField
                        fieldRef={nameRef}
                        inputHeading={'Name'}
                        value={name}
                        autoCapitalize={'words'}
                        autoComplete={'name'}
                        returnKeyType={'next'}
                        onChangeText={(text) => {
                            setName(text)
                        }}
                        returnKeyType={'next'}
                        onSubmitEditing={() => {
                            emailRef?.current?.focus()
                        }}
                    />
                    <InputField
                        fieldRef={emailRef}
                        inputHeading={'Email ID'}
                        value={email}
                        textContentType={'emailAddress'}
                        autoComplete={'email'}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        returnKeyType={'next'}
                        onChangeText={(text) => {
                            setEmail(text.toLocaleLowerCase())
                        }}
                        onSubmitEditing={() => {
                            usernameRef?.current?.focus()
                        }}
                    />
                    <InputField
                        fieldRef={passwordRef}
                        showRightIcon={true}
                        secureTextEntry={secureTypePassword}
                        inputHeading={'Password'}
                        value={password}
                        returnKeyType={'next'}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        onRightPress={() => {
                            setSecureTypePassword(!secureTypePassword)
                        }}
                        onSubmitEditing={() => {
                            passwordConfirmRef?.current?.focus()
                        }}
                    />
                    <InputField
                        fieldRef={passwordConfirmRef}
                        showRightIcon={true}
                        secureTextEntry={secureTypePasswordConfirm}
                        inputHeading={'Confirm Password'}
                        value={passwordConfirm}
                        onChangeText={(text) => {
                            setPasswordConfirm(text)
                        }}
                        onRightPress={() => {
                            setSecureTypePasswordConfirm(!secureTypePasswordConfirm)
                        }}
                    />

                    <Pressable style={{ width: '100%', flexDirection: 'row', marginTop: 20 }}
                        onPress={() => {
                            setIsEULAAgreed(!isEULAAgreed)
                        }}>
                        <View style={{ width: 25 }}>
                            <FontAwesome name={isEULAAgreed ? "check-square-o" : "square-o"} size={22} color={colors.green} />
                        </View>
                        <Text style={styles.termsText}>
                            {'I agree to'}
                            <Text style={{ color: '#EC6F74' }}
                                onPress={() => {
                                    Linking.openURL(EULA_LINK)
                                }}>
                                {' EULA '}
                            </Text>
                            {'agreement and '}
                            <Text style={{ color: '#EC6F74' }}
                                onPress={() => {
                                    Linking.openURL(PRIVACY_POLICY_LINK)
                                }}>
                                {'Privacy Policy'}
                            </Text>
                        </Text>
                    </Pressable>

                    <Button
                        text={'Sign Up'}
                        textStyle={styles.btnText}
                        backgroundColorStyle={styles.btnContainer}
                        clickAction={onSignupPress}
                    />
                </View>
            </KeyboardAwareScrollView>
            <Loader loading={loading} />
        </SafeAreaView>
    );
};

export default SignupScreen;
