import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import StockButton from './StockButton.js';
import API from './api.js';

class theweather extends Component {
  constructor(props) {
    super(props);
    this.changeIndex = this.changeIndex.bind(this);
    this.state = {
      WeatherName: 'City: N/A',
      WeatherMain: 'Weather: N/A',
      WeatherDescription: 'Description: N/A',
    };
    this.changeIndex('Bangkok', '1608132');
  }

  changeIndex(WeatherName, WeatherMain){
    API(WeatherMain).then((data)=>{
      this.setState({...data, WeatherName, WeatherMain});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.WeatherName}>
            {this.state.WeatherName}
          </Text>
          <Text style={styles.WeatherMain}>
            {this.state.WeatherMain}
          </Text>
          <Text style={styles.WeatherDescription}>
            {this.state.WeatherDescription}
          </Text>
        </View>

        <View style={styles.footer}>
          <StockButton name="Bangkok" code="1608132" onPress={this.changeIndex}/>
          <StockButton name="Tokyo" code="1850147" onPress={this.changeIndex}/>
          <StockButton name="Saint Petersburg" code="519690" onPress={this.changeIndex}/>
          <StockButton name="Singapore" code="1880252" onPress={this.changeIndex}/>
          <StockButton name="New York" code="5128581" onPress={this.changeIndex}/>
          <StockButton name="Osaka" code="1853908" onPress={this.changeIndex}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  WeatherName: {
    fontSize: 25
  },
  WeatherMain: {
    fontSize: 60
  },
  WeatherDescription: {
    fontSize: 30
  },
  button: {
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  }
});

AppRegistry.registerComponent('theweather', () => theweather);
