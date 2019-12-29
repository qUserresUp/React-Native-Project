import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import InputGoal from './component/InputGoal';
import GoalItem from './component/GoalItem';



export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [showAddGoal, setShowAddGoal] = useState(false);
 
  const addButtonHandler = (enteredGoal) => {
    setCourseGoals(currCG => [...currCG, {key: Math.random().toString(), value: enteredGoal}]);
    setShowAddGoal(currSA => !currSA);
  }


  const deleteGoal = (idx) => {
    
    setCourseGoals((currCG) => {
      let newCourseGoals = [...currCG];
      newCourseGoals.splice(idx, 1);
      return newCourseGoals;
      // return currCG.filter((cg) => (cg.key != idx))
    });
  }

  return (
    /*
      <View /> components uses 'flex-box' as default styling, 'column' as default direction
      'justifyContent' arranges components on the main axis, 'alignItems' adjust components on the cross-axis
      'alignItems' is set to 'stretch' by default

      <ScrollView /> is used to wrap components that needs to be scrollable

      <FlatList /> is used to imporve performance when the rendered list is super long, and most of the items
                   are outside of the screen
                   props: 
                    'data': needs to be an array of objects, containing an unique key/id and some value
                    'renderItem': callback function receives each elements from data, and wrap it into an object
    */

    <View style={styles.screen}>

      <Button title="Add New Goal" onPress={()=>setShowAddGoal(true)} />
      <InputGoal 
        onPress={addButtonHandler}
        show={showAddGoal}
        onCancel={()=>setShowAddGoal(currSA => !currSA)}
      />

      <FlatList 
        data={courseGoals} 
        renderItem={(courseG)=> <GoalItem value={courseG.item.value} index={courseG.index} onDelete={deleteGoal}/>}
      />
    </View>
  )}



// react native does not use css files for styling
// instead, it provides css-like property names for styling
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

});
