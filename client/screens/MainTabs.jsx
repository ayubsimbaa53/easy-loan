import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './loanRequest/Home';
import MyRequestsScreen from './MyRequests/MyRequests';
import ProfileScreen from './Profile/Profile';

// Tab Navigation..
const Tab = createMaterialBottomTabNavigator();

// Main Tabs Navigation here..
const MainTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            activeColor="gray"
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Loan',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-home" size={24} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="MyRequests"
                component={MyRequestsScreen}
                options={{
                    tabBarLabel: 'Requests',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="request-quote" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="profile" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabs;