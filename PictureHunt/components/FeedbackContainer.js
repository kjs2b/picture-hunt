import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class FeedbackContainer extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => console.log('Button pressed!')}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>I found it!?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 110
  },
  buttonText: {
    fontSize: 30
  }
}