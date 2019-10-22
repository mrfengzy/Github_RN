export default class NavigationUtil{
    /**
     * 返回上一页
     * @param {*} params 
     */
    static goBack(params){
        params.goBack()
    }
    /**
     * 跳转首页
     * @param {*} params 
     */
    static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate("Main")
    }
}