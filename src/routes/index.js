import {createAppContainer,createStackNavigator,createMaterialTopTabNavigator} from 'react-navigation'
import AllSpots from '../screens/AllSpots';
import Tenting from '../screens/Tenting';
import Rv_Camping from '../screens/Rv_Camping';
import Settings from '../screens/Settings';
import BookingDetails from '../modals/booking_details';
import Login from '../modals/login';
import Register from '../modals/Register';
import Welcome from '../modals/welcome';
// import header from '../components/header';

const TabNavigator = createMaterialTopTabNavigator(
    {
        All_Spots :{
            screen : AllSpots,
        },
        Tenting : {
            screen : Tenting
        },
        RV_Camping : {
            screen : Rv_Camping
        },
        // Settings :{
        //     screen : Settings
        // },
        // Login : {
        //     screen : login
        // }
    },
    {
        tabBarOptions:{
            style : {
              backgroundColor : '#fff',
            },
            activeTintColor: '#FF7F50',
            inactiveTintColor: '#000000',
            labelStyle:{
                fontWeight : '500',
            },
            upperCaseLabel: false
        }
    }
)

const MainAppNavigator = createStackNavigator(
    {
        All_Spots : TabNavigator,
        Tenting : Tenting,
        RV_Camping : Rv_Camping,
        Settings : Settings,
        BookingDetails : BookingDetails,
        Login : Login,
        Welcome : Welcome,
        Register : Register,
       
    },
    {
        initialRouteName : 'All_Spots',
        headerMode:"none",
    }
)

export const AppContainer = createAppContainer(MainAppNavigator)
