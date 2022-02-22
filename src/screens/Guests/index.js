import { View, Text, Pressable ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const GuestScreen = () => {
    const [adult,setAdult]=useState(0)
    const [childrens,setChildrens]=useState(0)
    const [infants,setInfants]=useState(0)

    const Navigator=useNavigation()
  return (
    <View style={styles.outerContainer}>
        <View>
      <View style={styles.row}>
          <View style={styles.col1}>
              <Text style={{fontWeight:'bold'}}>Adults</Text>
              <Text style={{color:'#8d8d8d'}}>13 or above</Text>
          </View>
          <View style={styles.col2}>
              <Pressable style={styles.button} onPress={()=>setAdult(Math.max(0,adult - 1))}>
                  <Text style={styles.buttonText}>-</Text>
              </Pressable>
              <Text style={styles.number}>{adult}</Text>
              <Pressable style={styles.button} onPress={()=> setAdult(adult + 1)}>
                  <Text style={styles.buttonText}>+</Text>
              </Pressable>
          </View>
      </View>

      <View style={styles.row}>
          <View style={styles.col1}>
              <Text style={{fontWeight:'bold'}}>Children</Text>
              <Text style={{color:'#8d8d8d'}}>Ages 2-12</Text>
          </View>
          <View style={styles.col2}>
              <Pressable style={styles.button} onPress={()=>setChildrens(Math.max(0,childrens - 1))}>
                  <Text style={styles.buttonText}>-</Text>
              </Pressable>
              <Text style={styles.number}>{childrens}</Text>
              <Pressable style={styles.button} onPress={()=> setChildrens(childrens + 1)}>
                  <Text style={styles.buttonText}>+</Text>
              </Pressable>
          </View>
      </View>

      <View style={styles.row}>
          <View style={styles.col1}>
              <Text style={{fontWeight:'bold'}}>Infants</Text>
              <Text style={{color:'#8d8d8d'}}>Ages below 2</Text>
          </View>
          <View style={styles.col2}>
              <Pressable style={styles.button} onPress={()=>setInfants(Math.max(0,infants - 1))}>
                  <Text style={styles.buttonText}>-</Text>
              </Pressable>
              <Text style={styles.number}>{infants}</Text>
              <Pressable style={styles.button} onPress={()=> setInfants(infants + 1)}>
                  <Text style={styles.buttonText}>+</Text>
              </Pressable>
          </View>
      </View>
      </View>
     
      <View>
          <Pressable style={styles.book} onPress={()=>Navigator.navigate('Home',{screen:'Explore',params:{screen:'Search Results'}})}>
              <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Search</Text>
          </Pressable>
      </View>
    </View>
  )
}

export default GuestScreen

const styles=StyleSheet.create({
    outerContainer:{
        justifyContent:'space-between',
        height:'100%',
        marginHorizontal:20
    },
 row:{
     flexDirection:'row',
     paddingVertical:20,
     alignItems:'center',
     justifyContent:'space-between',
     borderBottomWidth:1,
     borderBottomColor:'lightgrey'
 },
 col1:{
 },
 col2:{
     flexDirection:'row',
     alignItems:'center'
 },number:{
     fontSize:16,
     marginHorizontal:20
 },
 button:{
  height:30,
  width:30,
  borderRadius:15,
  borderColor:'#676767',
  borderWidth:1,
  alignItems:'center',
  justifyContent:'center'

},
buttonText:{
    fontSize:20,
    color:'#474747'
},
book:{
   alignItems:'center',
   marginBottom:20,
   backgroundColor:'#f15454',
   padding:10,
   borderRadius:15,
}
})