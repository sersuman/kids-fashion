import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Images from '../../theme/images';
import { DeviceHeight, DeviceWidth } from '../../theme/variables';

const BannerComponent = () => {
    return (
        <View style={styles.banner}>
            <Image style={styles.bannerImage} source={Images.BannerDev} />
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    bannerImage: { 
        borderRadius: 30,
        width: DeviceWidth *.9, 
        height: DeviceHeight * 0.2 
    }
})

export default BannerComponent;