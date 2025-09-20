import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function ProductCategory() {
    const topCategories = [
        {
            id: 1,
            name: "Electrical & Electronics",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            name: "Fashion",
            image:
                "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            name: "Home & Garden",
            image:
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            name: "Gaming",
            image:
                "https://picsum.photos/id/130/200/300",
        },
    ];

    const categories = [
        {
            id: 1,
            name: "Laptops",
            image: "https://picsum.photos/id/1/200/300",
        },
        {
            id: 2,
            name: "Smartphones",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 3,
            name: "Headphones",
            image: "https://picsum.photos/id/9/200/300",
        },
        {
            id: 4,
            name: "Cameras",
            image: "https://picsum.photos/id/30/200/300",
        },
        {
            id: 5,
            name: "Smartwatches",
            image: "https://picsum.photos/id/10/200/300",
        },
        {
            id: 6,
            name: "Gaming Consoles",
            image: "https://picsum.photos/id/70/200/300",
        },
        {
            id: 7,
            name: "Garments & Clothing",
            image: "https://picsum.photos/id/73/200/300",
        },
        {
            id: 8,
            name: "Cosmetics",
            image: "https://picsum.photos/id/75/200/300",
        },
        {
            id: 9,
            name: "Home Appliances",
            image: "https://picsum.photos/id/100/200/300",
        },
        {
            id: 10,
            name: "Shoes & Footwear",
            image: "https://picsum.photos/id/101/200/300",
        },
        {
            id: 11,
            name: "Furniture",
            image: "https://picsum.photos/id/102/200/300",
        },
        {
            id: 12,
            name: "Books",
            image: "https://picsum.photos/id/103/200/300",
        },
        {
            id: 13,
            name: "Sports Equipment",
            image: "https://picsum.photos/id/104/200/300",
        },
        {
            id: 14,
            name: "Bags & Accessories",
            image: "https://picsum.photos/id/105/200/300",
        },
        {
            id: 15,
            name: "Jewelry",
            image: "https://picsum.photos/id/106/200/300",
        },
        {
            id: 16,
            name: "Kitchenware",
            image: "https://picsum.photos/id/107/200/300",
        },
        {
            id: 17,
            name: "Groceries",
            image: "https://picsum.photos/id/108/200/300",
        },
        {
            id: 18,
            name: "Medicines & Healthcare",
            image: "https://picsum.photos/id/109/200/300",
        },
        {
            id: 19,
            name: "Toys & Kids",
            image: "https://picsum.photos/id/110/200/300",
        },
        {
            id: 20,
            name: "Stationery",
            image: "https://picsum.photos/id/111/200/300",
        },
        {
            id: 21,
            name: "Pet Supplies",
            image: "https://picsum.photos/id/112/200/300",
        },
        {
            id: 22,
            name: "Car Accessories",
            image: "https://picsum.photos/id/113/200/300",
        },
        {
            id: 23,
            name: "Motorcycles & Scooters",
            image: "https://picsum.photos/id/114/200/300",
        },
        {
            id: 24,
            name: "Cars",
            image: "https://picsum.photos/id/115/200/300",
        },
        {
            id: 25,
            name: "Travel & Luggage",
            image: "https://picsum.photos/id/116/200/300",
        },
        {
            id: 26,
            name: "Musical Instruments",
            image: "https://picsum.photos/id/117/200/300",
        },
        {
            id: 27,
            name: "Art & Craft",
            image: "https://picsum.photos/id/118/200/300",
        },
        {
            id: 28,
            name: "Gardening Tools",
            image: "https://picsum.photos/id/119/200/300",
        },
        {
            id: 29,
            name: "Fitness & Gym",
            image: "https://picsum.photos/id/120/200/300",
        },
        {
            id: 30,
            name: "Office Supplies",
            image: "https://picsum.photos/id/121/200/300",
        },
    ];

    const renderTopCategoryCard = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            className="bg-white rounded-lg overflow-hidden mr-4"
            style={{
                width: 200,
                height: 120,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                marginBottom: 14,
                elevation: 5,
            }}
        >
            <Image
                source={{ uri: item.image }}
                className="w-full h-3/4"
                resizeMode="cover"
            />
            <View className="p-2">
                <Text className="text-sm font-semibold text-gray-800 text-center">
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const renderCategoryCard = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            className="bg-white rounded-lg overflow-hidden flex-1 m-2"
            style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5, // For Android shadow
            }}
        >
            <Image
                source={{ uri: item.image }}
                className="w-full h-24"
                resizeMode="cover"
            />
            <View className="p-2">
                <Text className="text-sm font-semibold text-gray-800 text-center">
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-white py-4">
            {/* Top Categories Section */}
            <View className="mb-6">
                <View className="flex-row items-center justify-between mb-4 px-4">
                    <Text className="text-xl font-bold text-gray-800">Top Categories</Text>
                </View>
                <FlatList
                    data={topCategories}
                    renderItem={renderTopCategoryCard}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                />
            </View>

            {/* Categories Grid Section */}
            <View className="px-4">
                <View className="flex-row items-center justify-between mb-4">
                    <Text className="text-xl font-bold text-gray-800">Categories</Text>
                    <TouchableOpacity>
                        <Text className="text-black font-semibold">See All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={categories}
                    renderItem={renderCategoryCard}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}