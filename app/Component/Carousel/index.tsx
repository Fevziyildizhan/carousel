import React, { useRef } from 'react';
import {
  View,
  Animated,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { scale } from '../../utils/scale';
import Close from './components/Close';
import RenderPaginationDots from  "./components/RenderPaginationDots";

const { width,height } = Dimensions.get('window');
const ITEM_WIDTH = scale(280);
const ITEM_SPACING = (width - ITEM_WIDTH) / 2;

interface CarouselProps<T> {
  carouselEnable?:boolean;
  data?: object[]; 
  dotEnable?: boolean;
  dotWidth?: number;
  dotHeight?: number;
  dotStyle?:StyleProp<ViewStyle>;
  dotViewStyle?:StyleProp<ViewStyle>;
  renderItem?: (item: object, index: number) => JSX.Element;
  carouselClose?:  () => void
  closeComponent?:JSX.Element,
  carouselStyle?:StyleProp<ViewStyle>;
}

const Carousel = <T,>({
  carouselEnable,
  data,
  dotEnable = true,
  dotWidth = 10,
  dotHeight = 10,
  dotViewStyle,
  dotStyle,
  renderItem,
  carouselClose,
  closeComponent,
  carouselStyle
}: CarouselProps<T>) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    carouselEnable &&
    <View style={[{ backgroundColor: 'white', zIndex: 1, position: 'absolute',width,height,justifyContent:"center"},carouselStyle]}>
      <Close
       carouselClose={carouselClose}
       closeComponent={closeComponent}
      />
      <View style={{ }}>
        <Animated.FlatList
          data={data}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEnabled={data.length > 1}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item , index }) => {
            const inputRange = [
              (index - 1) * ITEM_WIDTH,
              index * ITEM_WIDTH,
              (index + 1) * ITEM_WIDTH,
            ];

            const scaleValue = scrollX.interpolate({
              inputRange,
              outputRange: [0.8, 1, 0.8],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                style={{
                  transform: [{ scale: scaleValue }],
                  overflow: 'hidden',
                }}
              >
                {renderItem(item, index)}
              </Animated.View>
            );
          }}
        />
        {dotEnable && 
        <RenderPaginationDots
         data={data}
         dotHeight={dotHeight}
         dotWidth={dotWidth}
         dotViewStyle={dotViewStyle}
         dotStyle={dotStyle}
         scrollX={scrollX}
        />}
      </View>
    </View>
  );
};

export default Carousel;
