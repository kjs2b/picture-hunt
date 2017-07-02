import React from 'react';
import { Text, Dimensions, Image, View } from 'react-native';

export default class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var { height, width } = Dimensions.get('window');
    //var imgPath = `../images/${this.props.imgName}`;
    //var img = require(this.props.imgName);

    return (
      <View>
        <Image
          style={{marginTop: 15, height: width, width: width}}
          source={this.props.img}
        />
      </View>
    );
  }
}