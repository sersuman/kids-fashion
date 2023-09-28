import React, { useState } from 'react';
import { View, PanResponder, Animated, ViewProps, StyleSheet } from 'react-native';
import { DeviceWidth } from '../../theme/variables';

type SwipeProps = {
    children: JSX.Element,
    customStyles?: ViewProps['style'],
    onSwipeRight?: () => void
}

const SwipeComponent = ({ children, customStyles = {}, onSwipeRight }: SwipeProps) => {
    const [position] = useState(new Animated.Value(0));

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            // Update the position of the child component
            if (gestureState.dx > 0 && gestureState.dx < 170) {
                position.setValue(gestureState.dx);
            }
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx > 165) {
                onSwipeRight?.();
                resetPosition();
            }
            resetPosition();
        },
    });

    const resetPosition = () => {
        Animated.spring(position, {
            toValue: 0,
            useNativeDriver: false,
        }).start();
    };

    const animatedStyle = {
        transform: [{ translateX: position }],
    };

    return (
        <View style={[styles.container, customStyles]}>
            <Animated.View {...panResponder.panHandlers} style={[animatedStyle]}>
                {children}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 29,
        padding: 8,
        backgroundColor: '#404040',
        width: DeviceWidth * 0.85,
    }
});


export default SwipeComponent;