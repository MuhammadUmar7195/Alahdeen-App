import React from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from "@react-navigation/drawer";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            {/* Drawer Header */}
            <View className="bg-secondary p-6 pb-8 rounded-b-2xl">
                <Image
                    source={require("../assets/images/logo.png")}
                    className="w-32 h-10 mb-3"
                    resizeMode="cover"
                />
                <Text className="text-white font-semibold text-lg">Welcome, Umar 👋</Text>
                <Text className="text-white/80 text-sm mt-1">Explore your dashboard</Text>
            </View>

            {/* Drawer Links */}
            <View className="flex-1 bg-[#F8F9FA] pt-4">
                <DrawerItemList {...props} />
            </View>

            {/* Footer / Logout */}
            <View className="p-4 border-t border-gray-200 bg-[#F8F9FA]">
                <TouchableOpacity
                    className="flex-row items-center p-3 rounded-xl bg-red-50"
                    onPress={() => alert("Logout pressed")}
                >
                    <Text className="text-red-500 font-semibold ml-2">Logout</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}
