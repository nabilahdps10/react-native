import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import {StackNavigator} from 'react-navigation'

export class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.instructions}>WELCOME TO MY PROFILE</Text>
        <Image
        style={{width: 200, height: 200, marginLeft:80, marginTop:80, marginBottom:50}} 
        source={require('./a.jpg')}
      	/>
        <Text style={styles.nulis}>NABILAH DEWI PUSPITASARI</Text>
        <Text style={styles.nulis}>XI RPL 3</Text>
        <Text style={styles.nulis}>30</Text>
        <Button 
        style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
        onPress={() => this.redirect()} title="Check"
        title="LOGIN"
        color="#BBBBBB"
      />
      </View>
    )
  }
}

redirect (){
  Alert.alert(" OKe tod ")
}

export default Home;

const styles = StyleSheet.create({
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 25
  },
  nulis: {
  	fontSize: 18,
  	textAlign: 'center',
  	color: '#000000',
  	marginTop: 10
  }
});