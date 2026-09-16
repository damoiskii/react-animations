import { useRef } from "react";
import { Animated, Button, Text, View } from "react-native";

const MarioScreen = () => {
  const animation = useRef(new Animated.Value(1)).current;
  // const index = useRef(0);

  const changeColor = (value: number) => {
    Animated.timing(animation, {
      toValue: value,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const backgroundColorStyle = animation.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: ["green", "purple", "blue", "yellow", "orange"], // Adjust the output range as needed
  });

  return (
    <View className='flex-1 w-full items-center justify-center bg-white'>
      <Animated.View
        style={{
          height: 200,
          width: 200,
          backgroundColor: backgroundColorStyle,
        }}
        className='bg-red-200'
      />

      <View className='w-full h-1 border-b border-gray-300 mb-2' />

      <Text>Actions</Text>
      <View className='flex-row justify-around gap-2 p-2'>
        <Button title='Green' onPress={() => changeColor(0)} />
        <Button title='Purple' onPress={() => changeColor(1)} />
        <Button title='Blue' onPress={() => changeColor(2)} />
        <Button title='Yellow' onPress={() => changeColor(3)} />
        <Button title='Orange' onPress={() => changeColor(4)} />
      </View>
    </View>
  );
};

export default MarioScreen;
