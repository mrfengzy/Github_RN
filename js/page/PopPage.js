/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  createMaterialTopTabNavigator,  //地步导航
} from 'react-navigation'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import navigationUtil from '../../js/navigator/navigationUtil'

export default class PopPage extends Component{
    
    render(){
      //创建导航器
      const TabNavigator = createMaterialTopTabNavigator({
        PopTab1:{
          screen:PopTab,
          navigationOptions:{
            title:'tab1'
          }
        },
        PopTab2:{
          screen:PopTab,
          navigationOptions:{
            title:'tab1'
          }
        },
      })
        return <View style={{flex:1,marginTop:30}}>
          <TabNavigator />
        </View>
    }
}

class PopTab extends Component{
    
  render(){
    const {tabLabel} = this.props
      return(
          <View style={styles.container}>
              <Text style={styles.welcome}>{tabLabel}</Text>
              <Text onPress={()=>{navigationUtil.goPage({},'DetailPage')}}>跳转到详情页</Text>
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