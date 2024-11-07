[![github issues](./app/assest/video.mov)]



```javascript
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