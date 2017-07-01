import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class FeedbackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null
    };
  }
  render() {
    return (
      <View>
        <Text>Lat: {this.props.lat}</Text>
        <Text>Long: {this.props.long}</Text>
        <Text>Error: {this.props.error}</Text>
        <TouchableHighlight
          onPress={() => {
            console.log('Button pressed!');
            this.props.onButtonPress();
          }}
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
    marginTop: 50
  },
  buttonText: {
    fontSize: 30
  }
}