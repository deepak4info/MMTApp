import { StyleSheet, Text, View ,ScrollView, Image } from 'react-native'
import React,{useState} from 'react'


const HomeTab = () => {
 
  return (
    <ScrollView style={{flex:1, backgroundColor:'green'}}>
      <View style={{width:'100%',}}>
        <Image 
        source={require('../Images/sun.jpg')}
        style={{width:'100%', height:'100%'}} 
        /> 
      </View>
    </ScrollView>
  )
}

export default HomeTab

const styles = StyleSheet.create({})