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
      currentImage: require('../images/10.jpg')
    };

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  // ComponentDidMount() {
  //   var currImg;
  //   if (this.state.currentNumber = 0) currImg = require('../images/10.jpg')
  //   else if (this.state.currentNumber = 1) currImg = require('../images/20.jpg')
  //   else if (this.state.currentNumber = 2) currImg = require('../images/30.jpg')
  //   else if (this.state.currentNumber = 3) currImg = require('../images/40.jpg')
  //   else if (this.state.currentNumber = 4) currImg = require('../images/50.jpg')
  //   else if (this.state.currentNumber = 5) currImg = require('../images/60.jpg')
  //   else if (this.state.currentNumber = 6) currImg = require('../images/70.jpg')
  //   else if (this.state.currentNumber = 7) currImg = require('../images/80.jpg')
  //   else if (this.state.currentNumber = 8) currImg = require('../images/90.jpg')
  //   else if (this.state.currentNumber = 9) currImg = require('../images/100.jpg')
  //   else if (this.state.currentNumber = 10) currImg = require('../images/110.jpg')
  //   else if (this.state.currentNumber = 11) currImg = require('../images/120.jpg')
  //   else if (this.state.currentNumber = 12) currImg = require('../images/130.png')
  //   else if (this.state.currentNumber = 13) currImg = require('../images/140.jpg')
  //   else if (this.state.currentNumber = 14) currImg = require('../images/150.jpg')
  //   else if (this.state.currentNumber = 15) currImg = require('../images/160.jpg')
  //   else if (this.state.currentNumber = 16) currImg = require('../images/170.png')
  //   else if (this.state.currentNumber = 17) currImg = require('../images/180.jpg')
  //   else if (this.state.currentNumber = 18) currImg = require('../images/190.jpg')

  //   this.setState({
  //     currentImage: currImg
  //   });
  // }

  handleButtonPress() {
    if (this.state.currentNumber === 0) this.setState({ currentNumber: 1, currentImage: require('../images/20.jpg') });
    else if (this.state.currentNumber === 1) this.setState({ currentNumber: 2, currentImage: require('../images/30.jpg') });
    else if (this.state.currentNumber === 2) this.setState({ currentNumber: 3, currentImage: require('../images/40.jpg') });
    else if (this.state.currentNumber === 3) this.setState({ currentNumber: 4, currentImage: require('../images/50.jpg') });
    else if (this.state.currentNumber === 4) this.setState({ currentNumber: 5, currentImage: require('../images/60.jpg') });
    else if (this.state.currentNumber === 5) this.setState({ currentNumber: 6, currentImage: require('../images/70.jpg') });
    else if (this.state.currentNumber === 6) this.setState({ currentNumber: 7, currentImage: require('../images/80.jpg') });
    else if (this.state.currentNumber === 7) this.setState({ currentNumber: 8, currentImage: require('../images/90.jpg') });
    else if (this.state.currentNumber === 8) this.setState({ currentNumber: 9, currentImage: require('../images/100.jpg') });
    else if (this.state.currentNumber === 9) this.setState({ currentNumber: 10, currentImage: require('../images/110.jpg') });
    else if (this.state.currentNumber === 10) this.setState({ currentNumber: 11, currentImage: require('../images/120.jpg') });
    else if (this.state.currentNumber === 11) this.setState({ currentNumber: 12, currentImage: require('../images/140.jpg') });
    else if (this.state.currentNumber === 12) this.setState({ currentNumber: 13, currentImage: require('../images/150.jpg') });
    else if (this.state.currentNumber === 13) this.setState({ currentNumber: 14, currentImage: require('../images/160.jpg') });
    else if (this.state.currentNumber === 14) this.setState({ currentNumber: 15, currentImage: require('../images/170.png') });
    else if (this.state.currentNumber === 15) this.setState({ currentNumber: 16, currentImage: require('../images/180.jpg') });
    else if (this.state.currentNumber === 16) this.setState({ currentNumber: 17, currentImage: require('../images/190.jpg') });
    //else if (this.state.currentNumber === 17) this.setState({ currentNumber: 18, currentImage: require('../images/200.jpg') });
    
    console.log(this.state.currentNumber);
    console.log(this.state.currentImage);
    //else if (this.state.currentNumber = 1) this.setState({ currentNumber: 2, currentImage: require('../images/30.jpg') })
    //else if (this.state.currentNumber = 2) this.setState({ currentNumber: 3, currentImage: require('../images/40.jpg') })

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
    var image = this.state.currentImage;
    return (
      <View>
        <Text
          style={styles.header}
        >
          Picture Hunt
        </Text>
        <ImageContainer
          img={image}
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