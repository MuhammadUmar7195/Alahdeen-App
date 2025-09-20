import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeIndex from "./screens/Home/index";
import ProductCategories from "./screens/Product/ProductCategories/index";

import "./global.css";

export default function Index() {
  return (
    <SafeAreaProvider>
      {/* <HomeIndex /> */}
      <ProductCategories />
    </SafeAreaProvider>
  );
}
