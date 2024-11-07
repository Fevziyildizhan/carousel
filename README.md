![Carousel Demo](./app/assest/gif.gif)


## DESCRIPTON

A carousel is a component that allows content to be viewed through horizontal transitions. It's commonly used to display photos, videos, or products. This component provides users with the ability to navigate through the content, often with control buttons and customizable features. Users can manually scroll through the items or use the autoplay feature to automatically transition between content.


## PROPS

| Prop              | Default      | Type                         | Description                                                                                       |
|-------------------|--------------|------------------------------|--------------------------------------------------------------------------------------------------|
| `data`            | `[]`         | `object[]`                   | An array of items to be displayed in the carousel.                                               |
| `carouselEnable`  | `true`       | `boolean`                    | Set to `false` to disable the carousel.                                                          |
| `dotEnable`       | `true`       | `boolean`                    | Set to `false` to hide the pagination dots.                                                      |
| `dotWidth`        | `10`         | `number`                     | The width of each pagination dot.                                                                |
| `dotHeight`       | `10`         | `number`                     | The height of each pagination dot.                                                               |
| `dotStyle`        | `{...}`      | `{...}`                       | Custom style for the dots.                                                                       |
| `dotViewStyle`    | `{...}`      | `{...}`                       | Custom style for the container that wraps the pagination dots.                                   |
| `renderItem`      | `() => null` | `(item: object, index: number) => JSX.Element` | Function used to render each carousel item.                                                      |
| `carouselClose`   | `() => void` | `function`                    | Function to be called to close the carousel.                                                     |
| `closeComponent`  | `null`       | `JSX.Element`                | Custom component that can replace the default close button.                                      |
| `carouselStyle`   | `{...}`      | `{...}`                       | Custom style for the carousel container.                                                        |


## USE COMPONENT
```javascript
<Carousel 
   data={data} 
   dotEnable={true} 
   carouselEnable={enable} 
   carouselClose={()=>setEnable(false)} 
   renderItem={(item,index)=>{
      return(
      <View style={{}} >
         <Image 
         key={index} 
         source={{ uri: item.image }} 
         style={{ width: 280, height: 500) }} />
      </View>
      )
   }} >
</Carousel>




