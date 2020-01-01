import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

import NumberContainer from '../component/NumberContainer';
import Card from '../component/Card';

const generateRandomBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random()* (max-min) + min);
    if(randNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }
    else{
        return randNum;
    }
}

const gameScreen = (props) => {

    const [currGuess, setCurrGuess] = useState(generateRandomBetween(1,100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const low = useRef(1); // useRef() is similar to useState, however, it does not re-render all the components
    const high = useRef(100); // use .current property to access the value
    const { userChoice, onGameOver} = props; // object destructure

    useEffect(()=> {
        if(props.userChoice === currGuess){
            props.onGameOver(rounds);
        }
    }, [currGuess, userChoice, onGameOver]); // add dependencies for useEffect()

    const nextGuessHandler = (direction) => {
        if( (direction === 'lower' && currGuess < props.userChoice) || (direction === 'greater' && currGuess > props.userChoice)){
            Alert.alert(
                'Be Honest', 
                'Tell our game the correct direction', 
                [{text: 'Woops, my bad', style: 'destructive'}]);
                return;
        }
        if(direction=== 'lower'){
            high.current = currGuess;
        }
        else if(direction ==='greater'){
            low.current = currGuess;
        }

        setCurrGuess(generateRandomBetween(low.current,high.current,currGuess));
        setRounds(curRounds => curRounds+1);
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this,'greater')} />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 200,
        maxWidth: '80%',
    }
})

export default gameScreen;