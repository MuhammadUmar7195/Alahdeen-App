import React, { useState } from "react";
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { ClipboardIcon, PhoneIcon } from "react-native-heroicons/outline";
import SPHeader from "./SPHeader";
import RelatedProduct from "./RelatedProduct";
import RecommendedProduct from "./RecommendedProduct";

export default function SingleProduct() {
    const productImages = [
        { id: 1, uri: "https://picsum.photos/id/101/400/300" },
        { id: 2, uri: "https://picsum.photos/id/102/400/300" },
        { id: 3, uri: "https://picsum.photos/id/103/400/300" },
        { id: 4, uri: "https://picsum.photos/id/104/400/300" },
        { id: 5, uri: "https://picsum.photos/id/109/400/300" },
    ];

    const [selectedImage, setSelectedImage] = useState(productImages[0].uri);

    const renderImageCard = ({ item }: { item: { id: number; uri: string } }) => (
        <TouchableOpacity
            onPress={() => setSelectedImage(item.uri)}
            className="bg-white rounded-lg shadow-sm overflow-hidden m-1 border border-gray-200"
            style={{ width: 80, height: 80 }}
        >
            <Image
                source={{ uri: item.uri }}
                className="w-full h-full"
                resizeMode="cover"
            />
        </TouchableOpacity>
    );

    return (
        <View className="flex-1">
            {/* Header */}
            <View className="z-10">
                <SPHeader />
            </View>
            {/* Scrollable Content */}
            <ScrollView className="flex-1 bg-gray-50">
                {/* Main Product Image */}
                <View className="items-center">
                    <Image
                        source={{ uri: selectedImage }}
                        className="w-full h-60 rounded-lg"
                        resizeMode="cover"
                    />
                </View>

                {/* Image Grid Section */}
                <View className="mt-4 px-4">
                    {productImages.length > 0 ? (
                        <FlatList
                            data={productImages}
                            renderItem={({ item }) => {
                                return renderImageCard({ item });
                            }}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    ) : (
                        <Text className="text-center text-gray-500">No images available</Text>
                    )}
                </View>

                {/* Product Info */}
                <View className="mt-6 px-4">
                    <Text className="text-lg font-semibold text-gray-800">
                        P47 Wireless Bluetooth Foldable Headset With Microphone
                    </Text>
                    <Text className="text-sm text-gray-500 mt-1">By: Abbas Wholesale Store</Text>

                    <View className="flex-row items-center justify-between mt-4">
                        <Text className="text-xl font-bold text-blue-600">Rs.199/-</Text>
                        <Text className="text-sm text-gray-500">Mini Order Qty: 30</Text>
                    </View>

                    {/* Action Buttons */}
                    <View className="flex-row justify-between mt-5">
                        <TouchableOpacity onPress={() => { alert("Call Now") }} className="flex-1 bg-primary rounded-full py-5 mx-1 flex-row items-center justify-center">
                            <PhoneIcon size={16} color="white" className="mr-2" style={{ marginRight: 6 }} />
                            <Text className="text-white font-semibold">Call Now</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("Get Quote") }} className="flex-1 bg-secondary rounded-full py-3 mx-1 flex-row items-center justify-center">
                            <ClipboardIcon size={16} color="white" style={{ marginRight: 6 }} />
                            <Text className="text-white font-semibold">Get Quote</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Seller Section */}
                <View className="bg-white rounded-lg shadow mt-6 mx-4 p-4 flex-row items-center">
                    <Image
                        source={{
                            uri: "https://picsum.photos/seed/logo/100/100",
                        }}
                        className="w-14 h-14 rounded-full"
                    />
                    <View className="ml-4 flex-1">
                        <Text
                            className="font-semibold text-gray-800"
                            style={{ flexWrap: "wrap" }}
                        >
                            Abbas Wholesale Store
                        </Text>
                        <Text
                            className="text-sm text-gray-500"
                            style={{ flexWrap: "wrap" }}
                        >
                            Shop no. 353, Bolton Plaza
                        </Text>
                    </View>
                    <TouchableOpacity className="bg-secondary rounded-full px-4 py-3">
                        <Text onPress={() => { alert("View more pressed") }} className="text-white font-medium text-xs">View more</Text>
                    </TouchableOpacity>
                </View>

                {/* Related Product Section */}
                <RelatedProduct />
                {/* Recommended Product Section */}
                <RecommendedProduct />
            </ScrollView>
        </View>
    );
}
