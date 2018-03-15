/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Picker,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      language:''
    };
  }
  render() {
    return (
      <View style={{margin:30}}>
        <Picker selectedValue={this.state.language} mode={Picker.MODE_DIALOG} style={{width:200}} prompt='请选择语言'
                enabled={true}
              itemStyle={{fontSize:25, color:'red',textAlign:'left',fontWeight:'bold'}} onValueChange={(lang)=>this.setState({language:lang})}>
          <Picker.Item  label='Java' value='java'/>
          <Picker.Item  label="JavaScript" value="js" />
          <Picker.Item  label="C++" value="cpp" />
          <Picker.Item  label="Swift" value="swift" />
        </Picker>
        <TouchableOpacity onPress={this.onPress.bind(this,this.state.language)}>
        <Text>确定</Text>
        </TouchableOpacity>
      </View>
    );
  }
    onPress(language){
    alert(language)
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
