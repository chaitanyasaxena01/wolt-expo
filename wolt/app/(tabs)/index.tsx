import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

// Components
import { FoodCategories } from '@/components/FoodCategories';
import { Header } from '@/components/Header';
import { Recommendations } from '@/components/Recommendations';
import { RestaurantList } from '@/components/RestaurantList';
import { VegToggle } from '@/components/VegToggle';


export default function HomeScreen() {
  const [isVegOnly, setIsVegOnly] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <VegToggle isVeg={isVegOnly} onToggle={setIsVegOnly} />
        <FoodCategories />
        <Recommendations />
        <RestaurantList isVegOnly={isVegOnly} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
