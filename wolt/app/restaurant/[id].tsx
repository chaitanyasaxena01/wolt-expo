import { FloatingCartBar } from '@/components/FloatingCartBar';
import { MenuSection } from '@/components/MenuSection';
import { RestaurantHeader } from '@/components/RestaurantHeader';
import { MOCK_RESTAURANTS } from '@/data/mockRestaurants';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RestaurantDetailsScreen() {
    const { id } = useLocalSearchParams();
    const restaurant = MOCK_RESTAURANTS.find((r) => r.id === id);

    const [cart, setCart] = useState<{ [key: string]: number }>({});

    const addToCart = (itemId: string) => {
        setCart((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId: string) => {
        setCart((prev) => {
            const current = prev[itemId] || 0;
            if (current <= 1) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [itemId]: current - 1 };
        });
    };

    const cartSummary = useMemo(() => {
        let count = 0;
        let total = 0;

        // Flatten all items to find prices easily
        const allItems = restaurant?.menu.flatMap(s => s.items) || [];

        Object.entries(cart).forEach(([itemId, qty]) => {
            const item = allItems.find(i => i.id === itemId);
            if (item) {
                count += qty;
                total += item.price * qty;
            }
        });

        return { count, total };
    }, [cart, restaurant]);

    if (!restaurant) {
        return (
            <View style={styles.center}>
                <Text>Restaurant not found!</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: restaurant.name, headerBackTitle: 'Back' }} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <RestaurantHeader
                    name={restaurant.name}
                    cuisine={restaurant.cuisine}
                    rating={restaurant.rating}
                    time={restaurant.time}
                    location={restaurant.location || "City Circle"}
                />

                {restaurant.menu && restaurant.menu.length > 0 ? (
                    restaurant.menu.map((section, index) => (
                        <MenuSection
                            key={index}
                            title={section.title}
                            items={section.items}
                            cart={cart}
                            onAdd={addToCart}
                            onRemove={removeFromCart}
                        />
                    ))
                ) : (
                    <View style={styles.emptyMenu}>
                        <Text>Menu items coming soon...</Text>
                    </View>
                )}
            </ScrollView>

            <FloatingCartBar count={cartSummary.count} total={cartSummary.total} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    scrollContent: {
        paddingBottom: 100, // Space for floating bar
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyMenu: {
        padding: 20,
        alignItems: 'center',
    }
});
