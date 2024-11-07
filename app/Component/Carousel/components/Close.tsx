import React from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';


const Close = ({carouselClose,closeComponent}) =>{

    return(
        closeComponent ||
        <View style={{position: 'absolute',zIndex: 1,top:20,left:20 }} >
        <TouchableOpacity onPress={carouselClose} >
        <View style={{width:50,height:50,borderRadius:40,backgroundColor:"#ec7063",alignItems:"center",justifyContent:"center"}} >
          <Image style={{width:15,height:15,tintColor:"#FFFFFF"}} source={require("../../../assest/close.png")} />
        </View>
        </TouchableOpacity>
       </View>
    )

}

export default Close;