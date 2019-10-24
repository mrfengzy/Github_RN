/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  createBottomTabNavigator,  //地步导航
} from 'react-navigation'
import {
  StyleSheet,
} from 'react-native';
import PopPage from './PopPage'
import TrendingPage from './TrendingPage'
import FavoritePage from './FavoritePage'
import MyPage from './MyPage'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NavigationUtil from '../navigator/navigationUtil'

export default class HomePage extends Component{
    _tabNavigator(){
      return createBottomTabNavigator({
        PopPage:{
          screen:PopPage,
          navigationOptions:{
            tabBarLabel:"最热",
            tabBarIcon:({tintColor,focused})=>(
              <FontAwesome5
              name={'hotjar'}
              size={26}
              style={{color:tintColor}}
              />
            )
          }
        },
        TrendingPage:{
          screen:TrendingPage,
          navigationOptions:{
            tabBarLabel:"趋势",
            tabBarIcon:({tintColor,focused})=>(
              <MaterialIcons
              name={'trending-up'}
              size={26}
              style={{color:tintColor}}
              />
            )
          }
        },
        FavoritePage:{
          screen:FavoritePage,
          navigationOptions:{
            tabBarLabel:"收藏",
            tabBarIcon:({tintColor,focused})=>(
              <MaterialIcons
              name={'favorite-border'}
              size={26}
              style={{color:tintColor}}
              />
            )
          }
        },
        MyPage:{
          screen:MyPage,
          navigationOptions:{
            tabBarLabel:"我的",
            tabBarIcon:({tintColor,focused})=>(
              <FontAwesome5
              name={'user'}
              size={26}
              style={{color:tintColor}}
              />
            )
          }
        }
      })
    }
    render(){
       NavigationUtil.navigation = this.props.navigation;
       const Tab = this._tabNavigator()
       return <Tab />
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