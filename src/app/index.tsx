import ExpandableView from "@/screens/ExpandableView";
import MarioScreen from "@/screens/MarioScreenV4";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <MarioScreen />

      {/* <EntranceScreen /> */}

      {/* <ExpandableView title='Click to Expand'>
        <View className='bg-gray-100 rounded-lg w-full'>
          <Text className='text-gray-600'>This is the content of the expandable view. It can contain any type of content you want to display.</Text>
          <Text className='text-gray-600 mt-3'>This is a second line of text in the expandable view.</Text>
          <Text className='text-gray-600 mt-3'>This is a third line of text in the expandable view.</Text>
          <Text className='text-gray-600 mt-3'>This is a fourth line of text in the expandable view.</Text>
          <Text className='text-gray-600 mt-3'>Click the header to toggle the visibility of this content.</Text>
        </View>
      </ExpandableView> */}
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
