import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground } from 'react-native';
import Images from '../../theme/images';
import FavIcon from '../../assets/icons/tab/favorite.svg'
import { DeviceHeight, DeviceWidth } from '../../theme/variables';
import colors from '../../theme/colors';

type CategoryProps = {
    price: string,
    title: string,
    image: string,
}

const Product = ({ price, title, image }: CategoryProps) => {
    return (

        <View style={{ marginHorizontal: DeviceWidth * 0.05, width: DeviceWidth * 0.4, overflow: 'hidden', marginVertical: 10 }}>
            <View style={styles.container}>
                <Image style={styles.item} source={{ uri: image }} />
                <FavIcon style={styles.favCover} />
                <View style={styles.price}>
                    <Text style={styles.text}>${price}</Text>
                </View>
            </View>
            <Text numberOfLines={2} style={[styles.text,{marginTop: 3}]}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: colors.primary,
        alignItems: "center",
        overflow: 'hidden',
        paddingVertical: 20,
        borderRadius: 5,
    },
    item: {
        borderRadius: 8,
        height: DeviceHeight * 0.18,
        width: DeviceHeight * 0.18,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
    },
    favCover: {
        height: DeviceHeight * 0.04,
        width: DeviceHeight * 0.04,
        position: 'absolute',
        right: 5,
        top: 5,
    },
    price: {
        backgroundColor: colors.priceBackground,
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
})
export default Product;