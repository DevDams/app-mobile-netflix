import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Button } from "native-base";
import MainNavigation from "./navigation/MainNavigation";


export default function App() {
  

  return (
    <NativeBaseProvider>
        <MainNavigation />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
