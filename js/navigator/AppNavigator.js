import {
    createStackNavigator,
    createMaterialTopTabNavigator,  //顶部导航
    createBottomTabNavigator,  //地步导航
    createSwitchNavigator  //SwitchNavigator 的用途是一次只显示一个页面。 默认情况下，它不处理返回操作，并在你切换时将路由重置为默认状态
} from 'react-navigation'
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'



const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            header:null  // 禁用navigationbar
        }
    }
})

const MainNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            header:null  // 禁用navigationbar
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            // header:null  // 禁用navigationbar
        }
    },
});

export default createSwitchNavigator({
    Init:InitNavigator,
    Main : MainNavigator,
},{
    navigationOptions:{
        header:null  // 禁用navigationbar
    }
})//连接两个导航起