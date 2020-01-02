import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

import * as Font from 'expo-font';
import { AppLoading } from 'expo'; // expo component that can extend loading/splash screen

//load customer fonts
const fetchFont = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {

  const [selectedNumber, setSelectedNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // prevent loading font every cycle
  if(!dataLoaded){
    return (
    <AppLoading 
      startAsync={fetchFont}
      onFinish={()=>setDataLoaded(true)}
      onError={()=>console.log('font loading error')}
    />
    )
  }

  const startGameHandler = (chosenNum) => {
    setSelectedNumber(chosenNum);
    setGuessRounds(0);
  }

  const gameOverHandler = (numRounds) => {
    setGuessRounds(numRounds);
  }

  const restartGameHandler = () => {
    setSelectedNumber(null);
    setGuessRounds(0);
  }

  // return <GameOverScreen guessRounds={1} selectedNumber={1}/>
  let currScreen = <StartGameScreen startGameHandler={startGameHandler}  />;
  if(selectedNumber && guessRounds <= 0){
    currScreen = <GameScreen userChoice={selectedNumber} onGameOver={gameOverHandler}/>
  }
  else if(selectedNumber && guessRounds > 0){
    currScreen = <GameOverScreen onRestartGame={restartGameHandler} guessRounds={guessRounds} selectedNumber={selectedNumber} />
  }


  return (
    <View style={styles.screen}>
      <Header title="GUESS GAME"/>
      {currScreen}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})