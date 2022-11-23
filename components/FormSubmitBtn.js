import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const FormSubmitBtn = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(27,27,51,1)',
  },
});

export default FormSubmitBtn;
