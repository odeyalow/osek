import "./globals.css";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Keyboard, StatusBar, TouchableWithoutFeedback, View } from "react-native";
import { usePathname } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat.ttf"),
  });
  const pathname = usePathname();
  const isAuthScreen = ["/", "/login", "/register", "/knowing"].includes(pathname);
  const StatusBarBgColor = isAuthScreen ? "#F8F9FA" : "#000";

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: StatusBarBgColor }} edges={["top", "left", "right"]}>
        <StatusBar barStyle={isAuthScreen ? "dark-content" : "light-content"} backgroundColor={StatusBarBgColor} />
        {isAuthScreen ? (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1 }}>
              <Stack screenOptions={{ headerShown: false }} />
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <View style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }} />
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
