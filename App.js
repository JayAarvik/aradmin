import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login/Login';
import Tabs from './src/screens/BottomTabs/Tabs';
import StoreScreen from './src/screens/storeDetails/StoreScreen';
import AddNewOutlet from './src/screens/AddNewOutlet/AddNewOutlet';
import AllOutlets from './src/screens/CheckOutlets/AllOutlets';
import OutletScreen from './src/screens/OutletDetails/OutletScreen';
import EditOutlet from './src/screens/EditOutlet/EditOutlet';
import EditStore from './src/screens/EditStoreDetails/EditStore';
import EditProfile from './src/screens/Profile/EditProfile';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
                <Stack.Screen name="StoreScreen" component={StoreScreen} options={{headerShown: false}} />
                <Stack.Screen name="AddNewOutlet" component={AddNewOutlet} options={{headerShown: false}} />
                <Stack.Screen name="AllOutlets" component={AllOutlets} options={{headerShown: false}} />
                <Stack.Screen name="OutletScreen" component={OutletScreen} options={{headerShown: false}} />
                <Stack.Screen name="EditOutlet" component={EditOutlet} options={{headerShown: false}} />
                <Stack.Screen name="EditStore" component={EditStore} options={{headerShown: false}} />
                <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;