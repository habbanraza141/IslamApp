import React from 'react';
import AllCategories from './src/screens/AllCategories';
import Fiqh from './src/screens/Fiqh';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllCategories" component={AllCategories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
