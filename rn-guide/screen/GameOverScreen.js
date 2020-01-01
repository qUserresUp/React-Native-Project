import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const gameOverScreen = (props) => {

    return (
        <View style={styles.screen}>
            <Text>Game Over</Text>
            <Text>Total Rounds: {props.guessRounds}</Text>
            <Text>Correct Answer: {props.selectedNumber}</Text>
            <Button title="RESTART" onPress={props.onRestartGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default gameOverScreen;
