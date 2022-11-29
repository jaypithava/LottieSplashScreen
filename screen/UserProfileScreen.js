import {
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfileScreen = () => {
  const [email, setEmail] = React.useState('');
  const navigation = useNavigation();

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      setEmail(value);
    } catch (e) {}
  };

  useEffect(() => {
    readData();
  }, []);

  const onLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.image, {borderColor: 'blue', borderWidth: 3}]}>
        <Image
          source={{
            uri: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png',
          }}
          style={styles.profileImg}
        />
      </TouchableHighlight>
      <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 20}}>
        Your Email :
      </Text>
      <Text style={styles.emailText}>{email}</Text>
      <Button onPress={() => onLogout()} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'red',
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 40,
  },
  emailText: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    backgroundColor: 'red',
    width: '50%',
    height: 30,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 8,
    overflow: 'hidden',
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default UserProfileScreen;
