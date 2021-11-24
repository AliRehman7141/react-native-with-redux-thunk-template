import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import colors from "../utils/colors";

const Loader = (props) => {
    const { loading, style, containerStyle, color, size } = props

    if (loading)
        return (
            <View style={[styles.container, containerStyle]}>
                {loading &&
                    <ActivityIndicator
                        animating={loading}
                        size={size ? size : 'large'}
                        color={color ? color : colors.green}
                        style={[{ marginLeft: 5 }, style ? style : {}]}
                    />
                }
            </View>
        )
    else return null
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: (colors.white + '30'),
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Loader