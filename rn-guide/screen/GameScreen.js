import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // <Ionicons name="">, pick different icons from different category

import NumberContainer from '../component/NumberContainer';
import Card from '../component/Card';
import MainButton from '../component/MainButton';

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

const renderListItem = (value, numRound) => (
    <View style={styles.listElement} key={value}>
        <Text>#{numRound}</Text>
        <Text>{value}</Text>
    </View>
)

const gameScreen = (props) => {

    const initialGuess = generateRandomBetween(1,100, props.userChoice);
    const [currGuess, setCurrGuess] = useState(initialGuess);
    const [guessHistory, setGuessHistory] = useState([initialGuess]);
    const low = useRef(1); // useRef() is similar to useState, however, it does not re-render all the components
    const high = useRef(100); // use .current property to access the value
    const { userChoice, onGameOver} = props; // object destructure

    useEffect(()=> {
        if(props.userChoice === currGuess){
            props.onGameOver(guessHistory.length);
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
            low.current = currGuess+1;
        }

        const nextGuess = generateRandomBetween(low.current,high.current,currGuess);
        setCurrGuess(nextGuess);
        setGuessHistory(currGuessHistory => [nextGuess, ...currGuessHistory]);
    }

    // its always better to wrap components into <View> when applying style, especially <ScrollView> and <FlatList>
    // <ScrollView> uses 'contentContainerStyle' prop for styling
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton title={<Ionicons name="md-remove" />} onPress={nextGuessHandler.bind(this,'lower')} />
                <MainButton title={<Ionicons name="md-add" />} onPress={nextGuessHandler.bind(this,'greater')} />
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.scrollList}>
                    {guessHistory.map((guess, index) => {
                        let numRound = guessHistory.length-index;
                        return renderListItem(guess, numRound)
                    })}
                </ScrollView>
            </View>
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
        maxWidth: '90%',
    },
    listContainer: {
        flex: 1,
        width: '100%',
        margin: 50,
    },
    scrollList: {
        flexGrow: 1, // when grow list from the bottom, use this prop to style the list
        justifyContent: 'flex-end', // grow list from the bottom
        alignItems: 'center',
    },
    listElement: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        backgroundColor: 'pink',
        borderRadius: 30,
        width: '50%'
    }
})

export default gameScreen;