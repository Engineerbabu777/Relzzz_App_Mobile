import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import SplashScreen from "../screens/auth/SplashScreen";
import BottomTab from "./BottomTab";


export const authStack = [
    {
        name: "LoginScreen",
        component: LoginScreen
    },

    {
        name: "SplashScreen",
        component: SplashScreen
    },

    {
        name: "RegisterScreen",
        component: RegisterScreen
    }
]

export const dashboardStack = [
    {
        name: "BottomTab",
        component: BottomTab
    },
   
]



export const mergedStack = [...authStack,...dashboardStack];