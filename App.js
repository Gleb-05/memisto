import * as React from 'react';
import EntryScreen from './components/screens/EntryScreen';
import LoginScreen from './components/screens/LoginScreen';
import SignupScreen from './components/screens/SignupScreen'; 
import AppealListScreen from './components/screens/AppealListScreen';
import AppealScreen from './components/screens/AppealScreen';
import ViewCreateScreen from './components/screens/ViewCreateScreen';
import AppealMakeScreen from './components/screens/AppealMakeScreen';
import AppealLocationScreen from './components/screens/AppealLocationScreen';
import AppealChoiceScreen from './components/screens/AppealChoiceScreen';
import AppealSuccessScreen from './components/screens/AppealSuccessScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Entry" component={EntryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ViewCreate" component={ViewCreateScreen} />
        <Stack.Screen name="AppealList" component={AppealListScreen} />
        <Stack.Screen name="Appeal" component={AppealScreen} />
        <Stack.Screen name="AppealMake" component={AppealMakeScreen} />
        <Stack.Screen name="AppealLocation" component={AppealLocationScreen} />
        <Stack.Screen name="AppealChoice" component={AppealChoiceScreen} />
        <Stack.Screen name="AppealSuccess" component={AppealSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;