import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ImageContainer from './ImageContainer';
import FeedbackContainer from './FeedbackContainer';

var { height, width } = Dimensions.get('window');

export default class MainContainer extends React.Component {
  render() {
    
    return (
      <View>
        <Text
          style={styles.header}
        >
          Picture Hunt
        </Text>
        <ImageContainer
        />
        <FeedbackContainer/>
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