import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Carousel from '../Component/Carousel';
import { scale } from '../utils/scale';


function Home() {

  const [enable,setEnable] = useState(false)

  const data = [
    {
      image:"https://images.unsplash.com/photo-1721332149371-fa99da451baa?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      image:"https://images.unsplash.com/photo-1730569117126-cb71ec44a5f9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, 
    {
      image:"https://images.unsplash.com/photo-1730386114671-b1112a4c3959?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, 
  ]

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <View style={{flex:1,backgroundColor:"white",}} >
        <View style={{alignItems:"center",justifyContent:"center",marginTop:scale(50)}} >
          <TouchableOpacity onPress={()=>setEnable(true)} >
         <View style={{width:scale(150),height:scale(50),borderRadius:10,backgroundColor:"#cd6155"}} >
         </View>
          </TouchableOpacity>
        </View>
        
       <Carousel data={data} 
       dotEnable={true} 
       carouselEnable={enable} 
       carouselClose={()=>setEnable(false)} 
       renderItem={(item,index)=>{
         return(
          <View style={{}} >
            <Image key={index} source={{ uri: item.image }} style={{ width: scale(280), height: scale(500) }} />
          </View>
         )
       }} >
       </Carousel>
      </View>
    </SafeAreaView>
  );
}




export default Home;
