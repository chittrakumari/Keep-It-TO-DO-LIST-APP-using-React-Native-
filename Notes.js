import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default class Notes extends React.Component{
  render(){
    return(
<View style={styleSheet.viewstyling} key={this.props.task}>
<Text style={styleSheet.notetextstyling}>{this.props.task.note}</Text>
<Text style={styleSheet.notetextstyling}>{this.props.task.date}</Text>
<TouchableOpacity style={styleSheet.donebuttonstyle} 
onPress={this.props.markdone}><Text style={{fontSize:20,color:'white'}}>Done</Text></TouchableOpacity>
</View>
    );
  }
}

const styleSheet=StyleSheet.create({
  viewstyling:{
position:'relative',
padding:20,
borderBottomColor:'#ededed',
borderBottomWidth:2,
paddingRight:200,
  },
  notetextstyling:{
paddingLeft:28,
fontSize:19,
borderLeftWidth:10,
borderLeftColor:'#ededed',
  },
  donebuttonstyle:{
 position:'absolute',
    top:10, right:18, padding:10, backgroundColor:'grey', bottom:10, justifyContent:'center',alignItems:'center', borderRadius:10
  },
});