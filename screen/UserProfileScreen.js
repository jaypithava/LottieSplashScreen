import {View, StyleSheet, Button} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'react-native-image-picker';
import {ImagePickerAvatar} from '../components/utils/ImagePickerAvatar';
import {ImagePickerHeader} from '../components/utils/ImagePickerHeader';
import {ImagePickerModal} from '../components/utils/ImagePickerModal';

const UserProfileScreen = () => {
  const [pickerResponse, setPickerResponse] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation();

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  const onLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ImagePickerHeader />
      <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
      <Button onPress={() => onLogout()} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserProfileScreen;
