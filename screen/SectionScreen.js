import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, SectionList} from 'react-native';

const DATA_SECTIONS = [
  {title: 'D', data: ['d', 'dd', 'ddd', 'dddd']},
  {title: 'A', data: ['a', 'aa', 'aaa', 'aaaaa....hmmmmm']},
  {title: 'B', data: ['b', 'bb', 'bbb', 'bbbb']},
  {title: 'V', data: ['v', 'vv', 'vvv', 'vvvv']},
  {title: 'U', data: ['u', 'uu', 'uuu', 'uuuu']},
  {title: 'p', data: ['op', 'sd', 'df']},
  {title: 'f', data: ['bhai', 's', 'fg']},
  {title: 'o', data: ['bolte', 'ds', 'gh']},
];
const renderItem = ({item, index}) => {
  return <Text style={styles.itemStyle}>{item}</Text>;
};
const renderHeader = ({section}) => {
  return <Text style={styles.sectionHeader}>{section.title}</Text>;
};
export default class SectionListScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA_SECTIONS}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    padding: 8,
    fontSize: 25,
    height: 50,
  },
  sectionHeader: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
});
