import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [lista, setLista]= useState([]);

  function deletes(indexParameter){
    const listaFiltrada = lista.filter((_, index)=>index !== indexParameter)
    setLista(listaFiltrada)
  };

  function pegarTexto(entradadetexto){
    setTexto(entradadetexto)
  };

  function adcTexto(){
    setLista([...lista, texto]);
  }
  
  return (
    <ScrollView>
    <View>
        <View style={styles.titleDisplay}>
          <Text style={styles.title}>TODO LIST</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput placeholder='digite seu texto aqui' style={styles.colorTextInput} onChangeText={pegarTexto}></TextInput>
          <Button title='adc' onPress={adcTexto}></Button>
        </View>
        <View style={styles.linha}></View>
        <View style={styles.lista}>
          {lista.map((tarefa, index)=><View key={index} style={styles.output}><Text style={styles.outputText}>{tarefa}</Text>
          <Button title='del' onPress={()=>deletes(index)}></Button></View>)}
  </View>
        
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  outputText:{
    fontSize:25
  },
  output:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:50
  },
  lista:{
    marginLeft:50,
  },
  linha:{
    borderBottomWidth:1,
    margin:30
  },
  titleDisplay:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:50
  },
  title:{
    fontSize:40
  },
 inputView:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  paddingTop:50,
 },
 colorTextInput:{
  borderWidth:1,
  width:250,
  marginRight:20
  
 }

});
