import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class FeedbackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        {/*<Text>Lat: {this.props.lat}, Long: {this.props.long}</Text>*/}
        <Text style={{fontSize: 20}}>{this.props.feedback}</Text>
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