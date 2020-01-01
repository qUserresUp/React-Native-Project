import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Colors from '../constants/Colors';

const numberOntainer = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },

    number: {
        color: Colors.accent,
        fontSize: 22,
    }
})

export default numberOntainer;