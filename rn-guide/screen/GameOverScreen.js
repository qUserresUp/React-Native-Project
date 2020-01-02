import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import DefaultStyle from '../constants/Default-styles';

const gameOverScreen = (props) => {

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyle.titleText}>Game Over</Text>
            <View style={styles.imgContainer}>
                <Image 
                    // use local image (it is not necessary to set width and height)
                    source={require('../assets/success.png')} 
                    // use image from the web, it is necessary to set width and height
                    // source={{uri:'https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_full/mountains-hero.jpg?1345838509'}}
                    style={styles.image}
                    resizeMode='cover' // cover is the default, where it crops the image beyond boundary
                    // fadeDuration={1000} // change the duration of fade-in effect
                />
            </View>
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
    },
    imgContainer: {
        marginVertical: 30,
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: '100%',
        
    }
})

export default gameOverScreen;
