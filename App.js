import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import MainNavigation from "./navigation/MainNavigation";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NativeBaseProvider>
        <MainNavigation />
      </NativeBaseProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
