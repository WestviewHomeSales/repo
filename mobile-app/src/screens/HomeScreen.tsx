import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { PropertyCard } from '../components/PropertyCard';
import { Property } from '../types/Property';
import { fetchActiveProperties } from '../services/supabase';
import { mapActivePropertyToProperty } from '../utils/propertyMapper';
import { Colors } from '../constants/Colors';

export default function HomeScreen() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadProperties = async () => {
    try {
      const data = await fetchActiveProperties();
      const mappedProperties = data.map(mapActivePropertyToProperty);
      
      // Sort by listing date (newest first)
      mappedProperties.sort((a, b) => {
        const dateA = new Date(a.listedDate + 'T12:00:00');
        const dateB = new Date(b.listedDate + 'T12:00:00');
        return dateB.getTime() - dateA.getTime();
      });
      
      setProperties(mappedProperties);
    } catch (error) {
      console.error('Error loading properties:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadProperties();
  };

  const renderProperty = ({ item }: { item: Property }) => (
    <PropertyCard property={item} />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading properties...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find Your Dream Home in Westview</Text>
        <Text style={styles.subtitle}>
          Browse our current listings in the beautiful Westview community of Poinciana, Florida.
        </Text>
      </View>

      <FlatList
        data={properties}
        renderItem={renderProperty}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: Colors.textSecondary,
  },
  header: {
    padding: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  listContainer: {
    padding: 16,
  },
});