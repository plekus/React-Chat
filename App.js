/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigator from './src/app.navigator';
import dayjs from 'dayjs';

const App = () => {
  var dayOfYear = require('dayjs/plugin/dayOfYear');
  dayjs.extend(dayOfYear);

  return <AppNavigator />;
};

export default App;
