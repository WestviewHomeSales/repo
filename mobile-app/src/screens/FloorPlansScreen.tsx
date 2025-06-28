import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

interface FloorPlan {
  name: string;
  sqft: string;
  beds: string;
  baths: string;
  url: string;
}

interface Neighborhood {
  id: string;
  name: string;
  description: string;
  plans: FloorPlan[];
}

const taylorMorrisonNeighborhoods: Neighborhood[] = [
  {
    id: 'aden-north',
    name: 'Aden North',
    description: 'Aden North features spacious single-family homes with modern designs and premium features.',
    plans: [
      { name: 'Anastasia', sqft: '2,582', beds: '4', baths: '3.5', url: 'https://westviewhomesales.com/floorplans/Anastasia.pdf' },
      { name: 'Aruba', sqft: '1,768', beds: '3', baths: '2', url: 'https://westviewhomesales.com/floorplans/Aruba.pdf' },
      { name: 'Barbados', sqft: '3,422', beds: '4', baths: '3.5', url: 'https://westviewhomesales.com/floorplans/Barbados.pdf' },
      { name: 'Bermuda', sqft: '3,053', beds: '4', baths: '3.5', url: 'https://westviewhomesales.com/floorplans/Bermuda.pdf' },
      { name: 'Boca Grande', sqft: '2,197', beds: '4', baths: '2.5', url: 'https://westviewhomesales.com/floorplans/BocaGrande.pdf' },
    ]
  },
  {
    id: 'aden-south',
    name: 'Aden South',
    description: 'Aden South features a collection of versatile floor plans designed for modern living.',
    plans: [
      { name: 'Ambrosia', sqft: '1,500', beds: '3', baths: '2', url: 'https://westviewhomesales.com/floorplans/Ambrosia.pdf' },
      { name: 'Azalea', sqft: '2,287', beds: '5', baths: '3', url: 'https://westviewhomesales.com/floorplans/Azalea.pdf' },
      { name: 'Cypress', sqft: '1,848', beds: '4', baths: '2', url: 'https://westviewhomesales.com/floorplans/Cypress.pdf' },
      { name: 'Elm', sqft: '2,271', beds: '4', baths: '2.5', url: 'https://westviewhomesales.com/floorplans/Elm.pdf' },
      { name: 'Holly', sqft: '1,455', beds: '3', baths: '2', url: 'https://westviewhomesales.com/floorplans/Holly.pdf' },
    ]
  }
];

const lennarNeighborhoods: Neighborhood[] = [
  {
    id: 'aden-south-1',
    name: 'Aden South I',
    description: 'Aden South I by Lennar features contemporary floor plans designed for modern family living.',
    plans: [
      { name: 'Annapolis', sqft: '1,444', beds: '3', baths: '2', url: 'https://westviewhomesales.com/floorplans/Annapolis.pdf' },
      { name: 'Atlanta', sqft: '1,879', beds: '4', baths: '2.5', url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf' },
      { name: 'Boston', sqft: '2,216', beds: '5', baths: '2.5', url: 'https://westviewhomesales.com/floorplans/Boston.pdf' },
      { name: 'Columbia', sqft: '2,370', beds: '5', baths: '2.5', url: 'https://westviewhomesales.com/floorplans/Columbia.pdf' },
      { name: 'Concord', sqft: '2,575', beds: '6', baths: '3', url: 'https://westviewhomesales.com/floorplans/Concord.pdf' },
    ]
  },
  {
    id: 'aden-south-2',
    name: 'Aden South II',
    description: 'Aden South II offers spacious single-family homes with flexible living spaces.',
    plans: [
      { name: 'Atlanta', sqft: '1,879', beds: '4', baths: '2.5', url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf' },
      { name: 'Columbia', sqft: '2,370', beds: '5', baths: '2.5', url: 'https://westviewhomesales.com/floorplans/Columbia.pdf' },
      { name: 'Concord', sqft: '2,575', beds: '6', baths: '3', url: 'https://westviewhomesales.com/floorplans/Concord.pdf' },
    ]
  }
];

const FloorPlanCard: React.FC<{ plan: FloorPlan }> = ({ plan }) => {
  const handleViewPDF = () => {
    Linking.openURL(plan.url);
  };

  return (
    <View style={styles.planCard}>
      <Text style={styles.planName}>{plan.name}</Text>
      
      <View style={styles.planStats}>
        <View style={styles.planStat}>
          <Ionicons name="resize-outline" size={16} color={Colors.gray} />
          <Text style={styles.planStatNumber}>{plan.sqft}</Text>
          <Text style={styles.planStatLabel}>SQ FT</Text>
        </View>
        <View style={styles.planStat}>
          <Ionicons name="bed-outline" size={16} color={Colors.gray} />
          <Text style={styles.planStatNumber}>{plan.beds}</Text>
          <Text style={styles.planStatLabel}>BEDS</Text>
        </View>
        <View style={styles.planStat}>
          <Ionicons name="water-outline" size={16} color={Colors.gray} />
          <Text style={styles.planStatNumber}>{plan.baths}</Text>
          <Text style={styles.planStatLabel}>BATHS</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.viewPdfButton} onPress={handleViewPDF}>
        <Text style={styles.viewPdfText}>View PDF</Text>
        <Ionicons name="open-outline" size={16} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default function FloorPlansScreen() {
  const [selectedBuilder, setSelectedBuilder] = useState<'taylor-morrison' | 'lennar'>('taylor-morrison');

  const renderFloorPlan = ({ item }: { item: FloorPlan }) => (
    <FloorPlanCard plan={item} />
  );

  const currentNeighborhoods = selectedBuilder === 'taylor-morrison' ? taylorMorrisonNeighborhoods : lennarNeighborhoods;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Westview Floor Plans</Text>
        <Text style={styles.subtitle}>
          Browse our collection of floor plans from our premier home builders. Each floor plan showcases thoughtful designs and modern features.
        </Text>
        
        <View style={styles.builderSelector}>
          <TouchableOpacity
            style={[
              styles.builderButton,
              selectedBuilder === 'taylor-morrison' && styles.builderButtonActive
            ]}
            onPress={() => setSelectedBuilder('taylor-morrison')}
          >
            <Text style={[
              styles.builderButtonText,
              selectedBuilder === 'taylor-morrison' && styles.builderButtonTextActive
            ]}>
              Taylor Morrison
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.builderButton,
              selectedBuilder === 'lennar' && styles.builderButtonActive
            ]}
            onPress={() => setSelectedBuilder('lennar')}
          >
            <Text style={[
              styles.builderButtonText,
              selectedBuilder === 'lennar' && styles.builderButtonTextActive
            ]}>
              Lennar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {currentNeighborhoods.map((neighborhood) => (
          <View key={neighborhood.id} style={styles.neighborhoodSection}>
            <Text style={styles.neighborhoodName}>{neighborhood.name}</Text>
            <Text style={styles.neighborhoodDescription}>{neighborhood.description}</Text>
            
            <FlatList
              data={neighborhood.plans}
              renderItem={renderFloorPlan}
              keyExtractor={(item) => item.name}
              numColumns={2}
              columnWrapperStyle={styles.planRow}
              scrollEnabled={false}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
  builderSelector: {
    flexDirection: 'row',
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    padding: 4,
  },
  builderButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  builderButtonActive: {
    backgroundColor: Colors.primary,
  },
  builderButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  builderButtonTextActive: {
    color: Colors.white,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  neighborhoodSection: {
    marginBottom: 32,
  },
  neighborhoodName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  neighborhoodDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  planRow: {
    justifyContent: 'space-between',
  },
  planCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    width: '48%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  planName: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  planStats: {
    marginBottom: 16,
  },
  planStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  planStatNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginLeft: 8,
    flex: 1,
  },
  planStatLabel: {
    fontSize: 12,
    color: Colors.gray,
    fontWeight: '500',
  },
  viewPdfButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  viewPdfText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});