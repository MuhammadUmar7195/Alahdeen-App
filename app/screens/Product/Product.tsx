import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ClipboardIcon } from "react-native-heroicons/outline";

type Product = {
    id: number;
    name: string;
    price: number;
    discount: string;
    image: string;
};

export default function Product() {
    const trendingProducts: Product[] = [
        {
            id: 1,
            name: "Floral Maxi Dress",
            price: 45.99,
            discount: "20% OFF",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 2,
            name: "Beach Sandals",
            price: 29.99,
            discount: "15% OFF",
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 3,
            name: "Summer Sunglasses",
            price: 19.99,
            discount: "30% OFF",
            image: "https://picsum.photos/id/1/200/300",
        },
    ];

    const allProducts: Product[] = [
        ...trendingProducts,
        {
            id: 4,
            name: "Leather Handbag",
            price: 89.99,
            discount: "10% OFF",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 5,
            name: "Running Shoes",
            price: 79.99,
            discount: "25% OFF",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 6,
            name: "Smart Watch",
            price: 199.99,
            discount: "15% OFF",
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 7,
            name: "DSLR Camera",
            price: 549.99,
            discount: "12% OFF",
            image: "https://picsum.photos/id/5/200/300",
        },
        {
            id: 8,
            name: "Office Chair",
            price: 149.99,
            discount: "18% OFF",
            image: "https://picsum.photos/id/2/200/300",
        },
        {
            id: 9,
            name: "Coffee Maker",
            price: 49.99,
            discount: "22% OFF",
            image: "https://picsum.photos/id/3/200/300",
        },
        {
            id: 10,
            name: "Electric Guitar",
            price: 299.99,
            discount: "10% OFF",
            image: "https://picsum.photos/id/4/200/300",
        },
        {
            id: 11,
            name: "Mountain Bike",
            price: 499.99,
            discount: "20% OFF",
            image: "https://picsum.photos/id/5/200/300",
        },
        {
            id: 12,
            name: "Smartphone",
            price: 899.99,
            discount: "12% OFF",
            image: "https://picsum.photos/id/6/200/300",
        },
        {
            id: 13,
            name: "Tablet",
            price: 399.99,
            discount: "8% OFF",
            image: "https://picsum.photos/id/10/200/300",
        },
        {
            id: 14,
            name: "Sunglasses",
            price: 29.99,
            discount: "35% OFF",
            image: "https://picsum.photos/id/7/200/300",
        },
        {
            id: 15,
            name: "Perfume",
            price: 59.99,
            discount: "18% OFF",
            image: "https://picsum.photos/id/19/200/300",
        },
    ];

    const renderTrendingCard = ({ item }: { item: Product }) => (
        <TouchableOpacity
            className="bg-white rounded-xl shadow-sm overflow-hidden mr-3"
            style={{
                width: 160, // Fixed width
                height: 280, // Fixed height
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                marginBottom: 10,
                elevation: 3,
            }}
        >
            <Image
                source={{ uri: item.image }}
                className="w-full h-40" // Fixed height for image
                resizeMode="cover"
            />
            <View className="p-3 flex-1 justify-between">
                <View>
                    <Text
                        numberOfLines={2}
                        className="text-sm font-semibold text-gray-800 mb-2 min-h-[40px]" // Minimum height for title
                    >
                        {item.name}
                    </Text>
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className="text-xs font-bold text-green-600">
                            ${item.price}
                        </Text>
                        <View className="bg-red-500 px-2 py-1 rounded-full">
                            <Text className="text-white text-xs font-semibold">
                                {item.discount}
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity className="bg-primary px-2 py-2 rounded-full flex-row items-center justify-center mt-auto">
                    <ClipboardIcon size={16} color="white" />
                    <Text className="text-xs font-semibold text-white text-center ml-1">
                        Get Quote
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    const renderProductGrid = ({ item }: { item: Product }) => (
        <TouchableOpacity
            className="bg-white rounded-xl shadow-sm overflow-hidden flex-1 m-1"
            style={{
                width: '31%',
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 3,
            }}
        >
            <Image
                source={{ uri: item.image }}
                className="w-full h-24"
                resizeMode="cover"
            />
            <View className="p-2">
                <Text
                    numberOfLines={1}
                    className="text-xs font-semibold text-gray-800 mb-1"
                >
                    {item.name}
                </Text>
                <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-xs font-bold text-green-600">
                        ${item.price}
                    </Text>
                    <Text className="text-red-500 text-xs font-semibold">
                        {item.discount}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1">
            {/* Trending Products Section */}
            <View className="mt-6">
                <View className="flex-row items-center justify-between mb-4 px-4">
                    <Text className="text-xl font-bold text-gray-800">
                        Trending Products
                    </Text>
                    <TouchableOpacity>
                        <Text className="text-black font-semibold">See All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={trendingProducts}
                    renderItem={renderTrendingCard}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                />
            </View>

            {/* All Products Grid Section */}
            <View className="mt-6 px-4">
                <View className="flex-row items-center justify-between mb-4">
                    <Text className="text-xl font-bold text-gray-800">
                        All Products
                    </Text>
                </View>
                <FlatList
                    data={allProducts}
                    renderItem={renderProductGrid}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                    }}
                />
            </View>
        </View>
    )
}