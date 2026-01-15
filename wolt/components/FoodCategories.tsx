import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const CATEGORIES = [
    { id: '1', name: 'Pizza', image: 'https://img.icons8.com/color/96/pizza.png' },
    { id: '2', name: 'Burger', image: 'https://img.icons8.com/color/96/hamburger.png' },
    { id: '3', name: 'Cake', image: 'https://img.icons8.com/color/96/cake.png' },
    { id: '4', name: 'Chicken', image: 'https://img.icons8.com/color/96/chicken.png' },
    { id: '5', name: 'Biryani', image: 'https://img.icons8.com/color/96/kawaii-rice.png' },
    { id: '6', name: 'Noodles', image: 'https://img.icons8.com/color/96/noodles.png' },
];

export const FoodCategories = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>What&apos;s on your mind?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {CATEGORIES.map((category) => (
                    <View key={category.id} style={styles.categoryItem}>
                        <Image source={{ uri: category.image }} style={styles.categoryImage} />
                        <Text style={styles.categoryName}>{category.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        paddingLeft: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    scrollContent: {
        gap: 20,
        paddingRight: 16,
    },
    categoryItem: {
        alignItems: 'center',
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
    },
    categoryName: {
        fontSize: 12,
        fontWeight: '500',
        color: '#333',
    },
});
