import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,ScrollView
} from 'react-native';
import constants from 'expo-constants';
import Notes from './Components/Notes.js'
import db from './config.js'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [{note:'React-Native',date:'13-Jul-2021'}],
      notetext: '',
    };
  }

 componentDidMount() {
    const tasks = db.ref('tasks');
    tasks.on('value', (data) => {
      const todos = data.val();
      const taskList = [];

      for (var id in todos) {
        taskList.push({ id, ...todos[id] });
        
      }
      
        this.setState({arr:taskList})
        console.log(taskList)
    });}

  addTask = () => {
    const tasks=db.ref('tasks')
    var d = new Date();
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    if (this.state.notetext) {
     const newTask= {
        note: this.state.notetext,
        date: d.getDate() + '-' + monthNames[d.getMonth()] + '-' + d.getFullYear(),
      }
  tasks.push(newTask)
     this.setState({ notetext: '' });
    }

  };
    markdone = (item) => {
    const node = db.ref('tasks').child(this.state.arr[item].id)
    node.remove();
    this.state.arr.splice(item, 1);
  };

  render() {
    var notes = this.state.arr.map((index,item) => {
      return (
        <View>
         <Notes
          task={index}
          markdone={() => {
            this.markdone(item);
          }}
        />
        </View>
      );
    });

    return (
      <View style={stylesheet.viewstyling}>
        <View>
          <Text style={stylesheet.headingstyling}>Keep It</Text>
        </View>
       <ScrollView style={stylesheet.scroll}>{notes}</ScrollView>
        <View style={stylesheet.noteviewstyling}>
          <TextInput
            placeholder="Enter Task"
            style={stylesheet.textinputstyling}
            onChangeText={(text) => {
              this.setState({ notetext: text });
            }}
            value={this.state.notetext}
          />
          <TouchableOpacity
            style={stylesheet.buttonstyling}
            onPress={this.addTask}>
            <Text style={{ fontSize: 28 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const stylesheet = StyleSheet.create({
  viewstyling: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
  },
  headingstyling: {
    textAlign: 'center',
    padding: 18,
    backgroundColor: 'gold',
    fontSize: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 3.5,
  },
  noteviewstyling: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: 'gold',
    borderTopWidth: 3.5,
  },
  buttonstyling: {
    backgroundColor: 'gold',
    borderRadius: 60,
    width: 60,
    height: 60,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 20,
  },
  textinputstyling: {
    padding: 20,
    outline: 'none',
    fontSize: 18,
  },scroll:{flex:1, marginBottom:100}
});
