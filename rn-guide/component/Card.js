import React from 'react';
import { StyleSheet, View} from 'react-native';

const card = (props) =>{

    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black', // create shadow only on IOS
        // shadowOffset: {width: 2, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 8, // create shadow only on Android
        borderRadius: 10,
        backgroundColor: 'white', //without backgroundColor, shadow property does not form a card-like style
        padding: 20,
    },
})

export default card;