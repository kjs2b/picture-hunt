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
      currentNumber: 0,
      currentImage: null
    };

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  ComponentDidMount() {
    var currImg;
    if (this.state.currentNumber = 0) currImg = require('../images/10.jpg')
    else if (this.state.currentNumber = 1) currImg = require('../images/20.jpg')
    else if (this.state.currentNumber = 2) currImg = require('../images/30.jpg')
    else if (this.state.currentNumber = 3) currImg = require('../images/40.jpg')
    else if (this.state.currentNumber = 4) currImg = require('../images/50.jpg')
    else if (this.state.currentNumber = 5) currImg = require('../images/60.jpg')
    else if (this.state.currentNumber = 6) currImg = require('../images/70.jpg')
    else if (this.state.currentNumber = 7) currImg = require('../images/80.jpg')
    else if (this.state.currentNumber = 8) currImg = require('../images/90.jpg')
    else if (this.state.currentNumber = 9) currImg = require('../images/100.jpg')
    else if (this.state.currentNumber = 10) currImg = require('../images/110.jpg')
    else if (this.state.currentNumber = 11) currImg = require('../images/120.jpg')
    else if (this.state.currentNumber = 12) currImg = require('../images/130.png')
    else if (this.state.currentNumber = 13) currImg = require('../images/140.jpg')
    else if (this.state.currentNumber = 14) currImg = require('../images/150.jpg')
    else if (this.state.currentNumber = 15) currImg = require('../images/160.jpg')
    else if (this.state.currentNumber = 16) currImg = require('../images/170.png')
    else if (this.state.currentNumber = 17) currImg = require('../images/180.jpg')
    else if (this.state.currentNumber = 18) currImg = require('../images/190.jpg')

    this.setState({
      currentImage: currImg
    });
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
          //imgName={imageData[this.state.currentImage]['name']}
          img={require('../images/10.jpg')}
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