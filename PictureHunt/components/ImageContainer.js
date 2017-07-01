import React from 'react';
import { Dimensions, Image, View } from 'react-native';

export default class ImageContainer extends React.Component {
  render() {
    var { height, width } = Dimensions.get('window');
    return (
      <View>
        <Image
          style={{marginTop: 15, height: width, width: width}}
          source={require('../images/PortlandTest.jpg')} 
        />
      </View>
    );
  }
}