import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Platform} from 'react-native';
import React from 'react';

if (Platform.OS === 'web') {
  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
  });
} else {
  AppRegistry.registerComponent(appName, () => App);
}
