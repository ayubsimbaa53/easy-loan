import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './screens/onboarding/Onboarding';
import SplashScreen from './screens/splash/Splash';
import LoginScreen from './screens/authentication/Login';
import RegisterScreen from './screens/authentication/Register';
import RegisterScreen2 from './screens/authentication/Register2';
import RegisterScreen3 from './screens/authentication/Register3';
import UploadProfile from './screens/authentication/UploadProfile';
import MainTabs from './screens/MainTabs';
import RequestDone from './screens/loanRequest/RequestDone';

// Stack Navigation..
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        useLagacyImplementation={true}
        initialRouteName="Onboarding"
      >

        {/* ---- OnBoarding Screen ---- */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* ---- Splash Screen ---- */}
        <Stack.Screen 
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* ---- Login Screen ---- */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* ---- Register Screen ---- */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* ----- 2nd Register Screen ---- */}
        <Stack.Screen
          name="Register2"
          component={RegisterScreen2}
          options={{
            headerShown: false,
          }}
        />

        {/* ---- 3rd Register Screen ---- */}
        <Stack.Screen
          name="Register3"
          component={RegisterScreen3}
          options={{
            headerShown: false,
          }}
        />

        {/* ----- 4th Stage Uploading Profile Picture ---- */}
        <Stack.Screen
          name="UploadProfile"
          component={UploadProfile}
          options={{
            headerShown: false,
          }}
        />

        {/* ---- Main Screens Stack Of Tab Navigation ---- */}
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />

        {/* ---- Request Done ----- */}
        <Stack.Screen
          name="RequestDone"
          component={RequestDone}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}