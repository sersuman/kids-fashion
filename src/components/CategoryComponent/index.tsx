import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DeviceWidth } from '../../theme/variables';
import colors from '../../theme/colors';

type CategoryProps = {
    title: string,
    selected: boolean,
    onPress: () => void,
}
const CategoryComponent = ({title, selected, onPress}: CategoryProps) => {
    const buttonColor = {backgroundColor: selected ? colors.primary : colors.primaryText};
    const textColor = {color: selected ? colors.primaryText : colors.primary};
    return (
        <TouchableOpacity onPress={onPress} style={[buttonColor, styles.button]}>
            <Text style={[textColor, styles.text]}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: { 
        alignItems: 'center', 
        borderRadius: 30,
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    text: { 
        fontSize: 20, 
        fontWeight: '500',
        textTransform: 'capitalize'
    }
})

export default CategoryComponent;