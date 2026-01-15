import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const RECOMMENDATIONS = [
    { id: '1', name: 'Top Picks', image: 'https://picsum.photos/300/200?random=1' },
    { id: '2', name: 'Offers', image: 'https://picsum.photos/300/200?random=2' },
    { id: '3', name: 'New Arrivals', image: 'https://picsum.photos/300/200?random=3' },
];

export const Recommendations = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top Picks for You</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {RECOMMENDATIONS.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.cardImage} />
                        <View style={styles.overlay}>
                            <Text style={styles.cardText}>{item.name}</Text>
                        </View>
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
        gap: 16,
        paddingRight: 16,
    },
    card: {
        width: 250,
        height: 150,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    cardText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
