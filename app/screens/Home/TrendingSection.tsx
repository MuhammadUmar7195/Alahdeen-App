import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function TrendingSection() {
    const trendingProduct = [
        {
            id: 1,
            name: "Floral Maxi Dress",
            price: 45.99,
            discount: "20% OFF",
            image:
                "https://images.unsplash.com/photo-1520975922038-3c0f55d5b1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 2,
            name: "Beach Sandals",
            price: 29.99,
            discount: "15% OFF",
            image:
                "https://images.unsplash.com/photo-1600180758895-6be9b30a0d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 3,
            name: "Summer Sunglasses",
            price: 19.99,
            discount: "30% OFF",
            image:
                "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 4,
            name: "Casual T-Shirt",
            price: 15.5,
            discount: "10% OFF",
            image:
                "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 5,
            name: "Straw Hat",
            price: 22.0,
            discount: "25% OFF",
            image:
                "https://images.unsplash.com/photo-1621072154065-7d21f1a2c3a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 6,
            name: "Denim Shorts",
            price: 34.75,
            discount: "18% OFF",
            image:
                "https://images.unsplash.com/photo-1520962918287-7448c2878f65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
    ];

    return (
        <View className="mt-6 px-4">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-xl font-bold text-gray-800">Trending Product</Text>
                <TouchableOpacity>
                    <Text className="text-black font-semibold">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {trendingProduct.map((promoCat) => (
                    <TouchableOpacity key={promoCat.id} className="bg-white rounded-xl shadow-sm overflow-hidden w-36 mr-3">
                        <Image source={{ uri: promoCat.image }} className="w-full h-20" resizeMode="cover" />
                        <View className="p-3">
                            <Text className="text-sm font-semibold text-gray-800 mb-1 text-center">{promoCat.name}</Text>

                            {/* Price and Discount */}
                            <View className="flex-row items-center justify-between mb-2">
                                <Text className="text-sm font-bold text-green-600">
                                    ${promoCat.price}
                                </Text>
                                <View className="bg-red-500 px-2 py-1 rounded-full">
                                    <Text className="text-white text-xs font-semibold">
                                        {promoCat.discount}
                                    </Text>
                                </View>
                            </View>

                            {/* Get Quote Button inside each card */}
                            <TouchableOpacity className="bg-blue-500 py-2 px-3 rounded-lg">
                                <Text className="text-white text-xs font-semibold text-center">
                                    Get Quote
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}