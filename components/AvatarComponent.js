
import React, { useState, useEffect } from 'react';
import {
    Image,
    ActivityIndicator,
    View,
    StyleSheet
} from 'react-native';

import colors from "../utils/colors";

const AvatarComponent = (props) => {
    const { source, size, defaultSource, style, imageStyle } = props

    const [loading, setLoading] = useState(false)
    const [imageSource, setImageSource] = useState(source)

    useEffect(() => {
        setImageSource(source);
    }, [source]);

    return (
        <View {...props} style={[{ overflow: 'hidden' }, style]}>
            <Image
                style={[styles.imageStyle, imageStyle]}
                source={
                    imageSource
                        ? imageSource.uri
                            ? { ...imageSource, cache: 'force-cache' }
                            : { uri: imageSource, cache: 'force-cache' }
                        : defaultSource
                            ? defaultSource
                            : null
                }
                onLoadStart={() => {
                    setLoading(true)
                }}
                onLoadEnd={() => {
                    setLoading(false)
                }}
            />
            <View style={styles.loaderContainer}>
                <ActivityIndicator animating={loading} color={colors.white} size={size ? size : 'large'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    loaderContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AvatarComponent