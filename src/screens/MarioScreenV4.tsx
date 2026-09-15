import { useRef, useState } from "react";
import { Animated, Button, Text, View } from "react-native";

const MOVE_VALUE = 20;
const ANIMATION_CONFIG = {
  duration: 500, // Duration of the animation in milliseconds
  useNativeDriver: true, // Use native driver for better performance
};

const MarioScreen = () => {
  const MarioImage = require("@/assets/images/mario.png");

  const animatedHeight = useRef(new Animated.Value(1)).current;

  const expandView = () => {
    Animated.timing(animatedHeight, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  const shrinkView = () => {
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const sizeStyle = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 200], // Adjust the output range as needed
  });

  return (
    <View className='flex-1 w-full items-center justify-center bg-white'>
      <Animated.View style={{ height: sizeStyle, width: 200 }} className='bg-red-200'>
        
      </Animated.View>

      <View className='w-full h-1 border-b border-gray-300 mb-2' />

      <Text>Actions</Text>
      <View className='flex-row justify-around gap-2 p-2'>
        <Button title='Expand' onPress={expandView} />
        <Button title='Shrink' onPress={shrinkView} />
      </View>
    </View>
  );
};

export default MarioScreen;
