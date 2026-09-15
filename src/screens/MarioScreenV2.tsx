import { useRef, useState } from "react";
import { Animated, Button, Text, View } from "react-native";

const MOVE_VALUE = 20;
const ANIMATION_CONFIG = {
  duration: 500, // Duration of the animation in milliseconds
  useNativeDriver: true, // Use native driver for better performance
};

const MarioScreen = () => {
  const MarioImage = require("@/assets/images/mario.png");

  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const [horizontalPosition, setHorizontalPosition] = useState(0);
  const [verticalPosition, setVerticalPosition] = useState(0);

  const moveRight = () => {
    const newPosition = horizontalPosition + MOVE_VALUE;
    setHorizontalPosition(newPosition);

    Animated.timing(translateX, {
      toValue: newPosition,
      ...ANIMATION_CONFIG,
    }).start();
  };

  const moveLeft = () => {
    const newPosition = horizontalPosition - MOVE_VALUE;
    setHorizontalPosition(newPosition);

    Animated.timing(translateX, {
      toValue: newPosition, // Move 200 units to the right
      ...ANIMATION_CONFIG,
    }).start();
  };

  const moveUp = () => {
    const newPosition = verticalPosition - MOVE_VALUE;
    setVerticalPosition(newPosition);

    Animated.timing(translateY, {
      toValue: newPosition,
      ...ANIMATION_CONFIG,
    }).start();
  };

  const moveDown = () => {
    const newPosition = verticalPosition + MOVE_VALUE;
    setVerticalPosition(newPosition);

    Animated.timing(translateY, {
      toValue: newPosition,
      ...ANIMATION_CONFIG,
    }).start();
  };

  const reset = () => {
    // Reset the position after the animation completes
    setHorizontalPosition(0);
    setVerticalPosition(0);
    translateX.setValue(0);
    translateY.setValue(0);
  };

  const jump = () => {
    Animated.sequence([
      Animated.timing(translateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

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
          transform: [{ translateX }, { translateY }],
          //   zIndex: 1,
          opacity: opacity,
        }}
        resizeMode='contain'
      />
      <View className='w-full h-1 border-b border-gray-300 mb-2' />

      <Text>Movement Actions</Text>
      <View className='flex-row justify-around gap-2 p-2'>
        <Button title='Left' onPress={moveLeft} />
        <Button title='Right' onPress={moveRight} />
        <Button title='Up' onPress={moveUp} />
        <Button title='Down' onPress={moveDown} />
        <Button title='Jump' onPress={jump} />
        <Button title='Reset' onPress={reset} />
      </View>

      <Text className='mt-5'>Opacity Actions</Text>
      <View className='flex-row justify-around gap-2 p-2'>
        <Button title='Show' onPress={show} />
        <Button title='Hide' onPress={hide} />
        <Button title='Opacity 0.5' onPress={() => changeOpacity(0.5)} />
      </View>
    </View>
  );
};

export default MarioScreen;
