import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React, { useState } from 'react'
import HomeTab from '../../Tabs/HomeTab'
import MyTrip from '../../Tabs/MyTrip'
import WhereToGo from '../../Tabs/WhereToGo'
import Money from '../../Tabs/Money'
import Host from '../../Tabs/Host'


const Home = () => {
    const [seletedTab, setSeletedTab] = useState(0)
    const [yesScroll, setYesscroll] = useState(false)
  return (
    <View style={{flex:1}}>
        {seletedTab == 0 ? (
        <HomeTab/>
        ) : seletedTab == 1 ? (
        <MyTrip/>
        ) : seletedTab == 2 ? (
        <WhereToGo/>
        ) : seletedTab == 3 ? (
        <Money/> 
        ) : (
            <Host/>
        )}

      <View style={{flexDirection:'row', backgroundColor:'#000', height:80, position:'absolute', bottom:0, width:'100%',
    alignItems:'center'}}>
        <TouchableOpacity style={{width:'20%', height:'100%', justifyContent:'center',alignItems:'center',}}
        onPress={()=>{
            setSeletedTab(0)
        }}
        >
            <Text style={{
                color:seletedTab == 0 ? '#0381ff' : '#8e8e8e',
                fontSize:16,
                fontWeight:'800',
                fontStyle:'italic',
            }}> My</Text>
                <Image 
            source={require('../../Images/home.png')}
            style={{width:25,height:25,tintColor: seletedTab == 0 ? '#0381ff' : '#8e8e8e'}}
            />
            <Text style={{color:seletedTab == 0 ? '#0381ff' : '#8e8e8e', fontSize:12}}> Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:'20%', height:'100%', justifyContent:'center',alignItems:'center',}}
          onPress={()=>{
            setSeletedTab(1)
        }}
        
        >
            <Text style={{
                color:seletedTab == 1 ? '#0381ff' : '#8e8e8e',
                fontSize:16,
                fontWeight:'800',
                fontStyle:'italic',
            }}> My</Text>
            <Image 
            source={require('../../Images/home.png')}
            style={{width:25,height:25,tintColor: seletedTab == 1 ? '#0381ff' : '#8e8e8e'}}
            />
            <Text style={{color:seletedTab == 1 ? '#0381ff' : '#8e8e8e', fontSize:12}}> Trip </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'20%', height:'100%', justifyContent:'center',alignItems:'center',}}
          onPress={()=>{
            setSeletedTab(2)
        }}
        >
            <Text style={{
                color:seletedTab == 2 ? '#0381ff' : '#8e8e8e',
                fontSize:16,
                fontWeight:'800',
                fontStyle:'italic',
            }}> My</Text>
            <Text style={{color:seletedTab == 2 ? '#0381ff' : '#8e8e8e', fontSize:12}}> Where To Go</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'20%', height:'100%', justifyContent:'center',alignItems:'center',}}
          onPress={()=>{
            setSeletedTab(3)
        }}
        >
            <Image 
            source={require('../../Images/home.png')}
            style={{width:25,height:25,tintColor:seletedTab == 3 ? '#0381ff' : '#8e8e8e'}}
            />
            <Text style={{color:seletedTab == 3 ? '#0381ff' : '#8e8e8e', fontSize:12}}>Trip Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'20%', height:'100%', justifyContent:'center',alignItems:'center',}}
        onPress={()=>{
            setSeletedTab(4)
        }}>
            <Image 
            source={require('../../Images/home.png')}
            style={{width:25,height:25,tintColor:seletedTab == 4 ? '#0381ff' : '#8e8e8e'}}
            />
            <Text style={{color:seletedTab == 4 ? '#0381ff' : '#8e8e8e', fontSize:12}}> Be A Host </Text>
        </TouchableOpacity>

         </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})