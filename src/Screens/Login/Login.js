import { StyleSheet, Text, View, Image,TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = ({navigate}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
    return (
    <View style={styles.container}>
      <Image source={require('../../Images/bg.jpg')} 
      style={{width:'100%', height:'70%'}}
      />
      <View style={styles.blurview}>
      <Image source={require('../../Images/logo.png')}
      style={{width:100, height:30, margin:20}}
      />
      <Text style={styles.title}> {'Join the club of 10 crore Happy Travellers'}</Text>
      </View>

      <View style={styles.CardView}>
        <TouchableOpacity style={styles.card}>
        <View style={styles.CardInnerView}>
          <Text style={styles.CardInnerViewText}> Use Mobile Number or Email to Login/Signup</Text>
          <TextInput 
          value={email}
          onChangeText={txt=>{
            setEmail(txt)
          }}
          placeholder='Enter Mobile or Email' style={styles.CardInnerViewTextInput}/>
          <TouchableOpacity style={[styles.BtnContinue,{backgroundColor:email =='' ? '#f2f2f2': '#3385ff'}]}
           onPress={() => { navigation.navigate('Home'); }}
          > 
<Text style={styles.BtnContinueTxt}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.devider}> 
            <View style={styles.line}></View>
            <Text> or Login/Signup with</Text>
            <View style={styles.line}></View>
          </View>
          <TouchableOpacity style={styles.googlebtn}>
          <Image source={require('../../Images/search.png')} style={styles.google} />
          <Text style={styles.googleTitle}>Sign in With Google</Text>
          </TouchableOpacity>
          <View style={styles.referalView}>
            <Text style={styles.ref1}> Have a</Text>
            <Text  style={styles.ref2}> Referral Code ? </Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  blurview:{
    width:'100%',
    position:'absolute',
    top:0,
    left:0,
    right:0,
    height:'70%',
    backgroundColor:'rgba(0,0,0,.3)',
  },
  title:{
    fontSize:20,
    fontWeight:'800',
    color:'#fff',
    marginLeft:20,
    marginTop:40,
  },
  CardView:{
    width:'100%',
    marginTop:-250,
  },
  card:{
    width:'90%',
    backgroundColor:'#fff',
    borderRadius:10,
    alignSelf:'center',
  },
  CardInnerView:{
width:'100%',
height:'100%',
  },
  CardInnerViewText:{
    alignSelf:'center',
    marginTop:20,
    fontSize:12,
  },
  CardInnerViewTextInput:{
    width:'90%',
    height:50,
    borderRadius:10,
    borderWidth:2,
    alignSelf:'center',
    marginTop:20,
    borderColor:'#3385ff',
    paddingLeft:20,
    fontSize:16,
    fontWeight:'600',
  },
  BtnContinue:{
    width:'90%',
    height:50,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:20,
  },
  BtnContinueTxt:{
    fontSize:20,
    color:'#fff',
    fontWeight:'800',
  },
  devider:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:30,
  },
  line:{
    width:60,
    height:2,
    backgroundColor:'#8e8e8e',
    opacity:.3,
    marginLeft:10,
    marginRight:10,
  },
  googlebtn:{
    width:'90%',
    height:50,
    borderWidth:1,
    flexDirection:'row',
    borderRadius:6,
    alignItems:'center',
    alignSelf:'center',
    marginTop:30,
  },
  google:{
    width:24,
    height:24,
    marginLeft:40,
    marginRight:20,
  },
  googleTitle:{
    fontSize:18,
    color:'#000',
  },
  referalView:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:20, 
  },
  ref1:{
    color:'#000',
    fontSize:15,
  },
  ref2:{
    fontSize:15,
    fontWeight:'800',
    color:'#3385ff',
  }

})