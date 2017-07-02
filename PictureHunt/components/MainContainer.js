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
      currentImage: require('../images/10.jpg'),
      currentImageLat: 45.5105,
      currentImageLong: -122.6492,
      feedback: 'Welcome to Photo Hunt! Your challenge is to locate each photo.',
      numAttempts: 0
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
    var lat;
    var long;
      navigator.geolocation.getCurrentPosition((position) => {
          lat = position.coords.latitude;
          long = position.coords.longitude;
          console.log('lat: ' + lat)
          console.log('long: ' + long)
          
          this.setState({
            latitude: lat,
            longitude: long
          });

          if((Math.abs(this.state.currentImageLat - lat) < .001 && Math.abs(this.state.currentImageLong - long) < .001) || (this.state.numAttempts > 75)) {
            this.setState({feedback: 'You found it! On to the next one!', numAttempts: 0});
            if (this.state.currentNumber === 0) this.setState({ currentNumber: 1, currentImage: require('../images/20.jpg'), currentImageLat: 45.5087, currentImageLong: -122.6517 });
            else if (this.state.currentNumber === 1) this.setState({ currentNumber: 2, currentImage: require('../images/30.jpg'), currentImageLat: 45.5086, currentImageLong: -122.6473 });
            else if (this.state.currentNumber === 2) this.setState({ currentNumber: 3, currentImage: require('../images/40.jpg'), currentImageLat: 45.5067, currentImageLong: -122.6494 });
            else if (this.state.currentNumber === 3) this.setState({ currentNumber: 4, currentImage: require('../images/50.jpg'), currentImageLat: 45.5051, currentImageLong: -122.6534 });
            else if (this.state.currentNumber === 4) this.setState({ currentNumber: 5, currentImage: require('../images/60.jpg'), currentImageLat: 45.5055, currentImageLong: -122.6659 });
            else if (this.state.currentNumber === 5) this.setState({ currentNumber: 6, currentImage: require('../images/70.jpg'), currentImageLat: 45.5043, currentImageLong: -122.6684 });
            else if (this.state.currentNumber === 6) this.setState({ currentNumber: 7, currentImage: require('../images/80.jpg'), currentImageLat: 45.5075, currentImageLong: -122.6666 });
            else if (this.state.currentNumber === 7) this.setState({ currentNumber: 8, currentImage: require('../images/90.jpg'), currentImageLat: 45.5083, currentImageLong: -122.6663 });
            else if (this.state.currentNumber === 8) this.setState({ currentNumber: 9, currentImage: require('../images/100.jpg'), currentImageLat: 45.5115, currentImageLong: -122.6683 });
            else if (this.state.currentNumber === 9) this.setState({ currentNumber: 10, currentImage: require('../images/110.jpg'), currentImageLat: 45.4995, currentImageLong: -122.6840 });
            else if (this.state.currentNumber === 10) this.setState({ currentNumber: 11, currentImage: require('../images/120.jpg'), currentImageLat: 45.4834, currentImageLong: -122.6830 });
            else if (this.state.currentNumber === 11) this.setState({ currentNumber: 12, currentImage: require('../images/140.jpg'), currentImageLat: 45.5191, currentImageLong: -122.7054 });
            else if (this.state.currentNumber === 12) this.setState({ currentNumber: 13, currentImage: require('../images/150.jpg'), currentImageLat: 45.5193, currentImageLong: -122.7070 });
            else if (this.state.currentNumber === 13) this.setState({ currentNumber: 14, currentImage: require('../images/160.jpg'), currentImageLat: 45.5213, currentImageLong: -122.7014 });
            //else if (this.state.currentNumber === 14) this.setState({ currentNumber: 15, currentImage: require('../images/170.png'), currentImageLat: , currentImageLong:  });
            else if (this.state.currentNumber === 14) this.setState({ currentNumber: 15, currentImage: require('../images/180.jpg'), currentImageLat: 45.5188, currentImageLong: -122.6790 });
            else if (this.state.currentNumber === 15) this.setState({ currentNumber: 16, currentImage: require('../images/190.jpg'), currentImageLat: 45.5256, currentImageLong: -122.6660 });
            else if (this.state.currentNumber === 16) this.setState({ feedback: 'The end. Happy 6-7 month anniversary!   I love you.' });
          } else {
            this.setState({feedback: 'Not there yet. Keep searching!', numAttempts: this.state.numAttempts + 1});
          }
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
          Photo Hunt
        </Text>
        <ImageContainer
          img={image}
        />
        <FeedbackContainer
          onButtonPress={this.handleButtonPress}
          lat={this.state.latitude}
          long={this.state.longitude}
          feedback={this.state.feedback}
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