import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class Login extends Component{

    render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.title}>Login</Text>

                <Image
                    style={{width: 120, height: 120,marginLeft:110,marginTop:30}}
                    source={require('../a.png')}
                />
                
                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
                onPress={() => this.props.navigation.navigate('Home')} title="Home"
                title="Login"
                color="#841584"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({


    title: {
        fontWeight: 'bold',
        fontSize : 48,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },
 



})