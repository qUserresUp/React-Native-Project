import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert,
    Dimensions, // this API gives the dimension of the screen
} from 'react-native';

import Card from '../component/Card';
import Colors from '../constants/Colors';
import Input from '../component/Input';
import NumberOntainer from '../component/NumberContainer';
import DefualtStyle from '../constants/Default-styles';
import MainButton from '../component/MainButton';

const startGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const enteredValueHandler = (number) => {
        // replace anything that is not a number with empty string
        setEnteredValue(number.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
        
    }

    const confirmInputHandler = () => {

        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){ // invalid input handling
            Alert.alert('Invalide Number', 'Number has to be between 1-99 inclusive',
            [{text: 'Oh Okay', onPress: resetInputHandler, style: 'destructive'}]);
            return;
        }
        setEnteredValue('');
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = (
        <Card style={styles.confirm}>
            <Text>Chosen: </Text>
            <NumberOntainer>{selectedNumber}</NumberOntainer>
            <MainButton 
                style={{marginTop: 30}}
                title="Start Game!" 
                onPress={()=>props.startGameHandler(selectedNumber)}
            />
        </Card>
        )
    }

    // Keyboard is an API provided by RN to give control over the keyboard
    return (
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}> 
            <View style={styles.screen}>
                <Text style={{...styles.title, ...DefualtStyle.titleText}}>Start Game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={DefualtStyle.bodyText}>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2} 
                        value={enteredValue}
                        onChangeText={enteredValueHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                        <Button title="Reset" color={Colors.accent} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                        <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        marginVertical: 20,
    },

    inputContainer: {
        alignItems: 'center',
        maxWidth: '80%',
    },

    input: {
        width: 50,
        textAlign: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 10,

    },

    button: {
        width: Dimensions.get('window').width/4,
    },

    confirm: {
        marginVertical: 20,
        alignItems: 'center',
    }

})

export default startGameScreen;