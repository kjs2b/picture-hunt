import React from 'react';
import { Text, Dimensions, Image, View } from 'react-native';

export default class ImageContainer extends React.Component {
  render() {
    var { height, width } = Dimensions.get('window');
    var img = require('../images/80.jpg');

    return (
      <View>
        <Image
          style={{marginTop: 15, height: width, width: width}}
          source={img}
        />
      </View>
    );
  }
}