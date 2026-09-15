import { useRef, useState } from "react";
import { Animated, Button, Text, View } from "react-native";

const MOVE_VALUE = 20;
const ANIMATION_CONFIG = {
  duration: 300, // Duration of the animation in milliseconds
  useNativeDriver: true, // Use native driver for better performance
};

const MarioScreen = () => {
  const MarioImage = require("@/assets/images/mario.png");

  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

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

  return (
    <View className='flex-1 w-full items-center justify-center'>
      {/* <Image source={MarioImage} style={{ width: 100, height: 100 }} resizeMode="contain" /> */}
      <Animated.Image
        source={MarioImage}
        style={{
          width: 100,
          height: 100,
          transform: [{ translateX }, { translateY }],
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
        <Button title='Reset' onPress={reset} />
      </View>
    </View>
  );
};

export default MarioScreen;
