import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

export default function App() {

  const [selectedNumber, setSelectedNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

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