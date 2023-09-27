import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from "../theme/colors";
import Images from "../theme/images";
import SwipeComponent from "../components/SwipeComponent";
import { navigate } from "../navigation/utils";

const StartUp = () => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors.backgroundGradient} style={styles.container}>
            <Text style={styles.headerText}>CHICKIDS</Text>
            <Image source={Images.MainBrand} />
            <Text style={styles.bodyText}>GET READY TO DRESS YOUR LITTLE ONES</Text>
            <Text style={styles.descriptionText}>Discovery Trendy Outfits, Chic Accessories Cozy Essentials for Kids of All Ages</Text>
            <SwipeComponent onSwipeRight={() => navigate('HomePage')} customStyles={styles.swipe} >
                <View style={styles.button}>
                    <Text style={styles.sliderText}>GET STARTED</Text>
                </View>
            </SwipeComponent>
        </LinearGradient>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: "500",
        color: colors.primaryText,
        marginVertical: 15,
    },
    bodyText: {
        fontSize: 35,
        fontWeight: "700",
        marginHorizontal: 20,
        textAlign: 'center',
        color: colors.primaryText,
    },
    descriptionText: {
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 25,
        marginVertical: 8
    },
    sliderText: {
        color: colors.primary,
        fontSize: 17,
        fontWeight: "800",
    },
    button: {
        borderRadius: 27,
        backgroundColor: colors.primaryText,
        paddingVertical: 15,
        paddingHorizontal: 25,
        width: '50%',
    },
    swipe: {
        position: 'absolute',
        bottom: 25,
    }

})
export default StartUp;