import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const imagePickerOptions = {
    width: 300,
    height: 300,
    quality: 0.2
};

export default ImagePickerModel = (props) => {
    const borderRadius = 13
    const {
        onHideModel,
        showPickerModel,
        handleChoosePhoto
    } = props

    const onChooseFromLibraryPress = () => {
        launchImageLibrary(imagePickerOptions, onImagePickerResponse)
    }

    const onTakePhotoPress = () => {
        console.log('click on camera')
        launchCamera(imagePickerOptions, onImagePickerResponse)
    }

    const onImagePickerResponse = (response) => {
        console.log('click response', response)
        if (handleChoosePhoto && typeof handleChoosePhoto == 'function') handleChoosePhoto(response)
    }

    const onHideModelInner = () => {
        if (onHideModel && typeof onHideModel == 'function') onHideModel()
    }

    return (
        <Modal
            animationType="slide"
            presentationStyle="overFullScreen"
            transparent={true}
            visible={showPickerModel}>
            <View style={[styles.container, styles.modalStyle]}>
                <View style={{ marginBottom: 10, borderRadius: 10, overflow: 'hidden', backgroundColor: 'white', elevation: 24, }}>
                    <TouchableOpacity
                        onPress={() => {
                            onHideModelInner()
                            setTimeout(() => {
                                onChooseFromLibraryPress()
                            }, 1000)
                        }}
                        activeOpacity={0.8}
                        style={styles.actionButtonStyle}>
                        <Text style={{ color: '#3A77F6', padding: 14, fontSize: 20 }}>
                            {'Choose from Library'}
                        </Text>
                    </TouchableOpacity>
                    <View style={{ height: 2, width: '100%' }} />
                    <TouchableOpacity
                        onPress={() => {
                            onHideModelInner()
                            setTimeout(() => {
                                onTakePhotoPress()
                            }, 1000)
                        }}
                        activeOpacity={0.8}
                        style={styles.actionButtonStyle}>
                        <Text style={{ color: '#3A77F6', padding: 14, fontSize: 20 }}>{'Take Photo'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.cancelButtonStyle]}
                    onPress={() => {
                        onHideModelInner()
                    }}>
                    <Text style={{ color: 'red', padding: 14, fontSize: 20 }}>{'Cancel'}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        // backgroundColor: '#00000020'
    },
    modalStyle: {
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        // backgroundColor: '#00000000'
    },

    actionButtonStyle: {
        height: 55,
        backgroundColor: 'white',
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderColor: '#00000020'
    },
    cancelButtonStyle: {
        height: 55,
        backgroundColor: 'white',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 24,
    }
});

