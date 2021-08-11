import React from 'react';
import { StatusBar,ScrollView, Platform,Button,StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground,Image,Dimensions,Linking } from 'react-native';
import HomeScreen from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import ListViewSreen from './ListView';

export default class Login extends React.Component {

  state={
    username:"",
    password:""
  }
  render(){    
    return (
      <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      {/* <ImageBackground style={{height:Dimensions.get('window').height/2.5}} source={require("../assets/bg.jpg")}></ImageBackground> */}
      
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity
        
            style={styles.loginBtn}
            onPress={onLogin.bind(this)}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}
function onLogin({navigation}) {
    const { username, password } = this.state;
    if(username == "" ||  password ==""){
      alert('Please check the username or password', `username: ${username} + password: ${password}`);
    }else{
      this.props.navigation.navigate('Home')
    }
    
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#FFFFFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    borderWidth: 1,
    borderColor: "#000"
  },
  inputText:{     
    height:50,
    color:"#000"
  }, 
  loginText:{     
    fontWeight: "bold",
    color:"#FFFFFF"
  }, 
  loginBtn:{
    width:"80%",    
    backgroundColor:"#000",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
  },

});