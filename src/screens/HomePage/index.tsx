import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { BannerComponent, CategoryComponent } from "../../components";
import colors from "../../theme/colors";
import Product from "../../components/Product";

const Category = ['All', 'Casual', 'Party', 'Sports', 'Formal', 'Casual', 'Party', 'Sports', 'Formal']
const selected = 'All';

const HomePage = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.primaryText }}>
            <BannerComponent></BannerComponent>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.banner}>
                {Category.map((item, index) => (
                    <CategoryComponent key={index} selected={selected === item} title={item} />
                ))}
            </ScrollView>
            <Text style={{fontSize: 25, color: colors.primary, fontWeight: 'bold', marginLeft: 20,}}>Popular Products</Text>
            <View style={{flexDirection: "row", flexWrap: "wrap"}}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        marginLeft: 20,
    }, 
    product: {
        marginLeft: 20
    }
})
export default HomePage;