import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ClipboardIcon } from "react-native-heroicons/outline";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      count: "120+ items",
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      count: "85+ items",
    },
    {
      id: 3,
      name: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      count: "95+ items",
    },
  ];

  const gridCategories = [
    {
      id: 1,
      name: "Clothing",
      count: 109,
      images: [
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1566479179817-b0cd5a8b5a84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      ],
    },
    {
      id: 2,
      name: "Shoes",
      count: 530,
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      ],
    },
  ];

  const promotionalCategories = [
    {
      id: 1,
      name: "Floral Maxi Dress",
      price: 45.99,
      discount: "20% OFF",
      image: require("../../assets/images/1.jpg"),
    },
    {
      id: 2,
      name: "Beach Sandals",
      price: 29.99,
      discount: "15% OFF",
      image: require("../../assets/images/2.jpg"),
    },
    {
      id: 3,
      name: "Summer Sunglasses",
      price: 19.99,
      discount: "30% OFF",
      image: require("../../assets/images/3.jpg"),
    },
    {
      id: 4,
      name: "Casual T-Shirt",
      price: 15.5,
      discount: "10% OFF",
      image: require("../../assets/images/4.jpg"),
    },
    {
      id: 5,
      name: "Straw Hat",
      price: 22.0,
      discount: "25% OFF",
      image: require("../../assets/images/5.jpg"),
    },
    {
      id: 6,
      name: "Denim Shorts",
      price: 34.75,
      discount: "18% OFF",
      image: require("../../assets/images/7.jpg"),
    },
  ];

  const renderCategory = ({ item, index }) => (
    <TouchableOpacity
      key={item.id}
      className={`bg-white rounded-xl shadow-sm overflow-hidden w-32 ${
        index !== categories.length - 1 ? "mr-3" : ""
      }`}
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
      </View>
    </TouchableOpacity>
  );

  const renderGridCategory = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      className="bg-white rounded-2xl shadow-sm overflow-hidden flex-1 mx-1"
    >
      <View className="flex-row flex-wrap">
        {item.images.map((img, i) => (
          <Image
            key={i}
            source={{ uri: img }}
            className="w-1/2 h-16 border-r border-b border-gray-100 rounded-lg mb-1"
            resizeMode="cover"
          />
        ))}
      </View>
      <View className="flex-row justify-between items-center px-3 py-2">
        <Text className="text-sm font-bold text-gray-800">{item.name}</Text>
        <View className="bg-blue-100 px-2 py-1 rounded-full">
          <Text className="text-xs font-semibold text-blue-600">
            {item.count}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderPromotionalCard = ({ item, index }) => (
    <TouchableOpacity
      key={item.id}
      className={`bg-white rounded-xl shadow-sm overflow-hidden w-32 ${
        index !== promotionalCategories.length - 1 ? "mr-3" : ""
      }`}
    >
      <Image source={item.image} className="w-full h-20" resizeMode="cover" />
      <View className="p-3">
        <Text
          className="text-sm font-semibold text-gray-800 mb-1 text-center"
          numberOfLines={2}
          style={{ minHeight: 40 }}
        >
          {item.name}
        </Text>
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-xs font-bold text-green-600">
            ${item.price}
          </Text>
          <View className="bg-red-500 px-1 py-0.5 rounded-full">
            <Text className="text-white text-xs font-semibold">
              {item.discount}
            </Text>
          </View>
        </View>
        <TouchableOpacity className="bg-primary px-2 py-2 rounded-full flex-row items-center justify-center">
          <ClipboardIcon size={16} color="white" />
          <Text className="text-xs font-semibold text-white text-center ml-1">
            Get Quote
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="py-4">
      {/* Categories Section */}
      <View className="mb-6">
        <View className="flex-row items-center justify-between mb-4 px-4">
          <Text className="text-xl font-bold text-gray-800">Categories</Text>
          <TouchableOpacity>
            <Text className="text-black font-semibold">See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>

      {/* Grid Categories Section */}
      <View className="mt-6 px-4">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-xl font-bold text-gray-800">Categories</Text>
          <TouchableOpacity>
            <Text className="text-black font-semibold">See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={gridCategories}
          renderItem={renderGridCategory}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false}
        />
      </View>

      {/* Promotional Categories Section */}
      <View className="mt-6">
        <View className="flex-row items-center justify-between mb-4 px-4">
          <Text className="text-xl font-bold text-gray-800">Promotional Product</Text>
          <TouchableOpacity>
            <Text className="text-black font-semibold">See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={promotionalCategories}
          renderItem={renderPromotionalCard}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
    </View>
  );
};

export default CategorySection;
