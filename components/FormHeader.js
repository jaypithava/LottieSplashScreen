import {View, Text, StyleSheet, Animated} from 'react-native';
import React from 'react';

const FormHeader = ({
  leftHeading,
  rightHeading,
  subHeading,
  leftHeaderTranslateX = 40,
  rightHeaderTranslateY = -20,
  rightHeaderOpacity = 0,
}) => {
  return (
    <>
      <View style={styles.normalView}>
        <Animated.Text
          style={[
            styles.textStyle,
            {transform: [{translateX: leftHeaderTranslateX}]},
          ]}>
          {leftHeading}{' '}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.textStyle,
            {opacity: rightHeaderOpacity},
            {transform: [{translateX: rightHeaderTranslateY}]},
          ]}>
          {rightHeading}
        </Animated.Text>
      </View>
      <Text style={styles.subText}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  normalView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1b1b33',
  },
  subText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#1b1b33',
  },
});

export default FormHeader;
