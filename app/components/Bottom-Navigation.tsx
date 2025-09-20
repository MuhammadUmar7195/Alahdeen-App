import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import {
    DocumentTextIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    UserIcon,
} from "react-native-heroicons/outline";

const { width } = Dimensions.get("window");

const BottomNavigation = () => {
    const [activeTab, setActiveTab] = useState("Home");
    
    const renderTab = (icon, label) => {
        const isActive = activeTab === label;
        return (
            <TouchableOpacity 
                className={`items-center py-2 px-3 ${isActive ? 'scale-110' : ''}`}
                onPress={() => setActiveTab(label)}
            >
                <View className={`items-center ${isActive ? 'transform scale-110' : ''}`}>
                    {icon}
                    <Text className={`text-white text-xs mt-1 font-medium ${isActive ? 'font-bold' : ''}`}>
                        {label}
                    </Text>
                    {isActive && (
                        <View className="absolute -bottom-2 h-1 w-8 bg-white rounded-full" />
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View className="sticky bottom-6 w-full items-center px-4">
            {/* Glass Effect Background */}
            <View className="absolute w-full h-20 bg-black/5 rounded-3xl" style={{ 
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 10,
                elevation: 8,
            }} />
            
            {/* Floating Action Button */}
            <View className="absolute -top-10 z-10">
                <TouchableOpacity className="w-20 h-20 rounded-full items-center justify-center">
                    <LinearGradient
                        colors={["bg-primary", "bg-secondary"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="w-20 h-20 rounded-full items-center justify-center"
                        style={{
                            shadowColor: "#4F46E5",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.5,
                            shadowRadius: 8,
                            elevation: 10,
                            borderWidth: 3,
                            borderColor: 'rgba(255,255,255,0.2)'
                        }}
                    >
                        <PlusIcon size={28} color="white" />
                        <Text className="text-white text-xs font-bold mt-1">Sell</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            {/* Bottom Bar */}
            <LinearGradient
                colors={["#4F46E5", "#06B6D4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="w-full h-16 flex-row items-center justify-between px-8 rounded-2xl"
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,0.2)',
                }}
            >
                {/* Left Side */}
                <View className="flex-row space-x-6">
                    {renderTab(<HomeIcon size={24} color="white" />, "Home")}
                    {renderTab(<MagnifyingGlassIcon size={24} color="white" />, "Search")}
                </View>

                {/* Center Spacer */}
                <View className="w-16" />

                {/* Right Side */}
                <View className="flex-row space-x-6">
                    {renderTab(<DocumentTextIcon size={24} color="white" />, "Quotes")}
                    {renderTab(<UserIcon size={24} color="white" />, "Profile")}
                </View>
            </LinearGradient>
            
            {/* Inner Glow Effect */}
            <View className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-2xl mx-1" />
        </View>
    );
};

export default BottomNavigation;
