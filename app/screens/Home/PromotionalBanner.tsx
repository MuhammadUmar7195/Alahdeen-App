import { View, ImageBackground } from 'react-native'
import React from 'react'

export default function PromotionalBanner() {
    return (
        <View className="m-4 rounded-xl overflow-hidden h-40">
            <ImageBackground
                source={require("../../assets/images/promotionalBanner.webp")}
                className="flex-1 justify-center items-center"
                resizeMode="cover"
            >
                <View className="absolute inset-0 bg-black/20" />
            </ImageBackground>
        </View>
    )
}