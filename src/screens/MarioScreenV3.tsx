import { useRef, useState } from "react";
import { Animated, Button, Text, View } from "react-native";

const MarioScreen = () => {
  const MarioImage = require("@/assets/images/mario.png");
  const rotation = useRef(new Animated.Value(0)).current;

  const rotate = () => {
    Animated.timing(rotation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const rotationStyle = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: rotationStyle }],
  };

  return (
    <View className='flex-1 w-full items-center justify-center bg-white'>
      {/* <Image source={MarioImage} style={{ width: 100, height: 100 }} resizeMode="contain" /> */}
      <Animated.Image
        source={MarioImage}
        style={{
          width: 100,
          height: 100,
          transform: [{ rotate: rotationStyle }],
          //   zIndex: 1,
        }}
        resizeMode='contain'
      />
      <View className='w-full h-1 border-b border-gray-300 mb-2' />

      <Text>Rotate Actions</Text>
      <View className='flex-row justify-around gap-2 p-2'>
        <Button title='Rotate' onPress={rotate} />
      </View>
    </View>
  );
};

export default MarioScreen;
