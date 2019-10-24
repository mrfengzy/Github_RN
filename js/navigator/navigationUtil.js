export default class NavigationUtil{
    /**
     * 跳转制定页面
     * @param {*} params 页面间传递的参数
     */
    static goPage(params, page){
        const navigation = NavigationUtil.navigation;
        if(!navigation){
            console.log('NavigationUtil.navigation can not be null')
            return
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }
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