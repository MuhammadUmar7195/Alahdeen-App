import { ScrollView, View } from "react-native";
import PromotionalBanner from "./screens/Home/PromotionalBanner";
import BottomNavigation from "./components/Bottom-Navigation";
import CategorySection from "./screens/Home/CategorySection";
import TrendingSection from "./screens/Home/TrendingSection";
import Banner from "./screens/Home/Banner";
import Header from "./screens/Home/Header";

import "./global.css";
 
export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >
        <Banner />
        <CategorySection />
        <PromotionalBanner/>
        <TrendingSection/>
      </ScrollView>
      <BottomNavigation/>
    </View>
  );
}
