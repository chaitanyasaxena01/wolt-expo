import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface RestaurantHeaderProps {
    name: string;
    cuisine: string;
    rating: number;
    time: string;
    location: string;
}

export const RestaurantHeader = ({ name, cuisine, rating, time, location }: RestaurantHeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.cuisine}>{cuisine}</Text>
            <Text style={styles.location}>{location}</Text>

            <View style={styles.divider} />

            <View style={styles.row}>
                <View style={styles.infoItem}>
                    <View style={styles.ratingBox}>
                        <Text style={styles.ratingText}>{rating}</Text>
                        <Ionicons name="star" size={12} color="white" />
                    </View>
                    <Text style={styles.subText}>Rating</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.timeText}>{time}</Text>
                    <Text style={styles.subText}>Delivery Time</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        margin: 16,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cuisine: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 2,
    },
    location: {
        fontSize: 14,
        color: '#888',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 12,
    },
    row: {
        flexDirection: 'row',
        gap: 24,
    },
    infoItem: {
        alignItems: 'center',
        gap: 4,
    },
    ratingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        gap: 2,
    },
    ratingText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    timeText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    subText: {
        fontSize: 12,
        color: 'gray',
    }
});
