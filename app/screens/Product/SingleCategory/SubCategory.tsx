import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

type Category = {
  id: number;
  name: string;
  image: string;
  subcategories: {
    id: number;
    name: string;
    image: string;
    count: string;
  }[];
};

export default function SubCategory() {
  const categories: Category[] = [
    {
      id: 1,
      name: "Men",
      image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      subcategories: [
        {
          id: 1,
          name: "T-Shirts",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          count: "120+ items",
        },
        {
          id: 2,
          name: "Shirts",
          image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          count: "85+ items",
        },
        {
          id: 3,
          name: "Pants",
          image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          count: "95+ items",
        },
      ],
    },
    {
      id: 2,
      name: "Women",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      subcategories: [
        {
          id: 1,
          name: "Dresses",
          image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          count: "150+ items",
        },
        {
          id: 2,
          name: "Tops",
          image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          count: "100+ items",
        },
        {
          id: 3,
          name: "Skirts",
          image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          count: "75+ items",
        },
      ],
    },
    {
      id: 3,
      name: "Kids",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      subcategories: [
        {
          id: 1,
          name: "Boys",
          image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          count: "90+ items",
        },
        {
          id: 2,
          name: "Girls",
          image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          count: "95+ items",
        },
        {
          id: 3,
          name: "Infants",
          image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          count: "60+ items",
        },
      ],
    },
  ];

  const renderSubcategories = ({ item: category}) => (
    <View className="mb-6">
      <View className="flex-row items-center justify-between mb-4 px-4 mt-4">
        <Text className="text-xl font-bold text-gray-800">{category.name}</Text>
        <TouchableOpacity>
          <Text className="text-black font-semibold">See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={category.subcategories}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.id}
            className={`bg-white rounded-xl shadow-sm overflow-hidden w-32 ${
              index !== category.subcategories.length - 1 ? "mr-3" : ""
            }`}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              marginBottom: 10,
              marginTop: 1,
              elevation: 3,
            }}
          >
            <Image
              source={{ uri: item.image }}
              className="w-full h-20"
              resizeMode="cover"
            />
            <View className="p-3">
              <Text className="text-sm font-semibold text-gray-800 mb-1 text-center">
                {item.name}
              </Text>
              <Text className="text-xs text-gray-500 text-center">{item.count}</Text>
            </View>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={categories}
        renderItem={renderSubcategories}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}