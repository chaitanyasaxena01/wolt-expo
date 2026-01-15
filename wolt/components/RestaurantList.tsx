import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Mock Data
const RESTAURANTS = [
    { id: '1', name: 'Pizza Hut', rating: 4.2, time: '30-40 min', type: 'Any', image: 'https://picsum.photos/400/300?random=10', cuisine: 'Italian, Pizza' },
    { id: '2', name: 'Burger King', rating: 4.5, time: '25-35 min', type: 'Non-Veg', image: 'https://picsum.photos/400/300?random=11', cuisine: 'American, Fast Food' },
    { id: '3', name: 'Pure Veg Delights', rating: 4.0, time: '20-30 min', type: 'Veg', image: 'https://picsum.photos/400/300?random=12', cuisine: 'North Indian, South Indian' },
    { id: '4', name: 'KFC', rating: 3.8, time: '40-50 min', type: 'Non-Veg', image: 'https://picsum.photos/400/300?random=13', cuisine: 'Chicken, Fast Food' },
    { id: '5', name: 'Green Bowl', rating: 4.7, time: '15-25 min', type: 'Veg', image: 'https://picsum.photos/400/300?random=14', cuisine: 'Healthy, Salads' },
];

interface RestaurantListProps {
    isVegOnly: boolean;
}

export const RestaurantList = ({ isVegOnly }: RestaurantListProps) => {
    const filteredRestaurants = isVegOnly
        ? RESTAURANTS.filter(r => r.type === 'Veg')
        : RESTAURANTS;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Restaurants</Text>
            {filteredRestaurants.map((item) => (
                <View key={item.id} style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.promoTag}>
                            <Text style={styles.promoText}>50% OFF</Text>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.row}>
                            <Text style={styles.name}>{item.name}</Text>
                            <View style={styles.ratingBadge}>
                                <Text style={styles.ratingText}>{item.rating}</Text>
                                <Ionicons name="star" size={12} color="white" />
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cuisine}>{item.cuisine}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                        <View style={styles.divider} />
                        <Text style={styles.footerText}>FREE DELIVERY</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'relative',
        height: 180,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    promoTag: {
        position: 'absolute',
        bottom: 12,
        left: 0,
        backgroundColor: '#256fef',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    promoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    info: {
        padding: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        gap: 2,
    },
    ratingText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    cuisine: {
        color: 'gray',
        fontSize: 14,
    },
    time: {
        color: 'gray',
        fontSize: 14,
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 10,
    },
    footerText: {
        color: '#8a584b',
        fontSize: 12,
        fontWeight: '600',
    }
});
