import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class DashBoard extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          DashBoard
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
