import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface FloatingCartBarProps {
    count: number;
    total: number;
}

export const FloatingCartBar = ({ count, total }: FloatingCartBarProps) => {
    if (count === 0) return null;

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.itemText}>{count} ITEM{count > 1 ? 'S' : ''}</Text>
                    <Text style={styles.totalText}>₹{total}</Text>
                </View>
                <Pressable style={styles.viewCartBtn}>
                    <Text style={styles.viewCartText}>View Cart</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 20,
        left: 16,
        right: 16,
    },
    container: {
        backgroundColor: '#60b246', // Swiggy green
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    itemText: {
        color: 'white',
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 1,
    },
    totalText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewCartBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewCartText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
