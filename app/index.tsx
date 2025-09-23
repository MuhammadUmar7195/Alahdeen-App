import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeIndex from "./screens/Home/index";
import ProductCategories from "./screens/Product/ProductCategories/index";

import "./global.css";
import SubCategory from "./screens/Product/SingleCategory/index";
import Product from "./screens/Product/index";
import SingleProduct from "./screens/Product/SingleProduct/SingleProduct";

export default function Index() {
  return (
    <SafeAreaProvider>
      <HomeIndex />
      {/* <ProductCategories /> */}
      {/* <SubCategory/> */}
      {/* <Product/> */}
      {/* <SingleProduct /> */}
    </SafeAreaProvider>
  );
}
