import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ClipboardIcon } from 'react-native-heroicons/outline';

export default function RelatedProduct() {
    const relatedCategories = [
        { id: 1, name: "Product 1", uri: "https://picsum.photos/id/201/200/200", price: 29.99, discount: "10% OFF" },
        { id: 2, name: "Product 2", uri: "https://picsum.photos/id/202/200/200", price: 39.99, discount: "15% OFF" },
        { id: 3, name: "Product 3", uri: "https://picsum.photos/id/203/200/200", price: 49.99, discount: "20% OFF" },
        { id: 4, name: "Product 4", uri: "https://picsum.photos/id/204/200/200", price: 19.99, discount: "5% OFF" },
        { id: 5, name: "Product 5", uri: "https://picsum.photos/id/205/200/200", price: 59.99, discount: "25% OFF" },
    ];

    const renderRelatedCard = ({ item }: { item: { id: number; name: string; uri: string; price: number; discount: string } }) => (
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
                <Text className="text-xl font-bold text-gray-800">Related Products</Text>
            </View>
            <FlatList
                data={relatedCategories}
                renderItem={renderRelatedCard}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            />
        </View>
    );
}