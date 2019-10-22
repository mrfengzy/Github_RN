/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NavigationUtil from '../navigator/navigationUtil'
export default class WelcomePage extends Component{
    componentDidMount(){
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomePage({
                navigation : this.props.navigation
            })
        }, 2000);
    }
    componentWillMount(){
        this.timer && clearTimeout(this.timer)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>WelcomePage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#eee'
  }
});
