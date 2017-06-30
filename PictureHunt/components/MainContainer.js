import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ImageContainer from './ImageContainer';
import FeedbackContainer from './FeedbackContainer';

export default class MainContainer extends React.Component {
  render() {
    //var { height, width } = Dimensions.get('window');
    return (
      <View>
        <Text>Hello Love</Text>
        <ImageContainer
          //style={{height: width, width: width}}
        />
        <FeedbackContainer/>
      </View>
    );
  }
}