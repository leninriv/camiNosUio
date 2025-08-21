import React, { useState, useEffect } from "react";
import Routing from './Routing';
import * as Updates from 'expo-updates';
import 'react-native-gesture-handler';
import { ActivityIndicator, View } from "react-native";
//https://reactnativeelements.com/ 

export default function App() {
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }

  if (loading) return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>);

  return (
    <Routing />
  );
}
