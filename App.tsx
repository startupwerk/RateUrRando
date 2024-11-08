import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import React from "react";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-xl font-bold">Hello, NativeWind!</Text>
    </View>
  );
}
