import React, { useState } from "react";
import { View, Text, Switch, TextInput, TouchableOpacity } from "react-native";
import { Bars3Icon, MagnifyingGlassIcon, FunnelIcon } from "react-native-heroicons/outline";

const Header = () => {
  const [isSeller, setIsSeller] = useState(false);

  return (
    <View className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-b-3xl px-4 pt-10 pb-6">
      {/* Top Row: Menu + Logo + Switch */}
      <View className="flex-row items-center justify-between">
        <Bars3Icon size={28} color="white" />
        <Text className="text-2xl font-bold text-white">AlahDeen</Text>
        <View className="flex-row items-center">
          <Text className="text-white mr-2">Switch to seller</Text>
          <Switch value={isSeller} onValueChange={setIsSeller} />
        </View>
      </View>
      {/* Welcome Text */}
      <Text className="text-xl font-semibold text-white mt-4">Welcome Ali</Text>
      {/* Search + Filter */}
      <View className="flex-row items-center mt-4">
        <View className="flex-1 flex-row items-center bg-white rounded-full px-4 py-2">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Product name"
            placeholderTextColor="gray"
            className="flex-1 ml-2 text-gray-700"
          />
        </View>
        <TouchableOpacity className="flex-row items-center bg-teal-500 px-4 py-2 rounded-full ml-2">
          <FunnelIcon size={20} color="white" />
          <Text className="text-white ml-1">Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
