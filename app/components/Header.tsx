import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import { Image, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Bars3Icon, FunnelIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

const Header = ({ name }) => {
  const [isSeller, setIsSeller] = useState(false);

  return (
    <LinearGradient
      colors={['#46AEB4', '#1B7AB4']}
      className="rounded-b-3xl px-4 pt-10 pb-6"
    >
      {/* Top Row: Menu + Logo + Switch */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => { alert('Menu clicked') }}>
            <Bars3Icon size={28} color="white" />
          </TouchableOpacity>
          <Image
            source={require('../assets/images/logo.png')}
            className="w-28 h-8 max-w-[150px] ml-3"
            resizeMode="contain"
          />
        </View>
        <View className="flex-row items-center">
          <View className="mr-2">
            <Text className="text-white text-start">Switch</Text>
            <Text className="text-white text-end">to seller</Text>
          </View>
          <Switch value={isSeller} onValueChange={setIsSeller} />
        </View>
      </View>

      {/* Welcome Text */}
      <Text className="text-xl font-semibold text-white mt-4">{name}</Text>

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
        <TouchableOpacity className="bg-teal-500 px-4 py-2 rounded-full ml-2 flex-row items-center">
          <FunnelIcon size={20} color="white" />
          <Text className="text-white ml-1">Filter</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Header;
