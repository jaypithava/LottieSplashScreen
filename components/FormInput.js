import {Text, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const FormInput = props => {
  const {placeholder, label, error} = props;
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>{label}</Text>
        {error ? (
          <Text style={{fontSize: 16, color: 'red'}}>{error}</Text>
        ) : null}
      </View>
      <TextInput
        {...props}
        placeholder={placeholder}
        style={styles.emailText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  emailText: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 40,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 8,
    marginBottom: 20,
  },
});

export default FormInput;
