import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screen/StartGameScreen';

export default function App() {

  return (
    <View style={styles.screen}>
      <Header title="GUESS GAME"/>
      <StartGameScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})