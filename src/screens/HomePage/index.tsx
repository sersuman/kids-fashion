import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { BannerComponent, CategoryComponent } from "../../components";
import colors from "../../theme/colors";

const Category = ['All', 'Casual', 'Party', 'Sports', 'Formal', 'Casual', 'Party', 'Sports', 'Formal']
const selected = 'All';

const HomePage = () => {
    return (
        <View style={{ backgroundColor: colors.primaryText }}>
            <BannerComponent></BannerComponent>
            <ScrollView horizontal={true} style={styles.banner}>
                {Category.map((item, index) => (
                    <CategoryComponent key={index} selected={selected === item} title={item} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
    }
})
export default HomePage;