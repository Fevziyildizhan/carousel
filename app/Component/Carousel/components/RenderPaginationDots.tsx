import React, { useRef } from 'react';
import {
  View,
  Animated,
  Dimensions,
} from 'react-native';
import { scale } from "../../../utils/scale";

const ITEM_WIDTH = scale(280);

const RenderPaginationDots = ({data,dotHeight,dotWidth,dotViewStyle,dotStyle,scrollX}) =>{
  return(
    <View style={[{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 },dotViewStyle]}>
      {data?.map((_, index) => {
        const opacity = scrollX.interpolate({
          inputRange: [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index}
            style={[{
              opacity,
              height: dotHeight,
              width: dotWidth,
              borderRadius:5,
              backgroundColor: '#ec7063',
              margin: 5,
            },dotStyle]}
          />
        );
      })}
    </View>

  )


}

export default RenderPaginationDots;