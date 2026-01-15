import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={24} color="#fc8019" />
          <View>
            <Text style={styles.locationTitle}>Home</Text>
            <Text style={styles.locationSubtitle}>123, Street Name, City...</Text>
          </View>
        </View>
        <Ionicons name="person-circle-outline" size={32} color="black" />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for food"
          style={styles.searchInput}
        />
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    paddingTop: 60, // Adjust for status bar
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  locationSubtitle: {
    color: 'gray',
    fontSize: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  searchIcon: {
    marginRight: 0,
  }
});
