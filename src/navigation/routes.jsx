import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../views/home/screens/HomeScreen"
import ProfileScreen from "../views/home/screens/ProfileScreen"
import StoreScreen from "../views/home/screens/StoreScreen"
import CartScreen from "../views/home/screens/CartScreen"

const AppScreensStack = createNativeStackNavigator()
const AppScreensTabs = createBottomTabNavigator()

const DashboardNavigator = () => (
    <AppScreensTabs.Navigator initialRouteName="Home">
        <AppScreensTabs.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <AppScreensTabs.Screen name="Store" component={StoreScreen} />
        <AppScreensTabs.Screen name="Cart" component={CartScreen} />
        <AppScreensTabs.Screen name="Profile" component={ProfileScreen} />
    </AppScreensTabs.Navigator>
)


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <DashboardNavigator/>
        </NavigationContainer>
    )
}

export default AppNavigator