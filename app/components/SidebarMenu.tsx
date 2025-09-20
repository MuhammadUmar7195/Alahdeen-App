import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";

const SidebarMenu = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <View className="absolute top-0 left-0 w-full h-full bg-black/50 z-50">
      {/* Sidebar Content */}
      <View className="w-64 h-full bg-white p-4">
        {/* Close Button */}
        <TouchableOpacity onPress={onClose} className="mb-4">
          <XMarkIcon size={24} color="black" />
        </TouchableOpacity>

        {/* Menu Items */}
        <Text className="text-lg font-bold mb-4">Menu</Text>
        <TouchableOpacity className="mb-2">
          <Text className="text-gray-700 text-base">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-2">
          <Text className="text-gray-700 text-base">Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-2">
          <Text className="text-gray-700 text-base">Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-2">
          <Text className="text-gray-700 text-base">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-gray-700 text-base">Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SidebarMenu;