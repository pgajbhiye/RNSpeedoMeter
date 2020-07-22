/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Animated,
  Button,
    Text
} from 'react-native';

import {Speedometer} from './src/Speedometer';
import {Indicator} from './src/Indicator';

export class App extends React.Component {
  state = { value : new Animated.Value(-3)};

  onStart = ()=> {
    Animated.timing(this.state.value,{duration:3500, toValue:3}).start((finished)=>{
      if(finished){
        this.setState( {  value : new Animated.Value(-3)});
      }
    });
  };

  onStop = ()=>{
    this.state.value.stopAnimation();
  };

  render() {
    const animInterpolation = this.state.value.interpolate({
      inputRange: [ -3, -2, -1, 1, 2, 3],
      outputRange: ['-100deg','-60deg','-20deg', '20deg', '60deg', '100deg']});
    const colorInterpolation = this.state.value.interpolate({
      inputRange: [ -3, -2, -1, 1, 2, 3],
      outputRange : ["rgba(255,255,255, 0.9)", "rgba(68, 196, 161, 1)", "rgba(228, 233, 237, 1)", "rgba(52, 152, 219, 1)","rgba(250, 216, 89, 1)", "rgba(192, 57, 43, 1)"]
    });

    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <Animated.View style={[{ backgroundColor:colorInterpolation}, {width:"100%", height:"100%",justifyContent:"center", alignItems:"center"}]}>
              <View style ={{flexDirection:"row"}}>
                <Button styles={{button:{backgroundColor:"white", broderRadius:"3", padding:20}}} color={"black"} title={"Start"} onPress={this.onStart}/>
                <Button color={"black"} title={"Stop"} onPress={this.onStop }/>
              </View>
            <View style={[{width : 200, borderWidth:1, marginTop:20, borderRadius: 5,height:200 ,justifyContent:"center", backgroundColor:"white", alignItems:"center"}]}>
              <Animated.View style={{transform:[{rotate:animInterpolation}],position:"absolute", top:40, }}>
                <Indicator/>
              </Animated.View>
              <Speedometer/>
            </View>
              <Text style={{color:"white", marginTop:20, fontSize:18}}>Input Range : 0</Text>
              <Text style={{color:"white", marginTop:8, fontSize:18}}>Output Range : 0deg</Text>
            </Animated.View>
          </SafeAreaView>
        </>
    );
  }
}

