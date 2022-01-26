/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      angka : ''
    };
  }

  render(){
    return(
      <ScrollView style={{ 
        backgroundColor: 'white',
        height:'100%'
      }}>
        <StatusBar barStyle='dark-content' backgroundColor="white"></StatusBar>
        <Text style={{
          marginTop:10,
          color: 'black', 
          fontSize: 35,
          textAlign: 'center'
          }}>GRatio</Text>
          {/* inputan */}
          <View style={{
            display : 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            marginTop: '15%'
          }} >
            <View>
              <Text style={{textAlign: 'center', fontSize:22}}>Insert Number</Text>
              <TextInput style={{fontSize:14}} keyboardType='numeric' value={this.state.angka} onChangeText={(value) => {
                this.setState({angka : value});
              }} style={{
                borderBottomWidth: 1,
                textAlign: 'center'
              }}></TextInput>
            </View>
          </View>
          {/* hasil */}
          <View style={{
            marginTop:'35%',
            marginBottom:'14%',
          }}>
            <Text style={{textAlign:'center', fontSize: 35}}>Result</Text>
            <View style={{              
              display : 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '100%',
              marginTop: '10%'
            }}>
              <View>
                <Text style={{textAlign: 'center', fontSize:22}}>Size Up</Text>
                <Text style={{textAlign: 'center'}}>{Math.round(Number(this.state.angka) * 1.618)}</Text>
              </View>
              <View>
                <Text style={{textAlign: 'center', fontSize:22}}>Size Down</Text>
                <Text style={{textAlign: 'center'}}>{Math.round(Number(this.state.angka) * 1.618 - this.state.angka)}</Text>
              </View>
            </View>
          </View>
          {/* footer */}
          <View>
            <Text style={{
              marginTop: '55%',
              marginBottom: 12,
              textAlign: 'center'
            }}> {'\u00A9'}ipoy </Text>
          </View>
      </ScrollView>
    )
  }
}

export default App;
