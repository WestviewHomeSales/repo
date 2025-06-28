import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PropertyCard } from '../components/PropertyCard';
import { Property } from '../types/Property';
import { fetchActiveProperties } from '../services/supabase';
import { mapActivePropertyToProperty } from '../utils/propertyMapper';
import { Colors } from '../constants/Colors';

export default function HomeScreen() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'price' | 'sqft'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const loadProperties = async () => {
    try {
      const data = await fetchActiveProperties();
      const mappedProperties = data.map(mapActivePropertyToProperty);
      
      setProperties(mappedProperties);
      sortProperties(mappedProperties, sortBy, sortOrder);
    } catch (error) {
      console.error('Error loading properties:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const sortProperties = (props: Property[], sortBy: string, order: string) => {
    const sorted = [...props];
    
    switch (sortBy) {
      case 'price':
        sorted.sort((a, b) => order === 'desc' ? b.price - a.price : a.price - b.price);
        break;
      case 'sqft':
        sorted.sort((a, b) => order === 'desc' ? b.sqFt - a.sqFt : a.sqFt - b.sqFt);
        break;
      case 'date':
      default:
        sorted.sort((a, b) => {
          const dateA = new Date(a.listedDate + 'T12:00:00');
          const dateB = new Date(b.listedDate + 'T12:00:00');
          return order === 'desc' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
        });
        break;
    }
    
    setProperties(sorted);
  };

  const handleSort = (newSortBy: 'date' | 'price' | 'sqft') => {
    const newOrder = sortBy === newSortBy && sortOrder === 'desc' ? 'asc' : 'desc';
    setSortBy(newSortBy);
    setSortOrder(newOrder);
    sortProperties(properties, newSortBy, newOrder);
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

  const renderSortButton = (type: 'date' | 'price' | 'sqft', label: string) => (
    <TouchableOpacity
      style={[
        styles.sortButton,
        sortBy === type && styles.sortButtonActive
      ]}
      onPress={() => handleSort(type)}
    >
      <Text style={[
        styles.sortButtonText,
        sortBy === type && styles.sortButtonTextActive
      ]}>
        {label}
      </Text>
      {sortBy === type && (
        <Ionicons 
          name={sortOrder === 'desc' ? 'chevron-down' : 'chevron-up'} 
          size={16} 
          color={Colors.white} 
        />
      )}
    </TouchableOpacity>
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
        
        <View style={styles.sortContainer}>
          <Text style={styles.sortLabel}>Sort by:</Text>
          <View style={styles.sortButtons}>
            {renderSortButton('date', 'Date')}
            {renderSortButton('price', 'Price')}
            {renderSortButton('sqft', 'Sq Ft')}
          </View>
        </View>
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
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="home-outline" size={64} color={Colors.gray} />
            <Text style={styles.emptyText}>No properties found</Text>
            <Text style={styles.emptySubtext}>Pull down to refresh</Text>
          </View>
        }
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
    marginBottom: 16,
  },
  sortContainer: {
    marginTop: 8,
  },
  sortLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  sortButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    gap: 4,
  },
  sortButtonActive: {
    backgroundColor: Colors.primary,
  },
  sortButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
  },
  sortButtonTextActive: {
    color: Colors.white,
  },
  listContainer: {
    padding: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
});