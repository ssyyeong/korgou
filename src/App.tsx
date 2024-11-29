// import React from 'react';
// import {Provider} from 'react-redux';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import store from './redux/stores';
// import SignInScreen from './screens/auth/signIn';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="SignIn"
//           screenOptions={{
//             headerShown: false,
//           }}>
//           {/* 로그인 화면 */}
//           <Stack.Screen name="SignIn" component={SignInScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world from React Naitve Web</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
