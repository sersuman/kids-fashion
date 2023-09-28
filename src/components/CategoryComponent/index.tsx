import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DeviceWidth } from '../../theme/variables';
import colors from '../../theme/colors';

type CategoryProps = {
    title: string,
    selected: boolean,
}
const CategoryComponent = ({title, selected}: CategoryProps) => {
    const buttonColor = {backgroundColor: selected ? colors.primary : colors.primaryText};
    const textColor = {color: selected ? colors.primaryText : colors.primary};
    return (
        <View style={[buttonColor, styles.button]}>
            <Text style={[textColor, styles.text]}> {title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: { 
        alignItems: 'center', 
        borderRadius: 30,
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    text: { 
        fontSize: 20, 
        fontWeight: '500'
    }
})

export default CategoryComponent;