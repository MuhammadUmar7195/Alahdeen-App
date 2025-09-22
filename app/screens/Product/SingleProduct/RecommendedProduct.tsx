import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ClipboardIcon } from 'react-native-heroicons/outline';

export default function RecommendedProduct() {
    const recommendedProducts = [
        { id: 1, name: "Recommended 1", uri: "https://picsum.photos/id/301/200/200", price: 25.99, discount: "12% OFF" },
        { id: 2, name: "Recommended 2", uri: "https://picsum.photos/id/302/200/200", price: 35.99, discount: "18% OFF" },
        { id: 3, name: "Recommended 3", uri: "https://picsum.photos/id/307/200/200", price: 45.99, discount: "22% OFF" },
        { id: 4, name: "Recommended 4", uri: "https://picsum.photos/id/304/200/200", price: 15.99, discount: "8% OFF" },
        { id: 5, name: "Recommended 5", uri: "https://picsum.photos/id/305/200/200", price: 55.99, discount: "30% OFF" },
    ];

    const renderRecommendedCard = ({ item }: { item: { id: number; name: string; uri: string; price: number; discount: string } }) => (
        <TouchableOpacity
            className="bg-white rounded-xl shadow-sm overflow-hidden w-32 mr-3"
            style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 3, 
                marginBottom: 10,
            }}
        >
            <Image source={{ uri: item.uri }} className="w-full h-20" resizeMode="cover" />
            <View className="p-3">
                <Text
                    className="text-sm font-semibold text-gray-800 mb-1 text-center"
                    numberOfLines={2}
                    style={{ minHeight: 40 }}
                >
                    {item.name}
                </Text>
                <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-xs font-bold text-green-600">
                        ${item.price.toFixed(2)}
                    </Text>
                    <View className="bg-red-500 px-1 py-0.5 rounded-full">
                        <Text className="text-white text-xs font-semibold">
                            {item.discount}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity className="bg-primary px-2 py-2 rounded-full flex-row items-center justify-center">
                    <ClipboardIcon size={16} color="white" />
                    <Text className="text-xs font-semibold text-white text-center ml-1">
                        Get Quote
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View className="mt-6">
            <View className="flex-row items-center justify-between mb-4 px-4">
                <Text className="text-xl font-bold text-gray-800">Recommended Products</Text>
            </View>
            <FlatList
                data={recommendedProducts}
                renderItem={renderRecommendedCard}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            />
        </View>
    );
}