import React, { useRef, useState } from "react";
import { Dimensions, ImageBackground, ScrollView, View } from "react-native";

const { width } = Dimensions.get('window');

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const bannerImages = [
    require("../../assets/images/banner1.jpg"),
    require("../../assets/images/banner2.jpg"),
    require("../../assets/images/banner3.jpg"),
    require("../../assets/images/banner4.jpg"),
    require("../../assets/images/banner5.jpg"),
  ];

  const handleScroll = (e: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
    const scrollPosition = e.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (width - 32));
    setCurrentIndex(index);
  };

  return (
    <View className="m-4 rounded-xl overflow-hidden h-40">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {bannerImages.map((image, index) => (
          <View key={index} style={{ width: width - 32 }}>
            <ImageBackground
              source={image}
              className="flex-1 justify-center items-center"
              resizeMode="cover"
            >
              <View className="absolute inset-0 bg-black/20" />
            </ImageBackground>
          </View>
        ))}
      </ScrollView>

      {/* Slider Bubbles/Dots */}
      <View className="absolute bottom-4 left-0 right-0 flex-row justify-center">
        {bannerImages.map((_, index) => (
          <View
            key={index}
            className={`mx-1 ${index === currentIndex
                ? 'bg-primary w-4 h-2 rounded-full' // Active dot: larger and elongated
                : 'bg-primary/50 w-2 h-2 rounded-full' // Inactive dots: smaller and circular
              }`}
          />
        ))}
      </View>
    </View>
  );
};

export default Banner;
