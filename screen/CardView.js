import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default class CardViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=20';
    const res = await fetch(apiUrl);
    const data = await res.json();
    this.setState({items: data});
  };

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.cardView}
        onPress={() =>
          this.props.navigation.navigate('ItemClick', {
            productId: item.id,
            productName: item.title,
            productImage: item.url,
            thumbnailUrl: item.thumbnailUrl,
          })
        }>
        <Image style={styles.cardImage} source={{uri: item.url}} />
        <Text style={styles.cardText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    let {items} = this.state;
    if (items.length === 0) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <FlatList
        style={styles.container}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    padding: 10,
  },
  cardView: {
    borderColor: 'white',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: 'black',
    shadowOpacity: 2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
