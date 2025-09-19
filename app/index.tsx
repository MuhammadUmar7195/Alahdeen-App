import { View } from "react-native";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";

import "./global.css";
 
export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <Banner />
      <CategorySection />
    </View>
  );
}
