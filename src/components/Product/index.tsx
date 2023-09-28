import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground } from 'react-native';
import Images from '../../theme/images';
import FavIcon from '../../assets/icons/tab/favorite.svg'
import { DeviceHeight } from '../../theme/variables';
import colors from '../../theme/colors';

const Product = () => {
    return (

        <View style={{ margin: 20 }}>
            <View style={styles.container}>
                <Image style={styles.item} source={Images.ProductADev} />
                <FavIcon style={styles.favCover} />
            </View>
            <Text style={styles.text}>Kids Stylish Cloth</Text>
            <Text style={styles.text}>$259.40</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: DeviceHeight * 0.2,
        width: DeviceHeight * 0.2,
        justifyContent: 'center',
    },
    item: {
        borderRadius: 8,
        height: DeviceHeight * 0.2,
        width: DeviceHeight * 0.2,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary
    },
    favCover: {
        height: DeviceHeight * 0.04,
        width: DeviceHeight * 0.04,
        position: 'absolute',
        right: 5,
        top: 5,
    }
})
export default Product;