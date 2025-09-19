import React from "react";
import { ImageBackground, View } from "react-native";

const Banner = () => {
  return (
    <View className="m-4 rounded-xl overflow-hidden h-40">
      <ImageBackground
        source={require('../../../assets/images/banner.jpg')}
        className="flex-1 justify-center items-center"
        resizeMode="cover"
      >
        {/* Optional: Add overlay for better text readability if needed */}
        <View className="absolute inset-0 bg-black/20" />
      </ImageBackground>
    </View>
  );
};

export default Banner;
