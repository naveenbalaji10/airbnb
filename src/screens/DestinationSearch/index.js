import { View,Text, TextInput,StyleSheet,FlatList, Pressable} from 'react-native'
import React, { useState } from 'react'

import Entypo from 'react-native-vector-icons/Entypo'
import dummy from '../../../assets/data/dummy'
import { useNavigation } from '@react-navigation/native'

const DestinationSearch = () => {
 
    const [inputText,setInputText]=useState("")
    

    const Navigator=useNavigation()
  return (
    <View style={StyleSheet.container}>
     <TextInput style={styles.input} placeholder="where are you going ?" value={inputText} onChange={setInputText}/>
     <FlatList data={dummy} renderItem={({item})=>(
         <Pressable style={styles.row} key={item.id} onPress={()=>Navigator.navigate('Guests')}>
             <View style={styles.iconContainer}>
                 <Entypo name='location-pin' size={25} style={styles.icon}/>
             </View>
             <Text style={styles.desc}>{item.description}</Text>
         </Pressable>
     )}/>
    </View>
  )
}

export default DestinationSearch

const styles=StyleSheet.create({
    container:{
       margin:20
    },
    input:{
     fontSize:20,
     marginBottom:20
    },
    row:{
     flexDirection:'row',
     alignItems:'center',
     paddingVertical:15,
     borderBottomWidth:1,
     borderBottomColor:'lightgrey'
    },
    iconContainer:{
      backgroundColor:'#d4d4d4',
      padding:10,
      borderRadius:10,
      marginRight:15
    },
    desc:{
      
    }
})