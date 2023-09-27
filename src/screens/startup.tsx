import React from "react";
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from "../theme/colors";

const StartUp = () => {
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.backgroundGradient} style={styles.container}>
        
        </LinearGradient>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default StartUp;