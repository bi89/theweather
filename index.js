import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import StockButton from './StockButton.js';
import API from './api.js';

class theweather extends Component {
  constructor(props) {
    super(props);
    this.changeIndex = this.changeIndex.bind(this);
    this.state = {
      WeatherName: 'City',
      WeatherMain: 'Weather',
    };
    this.changeIndex('Null', 'Null');
  }

  changeIndex(code){
    API(code).then((data)=>{
      console.log(data);
      this.setState({...data});
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
        </View>

        <View style={styles.footer}>
          <StockButton name="Bangkok" code="1609350" onPress={()=>this.changeIndex("1609350")}/>
          <StockButton name="Tokyo" code="1850147" onPress={()=>this.changeIndex("1850147")}/>
          <StockButton name="Saint Petersburg" code="519690" onPress={()=>this.changeIndex("519690")}/>
          <StockButton name="Singapore" code="1880252" onPress={()=>this.changeIndex("1880252")}/>
          <StockButton name="New York" code="5128581" onPress={()=>this.changeIndex("5128581")}/>
          <StockButton name="Osaka" code="1853908" onPress={()=>this.changeIndex("1853908")}/>
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
