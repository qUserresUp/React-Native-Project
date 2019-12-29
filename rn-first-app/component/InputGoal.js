import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal} from 'react-native';

const inputGoal = (props) =>{

    const [enteredGoal, setEnteredGoal] = useState('');

    const addButtonHandler = () => {
        props.onPress(enteredGoal);
        setEnteredGoal('');
    }

    const cancelButtonHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.show} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='course goal'
                    value={enteredGoal} 
                    style={styles.textInput}
                    onChangeText={(text) => setEnteredGoal(text)}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonSize}>
                        <Button  title="ADD" onPress={addButtonHandler}/>
                    </View>
                    <View style={styles.buttonSize}>
                        <Button style={styles.buttonSize} title="CANCEL" color="red" onPress={cancelButtonHandler}/>
                    </View>
                </View>
            </View>
      </Modal>
    )
}

const styles = StyleSheet.create({

    inputContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 0.25,
    },

    textInput: {
        padding: 5, 
        borderColor: 'black', 
        borderWidth: 1, 
        width: '80%',
        marginBottom: 10,
        color: 'orange',
    },

    // by default, elements will only take up spaces that fit their child components
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    // to apply styling to <Button />, wrap it in <View />
    buttonSize: {
        width: '40%',
    }

})

export default inputGoal;