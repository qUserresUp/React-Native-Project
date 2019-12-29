import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
// there are many Touchable components: <TouchableHilight />, <TouchableNativeFeedback />, <TouchableWithoutFeedback>

const goalItem = (props) => {

    return (
        <TouchableOpacity activeOpacity={0.3} onPress={()=>props.onDelete(props.index)}>
            <View style={styles.courseText}>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    courseText: {
        backgroundColor: 'orange',
        padding: 10,
        marginVertical: 10,
        borderColor: 'brown',
        borderWidth: 1,
      }
})

export default goalItem;