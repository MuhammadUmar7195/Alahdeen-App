import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ClipboardIcon } from 'react-native-heroicons/outline'; // Import ClipboardIcon

export default function TrendingSection() {
    const trendingProduct = [
        {
            id: 1,
            name: "Floral Maxi Dress",
            price: 45.99,
            discount: "20% OFF",
            image:
                "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 2,
            name: "Beach Sandals",
            price: 29.99,
            discount: "15% OFF",
            image:
                "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
                "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 5,
            name: "Straw Hat",
            price: 22.0,
            discount: "25% OFF",
            image:
                "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 6,
            name: "Denim Shorts",
            price: 34.75,
            discount: "18% OFF",
            image:
                "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
                {trendingProduct.map((promoCat, index) => (
                    <TouchableOpacity
                        key={promoCat.id}
                        className={`bg-white rounded-xl shadow-sm overflow-hidden w-36 ${
                            index !== trendingProduct.length - 1 ? "mr-3" : ""
                        }`}
                    >
                        {/* Product Image */}
                        <Image source={{ uri: promoCat.image }} className="w-full h-20" resizeMode="cover" />

                        {/* Product Info */}
                        <View className="p-3">
                            {/* Fixed height for title to ensure consistent layout */}
                            <Text
                                className="text-sm font-semibold text-gray-800 mb-1 text-center"
                                numberOfLines={2} // Ensures the title doesn't overflow
                                style={{ minHeight: 40 }} // Adjust height to accommodate longer titles
                            >
                                {promoCat.name}
                            </Text>

                            {/* Price and Discount */}
                            <View className="flex-row items-center justify-between mb-2">
                                <Text className="text-xs font-bold text-green-600">
                                    ${promoCat.price}
                                </Text>
                                <View className="bg-red-500 px-1 py-0.5 rounded-full">
                                    <Text className="text-white text-xs font-semibold">
                                        {promoCat.discount}
                                    </Text>
                                </View>
                            </View>

                            {/* Get Quote Button */}
                            <TouchableOpacity className="bg-primary px-2 py-2 rounded-full flex-row items-center justify-center">
                                <ClipboardIcon size={16} color="white" />
                                <Text className="text-xs font-semibold text-white text-center ml-1">
                                    Get Quote
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}