import { useRef, useState } from "react";
import { Animated, Button, Text, View } from "react-native";

const MOVE_VALUE = 20;
const ANIMATION_CONFIG = {
  duration: 500, // Duration of the animation in milliseconds
  useNativeDriver: true, // Use native driver for better performance
};

const MarioScreen = () => {
  const MarioImage = require("@/assets/images/mario.png");

  const opacity = useRef(new Animated.Value(1)).current;

  const show = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const hide = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const changeOpacity = (value: number) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className='flex-1 w-full items-center justify-center bg-white'>
      {/* <Image source={MarioImage} style={{ width: 100, height: 100 }} resizeMode="contain" /> */}
      <Animated.Image
        source={MarioImage}
        style={{
          width: 100,
          height: 100,
          //   zIndex: 1,
          opacity: opacity,
        }}
        resizeMode='contain'
      />
      <View className='w-full h-1 border-b border-gray-300 mb-2' />

      <Text>Opacity Actions</Text>
      <View className='flex-row justify-around gap-2 p-2'>
        <Button title='Show' onPress={show} />
        <Button title='Hide' onPress={hide} />
        <Button title='Opacity 0.5' onPress={() => changeOpacity(0.5)} />
      </View>
    </View>
  );
};

export default MarioScreen;
