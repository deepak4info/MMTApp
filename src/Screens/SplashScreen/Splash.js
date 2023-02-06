import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.navigate('SelectLanguage')
    },[])

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
    <Image source={require('../../Images/logo.png')} style={{width:200, height:100, resizeMode:'contain'}}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})