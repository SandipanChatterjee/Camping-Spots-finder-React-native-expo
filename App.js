import React from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';
import AllSpots from './src/screens/AllSpots';
import { AppContainer } from './src/routes';
import Header from './src/components/header'
import NavigationService from './src/routes/NavigationService'
import {Provider} from 'react-redux'
import configStore from './src/Store/config'

store = configStore()

export default function App() {
  return (
    <View style={styles.container}>
          <Header />
          <Provider store={store}>
            <AppContainer
              ref={navigatorRef=>{
                NavigationService.setTopLevelNavigator(navigatorRef);
              }} />
        </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#fff',
  },
  
});
