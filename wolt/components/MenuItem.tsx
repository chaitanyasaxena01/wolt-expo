import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface MenuItemProps {
    id: string;
    name: string;
    price: number;
    description: string;
    isVeg: boolean;
    image: string;
    quantity: number;
    onAdd: () => void;
    onRemove: () => void;
}

export const MenuItem = ({ name, price, description, isVeg, image, quantity, onAdd, onRemove }: MenuItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.iconContainer}>
                    <View style={[styles.vegIconOuter, { borderColor: isVeg ? 'green' : 'red' }]}>
                        <View style={[styles.vegIconInner, { backgroundColor: isVeg ? 'green' : 'red' }]} />
                    </View>
                </View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>₹{price}</Text>
                <Text style={styles.description} numberOfLines={2}>{description}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.addButtonContainer}>
                    {quantity > 0 ? (
                        <View style={styles.counterBtn}>
                            <Pressable onPress={onRemove} style={styles.btnPart}>
                                <Text style={styles.btnText}>-</Text>
                            </Pressable>
                            <Text style={styles.countText}>{quantity}</Text>
                            <Pressable onPress={onAdd} style={styles.btnPart}>
                                <Text style={styles.btnText}>+</Text>
                            </Pressable>
                        </View>
                    ) : (
                        <Pressable style={styles.addBtn} onPress={onAdd}>
                            <Text style={styles.addBtnText}>ADD</Text>
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    info: {
        flex: 1,
        paddingRight: 16,
    },
    iconContainer: {
        marginBottom: 4,
    },
    vegIconOuter: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vegIconInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        fontSize: 12,
        color: 'gray',
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 16,
    },
    addButtonContainer: {
        marginTop: -24,
    },
    addBtn: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#eee',
    },
    addBtnText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 14,
    },
    counterBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#eee',
        overflow: 'hidden',
    },
    btnPart: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    btnText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 16,
    },
    countText: {
        fontWeight: 'bold',
        fontSize: 14,
        minWidth: 16,
        textAlign: 'center',
    }
});
