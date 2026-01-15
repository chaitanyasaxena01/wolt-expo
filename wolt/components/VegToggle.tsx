import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

interface VegToggleProps {
    isVeg: boolean;
    onToggle: (value: boolean) => void;
}

export const VegToggle = ({ isVeg, onToggle }: VegToggleProps) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.label, isVeg ? styles.inactiveLabel : styles.activeLabel]}>All</Text>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isVeg ? '#007f00' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onToggle}
                value={isVeg}
            />
            <Text style={[styles.label, isVeg ? styles.activeVegLabel : styles.inactiveLabel]}>Veg Only</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centered for now, or flex-end
        padding: 12,
        backgroundColor: 'white',
    },
    label: {
        fontWeight: '600',
        marginHorizontal: 8,
    },
    activeLabel: {
        color: 'black',
    },
    inactiveLabel: {
        color: 'gray',
    },
    activeVegLabel: {
        color: '#007f00',
    }
});
