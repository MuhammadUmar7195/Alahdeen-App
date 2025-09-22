import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon, HeartIcon, ShareIcon } from 'react-native-heroicons/outline';

export default function SPHeader() {
    return (
        <LinearGradient
            colors={['#46AEB4', '#1B7AB4']}
            className="px-4 pt-10 pb-6"
        >
            {/* Top Row: Back Icon + Share/Wishlist Icons */}
            <View className="flex-row items-center justify-between">
                <TouchableOpacity onPress={() => { alert('Back clicked') }}>
                    <ArrowLeftIcon size={28} color="white" />
                </TouchableOpacity>
                <View className="flex-row">
                    <TouchableOpacity
                        onPress={() => {
                            alert("Share clicked");
                        }}
                        className="mr-4"
                    >
                        <ShareIcon size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            alert("Wishlist clicked");
                        }}
                    >
                        <HeartIcon size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}