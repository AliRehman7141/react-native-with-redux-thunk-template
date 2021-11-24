import React, { FC, LegacyRef } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    TextInputProps,
} from 'react-native'

import colors from '../utils/colors';
import { RobotoBold } from '../assets/fonts'
import { ShowPasswordIcon, HidePasswordIcon } from '../assets/icons';

interface myProps {
    customStylingHeading?: object,
    inputHeading?: string,
    inputHeadingSecond?: string,
    customStyle?: object,
    showRightText?: boolean,
    showRightIcon?: boolean,
    showRightLoading?: boolean,
    customInputStyle?: object,
    fieldRef?: LegacyRef<any> | undefined,
    onRightPress?: (() => void) | undefined,
}

type combinedProps = TextInputProps & myProps

const InputField: FC<combinedProps> = (props) => {

    const {
        customStylingHeading,
        inputHeading,
        inputHeadingSecond,
        customStyle,
        showRightText,
        showRightIcon,
        showRightLoading,
        customInputStyle,
        fieldRef = { current: null },
        onRightPress,
        secureTextEntry = false,
    } = props

    return (
        <View>
            <Text style={[style.inputHeading, customStylingHeading]}>
                {inputHeading}
                <Text style={style.secondHeadingTextStyle}>
                    {inputHeadingSecond}
                </Text>
            </Text>
            <View style={[style.mainContainer, customStyle]}>
                <TextInput
                    {...props}
                    ref={fieldRef}
                    style={[style.inputField, { width: (!showRightText && !showRightIcon && !showRightLoading) ? '97%' : '70%' }, customInputStyle]}
                    secureTextEntry={secureTextEntry}
                />
                {showRightText && <Text style={style.rightText}>Not Available</Text>}
                {showRightLoading &&
                    <ActivityIndicator
                        animating={true}
                        size={'small'}
                        color={colors.green}
                    />
                }
                {showRightIcon &&
                    <TouchableOpacity onPress={() => onRightPress()}>
                        <Image
                            source={secureTextEntry ? ShowPasswordIcon : HidePasswordIcon}
                            style={style.rightIcon}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        marginTop: 9,
        paddingLeft: 10,
        paddingRight: 10,
        height: 42,
        backgroundColor: colors.inputBackground,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row'
    },
    inputField: {
        width: '70%',
        fontSize: 16,
        color: colors.inputTextColor,
        fontFamily: RobotoBold,
    },
    rightText: {
        fontSize: 12,
        color: colors.lightRed,
    },
    rightIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        tintColor: '#808080'
    },
    inputHeading: {
        fontSize: 14,
        color: colors.inputTextColor,
        marginTop: 12,
        fontFamily: RobotoBold
    },
    secondHeadingTextStyle: {
        fontSize: 11,
        fontFamily: RobotoBold,
        color: colors.lightGrey
    }
});

export default InputField