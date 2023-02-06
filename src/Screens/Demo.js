import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MotiView,MotiText, MotiImage,useAnimationState,useDynamicAnimation, ScrollView } from 'moti'

const Demo = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    const [yValue, setYValue] = useState(0)
    const [direction,setDirection] = useState('down');
    useEffect(() => {
      setTimeout(()=>{
        setVisible(true)
      },3000);
    }, []);

    const animation =useDynamicAnimation(()=>{
        return{
            width:'25%',
            height:80,
        };
    });

  return (
    <View style={{flex:1}}>
        <ScrollView style={{flex:1}}
        stickyHeaderIndices={[1]}
        onScroll={e=>{
            const currentOffset=e.nativeEvent.contentOffset.y;
            var direction = currentOffset > yValue ? 'down' :'up';
            setDirection(direction);
            setYValue(e.nativeEvent.contentOffset.y)
            if(e.nativeEvent.contentOffset.y > 60){
                animation.animateTo({width:'25%', height:60});            
            } else {
                animation.animateTo({width:'25%', height:80});
            }
        }}
        >

<MotiView
    from={{ opacity: 1}}
    animate={{ opacity: yValue > 20 ? 0.6 : 1 }}
    
  />
        </ScrollView>

    </View>
  )
}

export default Demo

const styles = StyleSheet.create({})