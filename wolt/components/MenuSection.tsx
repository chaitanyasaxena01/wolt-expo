import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MenuItem } from './MenuItem';

interface MenuSectionProps {
    title: string;
    items: any[];
    cart: { [key: string]: number };
    onAdd: (id: string) => void;
    onRemove: (id: string) => void;
}

export const MenuSection = ({ title, items, cart, onAdd, onRemove }: MenuSectionProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}<Text style={styles.count}> ({items.length})</Text></Text>
            {items.map((item) => (
                <MenuItem
                    key={item.id}
                    {...item}
                    quantity={cart[item.id] || 0}
                    onAdd={() => onAdd(item.id)}
                    onRemove={() => onRemove(item.id)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    count: {
        color: 'gray',
        fontSize: 16,
    }
});
