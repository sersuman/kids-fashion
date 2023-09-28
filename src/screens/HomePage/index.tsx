import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { BannerComponent, CategoryComponent } from "../../components";
import colors from "../../theme/colors";
import Product from "../../components/Product";
import useRequest from "../../api";
import { ICategory, IProducts } from "../../../@types/api";

const Category = ['All', 'Casual', 'Party', 'Sports', 'Formal', 'Casual', 'Party', 'Sports', 'Formal']
const selected = 'electronics';

const HomePage = () => {
    const {data: categoryData, error: categoryError, isLoading: catIsLoading,} = useRequest<ICategory>("CATEGORIES")
    const [selectedCategory, setSelectedCategory] = useState("electronics");
    const {data, error, isLoading,} = useRequest<IProducts>("CATEGORY",selectedCategory)
   
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.primaryText }}>
            <BannerComponent></BannerComponent>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.banner}>
                {!error && categoryData?.map((item, index) => (
                    <CategoryComponent key={index} selected={selectedCategory === item} title={item} onPress={() => setSelectedCategory(item)} />
                ))}
            </ScrollView>
            <Text style={{fontSize: 25, color: colors.primary, fontWeight: 'bold', marginLeft: 20,}}>Popular Products</Text>
            <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                {!error && data?.map((item, index) => (
                    <Product {...item} key={index}/>
                ))}
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