![Carousel Demo](./app/assest/gif.gif)



## USE COMPONENT
```javascript
<Carousel data={data} 
       dotEnable={true} 
       carouselEnable={enable} 
       carouselClose={()=>setEnable(false)} 
       renderItem={(item,index)=>{
         return(
          <View style={{}} >
            <Image key={index} source={{ uri: item.image }} style={{ width: 280, height: 500) }} />
          </View>
         )
       }} >
</Carousel>




