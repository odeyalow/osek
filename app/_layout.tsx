import "./globals.css";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { usePathname } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat.ttf"),
  });
  const isMainScreen = usePathname() === "";
  const StatusBarBgColor = isMainScreen ? "#212529" : "#F8F9FA";

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: StatusBarBgColor }} edges={["top", "left", "right"]}>
        <StatusBar barStyle={isMainScreen ? "light-content" : "dark-content"} backgroundColor={StatusBarBgColor} />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
