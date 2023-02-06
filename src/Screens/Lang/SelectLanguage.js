import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'

const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

const SelectLanguage = () => {
  const navigation = useNavigation();

  const [seletedTab, setSeletedTab] = useState(0);

  return (
    <View style={{ flex: 1, }}>
      <Image source={require('../../Images/bg.jpg')} style={{ width: '100%', height: height / 1.5 }} />

      <View style={{ flex: 1, position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,.5)' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image source={require('../../Images/logo.png')} style={{ width: 100, height: 40, resizeMode: 'contain', marginLeft: 20 }} />
          <Text style={{ marginRight: 20, color: '#fff', fontSize: 18 }}> SKIP</Text>
        </View>
        <View style={{ width: '100%', height: 400, position: 'absolute', bottom: 0 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../Images/lang.png')} style={{ width: 30, height: 30, tintColor: '#fff' }} />
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600', marginLeft: 20, }}> Welcome</Text>
          </View>
          <Text style={{ fontSize: 24, fontWeight: '700', color: '#fff', marginLeft: 20, marginTop: 10 }}> Select your Language</Text>
          <Text style={{ fontSize: 16, width: '90%', color: '#fff', marginLeft: 20, marginTop: 10 }}> you can also change Language in App Setting after siging in </Text>
          <TouchableOpacity
            disabled={true}
            style={{
              backgroundColor: '#fff',
              width: '94%',
              alignSelf: 'center',
              height: 300,
              marginTop: 15,
              borderRadius: 5,
            }}
          >
            <TouchableOpacity
              style={{
                width: '90%', height: 50, borderRadius: 6, borderWidth: 0.5,
                borderColor: seletedTab == 0 ? '#3385ff' : '#8e8e8e',
                backgroundColor: seletedTab == 0 ? '#e6f0ff' : '#fff',
                alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30
              }}
              onPress={() => {
                setSeletedTab(0)
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <Image source={
                  seletedTab == 0 
                  ? require('../../Images/radiobuttonb.png')
                  : require('../../Images/radiobuttons.png') 
                
                }
                  style={{ width: 24, height: 24, marginLeft: 10, tintColor:'#3385ff' }} 
                  />

                <Text style={{
                  marginLeft: 10, color: seletedTab == 0 ? '#000' : null,
                  fontSize: 16,
                }}> English </Text>
              </View>
              <Image source={require('../../Images/a.png')} style={{ width: 20, height: 20, marginRight: 20, alignSelf: 'center', }} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '90%', height: 50, borderRadius: 6,
                borderColor: seletedTab == 1 ? '#3385ff' : '#8e8e8e',
                backgroundColor: seletedTab == 1 ? '#e6f0ff' : '#fff',

                borderWidth: 0.5, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20
              }}
              onPress={() => {
                setSeletedTab(1)
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={
                  seletedTab == 1
                  ? require('../../Images/radiobuttonb.png')
                  : require('../../Images/radiobuttons.png') 
                
                }
                  style={{ width: 24, height: 24, marginLeft: 10 }} 
                  />
                <Text style={{ marginLeft: 10, color: seletedTab == 1 ? '#000' : null, fontSize: 16 }}> हिन्दी</Text>
              </View>
              <Text style={{ fontSize: 25, fontWeight: '800', color: '#000', marginRight: 20 }}>क</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              width: '90%', height: 50, backgroundColor: '#3385ff', alignSelf: 'center', marginTop: 45, borderRadius: 6, justifyContent: 'center', alignItems: 'center',
            }}
              onPress={() => { navigation.navigate('Login'); }}
            >
              <Text style={{ fontSize: 18, color: '#fff', fontWeight: '900' }}> Continue </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SelectLanguage
const styles = StyleSheet.create({


})