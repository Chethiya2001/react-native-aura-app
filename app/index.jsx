import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white" >
      <Text className="text-2xl">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>Go to profile</Link>
    </View>
  );
}


