import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageContainer from './ImageContainer';
import FeedbackContainer from './FeedbackContainer';

export default class MainContainer extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello Love</Text>
        <ImageContainer/>
        <FeedbackContainer/>
      </View>
    );
  }
}