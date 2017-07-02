import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ImageContainer from './ImageContainer';
import FeedbackContainer from './FeedbackContainer';
import imageData from '../images/imageData';

var { height, width } = Dimensions.get('window');

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      currentImage: 0
    };

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress() {
    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log('lat: ' + lat)
        console.log('long: ' + long)
        
        this.setState({
          latitude: lat,
          longitude: long
        });
      },
      (err) => {
          console.log(err);
          this.setState({
            latitude: null,
            longitude: null,
            error: err
          });
        },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    console.log(imageData);
    return (
      <View>
        <Text
          style={styles.header}
        >
          Picture Hunt
        </Text>
        <ImageContainer
          imgName={imageData[this.state.currentImage]['name']}
        />
        <FeedbackContainer
          onButtonPress={this.handleButtonPress}
          lat={this.state.latitude}
          long={this.state.longitude}
          error={this.state.error}
        />
      </View>
    );
  }
}

const styles = {
  header: {
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 45
  }
};