import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class FeedbackContainer extends React.Component {
  render() {
    return (
      <View>
        <Text>Feedback & Button Here</Text>
        <TouchableHighlight
          onPress={() => console.log('Button pressed!')}
          style={styles.buttonStyle}
        >
          <Text>I found it!?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5
  }
}