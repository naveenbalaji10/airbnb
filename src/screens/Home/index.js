import { View, Text ,StyleSheet, ImageBackground, Pressable, Dimensions} from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'

const HomeScreen=()=> {
  const Navigator=useNavigation()
  return (
    <View > 
     <Pressable onPress={()=>Navigator.navigate('Destination Search')} style={styles.searchbutton}>
            <Fontisto name='search' size={24} color={'#f15454'}/>
            <Text style={styles.searchtext}>Where are you going ?</Text>
     </Pressable>
     <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.bckimg}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable onPress={()=>console.warn('explore button pressed')} style={styles.button}>
            <Text style={styles.buttontext}>Explore nearby stays</Text>
        </Pressable>
     </ImageBackground>
     
    </View>
  )
}

export default HomeScreen

const styles=StyleSheet.create({
   bckimg:{
    width:'100%',
    height:500,
    resizeMode:'cover',
    justifyContent:'center'
   },
   title:{
       fontSize:100,
       color:'white',
       fontWeight:'bold',
       width:'70%',
       marginLeft:25,
     
   },
   button:{
    backgroundColor:'#fff',
    height:40,
    marginLeft:25,
    marginTop:10,
    width:200,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10

   },
   buttontext:{
     fontSize:16,
     fontWeight:'500',
     color:'#000'
   },
   searchbutton:{
    backgroundColor:'#fff',
    marginHorizontal:10,
    width:Dimensions.get('screen').width -20,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    height:60,
    position:'absolute',
    top:20,
    borderRadius:30,
    zIndex:100
   },
   searchtext:{
       fontSize:16,
       fontWeight:'400',
       color:'black',
       marginLeft:10
   }
})