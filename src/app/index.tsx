import EntranceScreen from "@/screens/EntranceScreen";
import MarioScreen from "@/screens/MarioScreenV3";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <EntranceScreen /> */}
      <MarioScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
