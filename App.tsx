import React, { useState, useEffect } from "react";
import Routing from './Routing';
import * as Updates from 'expo-updates';
import 'react-native-gesture-handler';
//https://reactnativeelements.com/ 

export default function App() {

  useEffect(() => {
    checkUpdates();
  }, []);

  async function checkUpdates() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.log('checkUpdates error');
    }
  }

  return (
    <Routing />
  );
}
