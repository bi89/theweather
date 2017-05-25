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
      WeatherDescription: 'Description'
    };
    this.changeIndex('Null', 'Null', 'Null');
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
          <Text style={styles.WeatherDescription}>
            {this.state.WeatherDescription}
          </Text>
        </View>

        <View style={styles.footer}>
          <StockButton name="Bangkok" code="1609350" onPress={()=>this.changeIndex("1609350")}/>
          <StockButton name="Tokyo" code="1850147" onPress={()=>this.changeIndex("1850147")}/>
          <StockButton name="East London" code="1006984" onPress={()=>this.changeIndex("1006984")}/>
          <StockButton name="Singapore" code="1880252" onPress={()=>this.changeIndex("1880252")}/>
          <StockButton name="New York" code="5128581" onPress={()=>this.changeIndex("5128581")}/>
          <StockButton name="Osaka" code="1853908" onPress={()=>this.changeIndex("1853908")}/>
          <StockButton name="Lop Buri" code="1609032" onPress={()=>this.changeIndex("1609032")}/>
          <StockButton name="San Francisco" code="5391959" onPress={()=>this.changeIndex("5391959")}/>
          <StockButton name="Canberra" code="2172517" onPress={()=>this.changeIndex("2172517")}/>
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
    fontSize: 30,
    color: 'green'
  },
  WeatherDescription: {
    fontSize: 40,
    color: 'darkgreen'
  },
  WeatherMain: {
    fontSize: 70,
    color: 'lightblue'
  }
});

AppRegistry.registerComponent('theweather', () => theweather);
