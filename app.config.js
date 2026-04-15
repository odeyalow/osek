export default {
  expo: {
    name: "Osek",
    slug: "osek",
    scheme: "osek",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    plugins: [
      "expo-router",
      "expo-font",
      [
        "expo-splash-screen",
        {
          resizeMode: "contain",
          backgroundColor: "#141414",
        },
      ],
    ],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#141414",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: "metro",
    },
    extra: {
      router: {},
    },
    experiments: {
      typedRoutes: true,
    },
  },
};
