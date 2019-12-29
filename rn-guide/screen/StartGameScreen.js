import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

import Card from '../component/Card';
import Colors from '../constants/Colors';

const startGameScreen = (props) => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput placeholder="select a number"/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button title="Reset" color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                    <Button title="Confirm" color={Colors.primary} />
                    </View>
                </View>
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

    title: {
        fontSize: 20,
        marginVertical: 20,
    },

    inputContainer: {
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 20,

    },

    button: {
        width: 100,
        height: 100,
    },


})

export default startGameScreen;