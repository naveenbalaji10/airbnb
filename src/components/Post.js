import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'

const Post = (props) => {
    const {id,image,type,title,oldPrice,newPrice,totalPrice,bed,bedroom}=props.post

  return (
    <View style={styles.container}>
      <Image source={{uri:image}} style={styles.image}/>
      <Text style={styles.rooms}>{bed} Bed {bedroom} BedRoom</Text>
      <Text style={styles.Desc} numberOfLines={2}>{type} {title}</Text>
      <Text style={styles.prices}>
        <Text style={styles.oldprice}>${oldPrice} </Text>
        <Text style={styles.price}> ${newPrice}</Text>
        /night
      </Text>
      <Text style={styles.totalPrice}>${totalPrice} total</Text>
    </View>
  )
}

export default Post

const styles=StyleSheet.create({
 container:{
   margin:20
 },
 image:{
     width:'100%',
     aspectRatio:3/2,
     borderRadius:10
 },
 rooms:{
  marginVertical:10,
  color:"#5b5b5b",
  fontSize:16
 },
 Desc:{
   fontSize:18,
   fontWeight:'400',
   lineHeight:26,
   color:'#191919'
 },
 prices:{
   flexDirection:'row',
   fontSize:18,
   marginVertical:10,
   color:'#191919'
 },
 oldprice:{
  fontSize:18,
  color:'#5b5b5b',
  textDecorationLine:'line-through'
 },
 price:{
  fontWeight:'bold',
 },
 totalPrice:{
  textDecorationLine:'underline',
  color:'#5b5b5b'
 }

})