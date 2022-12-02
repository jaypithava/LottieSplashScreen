import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  Pressable,
  Platform,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {images} from '../../assets';

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    return true;
  }
};

const requestExternalWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  } else {
    return true;
  }
};

const captureImage = async type => {
  let options = {
    mediaType: type,
    maxWidth: 300,
    maxHeight: 550,
    quality: 1,
    videoQuality: 'low',
    durationLimit: 30, //Video max duration in seconds
    saveToPhotos: true,
  };
  let isCameraPermitted = await requestCameraPermission();
  let isStoragePermitted = await requestExternalWritePermission();
  if (isCameraPermitted && isStoragePermitted) {
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
    });
  }
};

const chooseFile = type => {
  let options = {
    mediaType: type,
    maxWidth: 300,
    maxHeight: 550,
    quality: 1,
  };
  launchImageLibrary(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      alert('User cancelled camera picker');
      return;
    } else if (response.errorCode == 'camera_unavailable') {
      alert('Camera not available on device');
      return;
    } else if (response.errorCode == 'permission') {
      alert('Permission not satisfied');
      return;
    } else if (response.errorCode == 'others') {
      alert(response.errorMessage);
      return;
    }
  });
};

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={onImageLibraryPress}>
          <Image style={styles.buttonIcon} source={images.image} />
          <Text style={styles.buttonText}>Library</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onCameraPress}>
          <Image style={styles.buttonIcon} source={images.camera} />
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  buttons: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
