import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Routes } from "./routes";
import { navigationRef } from "./utils";
import Images from "../theme/images";
import { DeviceHeight } from "../theme/variables";
import colors from "../theme/colors";

const APP_HEADER_ROUTES_EXCLUDED = [
    Routes.StartUp
];

const AppHeader = () => {
    const routeName = navigationRef.current?.getCurrentRoute()?.name;
    if (routeName && APP_HEADER_ROUTES_EXCLUDED.includes(routeName)) {
        return null;
    }
    return (
        <View style={styles.title}>
            <View style={styles.bar}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.profile} source={Images.ProfileImage} />
                    <View>
                        <Text style={styles.welcomeText}>Welcome back</Text>
                        <Text style={styles.header}>TARIQUL ISLAM</Text>
                    </View>
                </View>
                <View style={styles.notificationBorder}>
                    <Image style={styles.notification} source={Images.Notification} />
                </View>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    title: {
        height: DeviceHeight * 0.1,
        backgroundColor: colors.primaryText,
        justifyContent: 'center',
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    profile: {
        height: DeviceHeight * 0.07,
        width: DeviceHeight * 0.07,
        borderRadius: 70,
        marginRight: 10,
    },
    notification: {
        height: DeviceHeight * 0.04,
        width: DeviceHeight * 0.04,
    },
    welcomeText: {
        color: colors.primary
    },
    header: {
        color: colors.darkText,
        fontSize: 20,
        fontWeight: '900',
    },
    notificationBorder: {
        backgroundColor: colors.background,
        padding: 10,
        borderRadius: 30
    }

})


export default AppHeader;