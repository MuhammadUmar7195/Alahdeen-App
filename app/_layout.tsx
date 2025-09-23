import { Drawer } from "expo-router/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomDrawerContent from "./components/CustomDrawerContent";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
        <Drawer.Screen name="Product" options={{ title: "Products" }} />
      </Drawer>
    </SafeAreaProvider>
  );
}
