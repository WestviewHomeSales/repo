import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
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

const NeighborhoodSection: React.FC<{ neighborhood: Neighborhood; builder: string }> = ({ neighborhood, builder }) => {
  return (
    <View style={styles.neighborhoodSection}>
      <Text style={styles.neighborhoodName}>{neighborhood.name}</Text>
      <Text style={styles.neighborhoodDescription}>{neighborhood.description}</Text>
      
      <View style={styles.plansGrid}>
        {neighborhood.plans.map((plan) => (
          <FloorPlanCard key={plan.name} plan={plan} />
        ))}
      </View>
    </View>
  );
};

export default function FloorPlansScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Westview Floor Plans</Text>
        <Text style={styles.subtitle}>
          Browse our collection of floor plans from our premier home builders. Each floor plan showcases thoughtful designs and modern features.
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.builderSection}>
          <Text style={styles.builderTitle}>Taylor Morrison</Text>
          <Text style={styles.builderDescription}>
            Taylor Morrison offers a variety of floor plans across multiple neighborhoods in Westview, including single-family homes and townhomes.
          </Text>
          
          {taylorMorrisonNeighborhoods.map((neighborhood) => (
            <NeighborhoodSection
              key={neighborhood.id}
              neighborhood={neighborhood}
              builder="taylor-morrison"
            />
          ))}
        </View>

        <View style={styles.builderSection}>
          <Text style={styles.builderTitle}>Lennar</Text>
          <Text style={styles.builderDescription}>
            Lennar offers numerous floor plans across several neighborhoods in Westview, with options for every lifestyle and need.
          </Text>
          
          {lennarNeighborhoods.map((neighborhood) => (
            <NeighborhoodSection
              key={neighborhood.id}
              neighborhood={neighborhood}
              builder="lennar"
            />
          ))}
        </View>
      </View>
    </ScrollView>
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
  },
  content: {
    padding: 16,
  },
  builderSection: {
    marginBottom: 32,
  },
  builderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  builderDescription: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },
  neighborhoodSection: {
    marginBottom: 24,
  },
  neighborhoodName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  neighborhoodDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  plansGrid: {
    gap: 12,
  },
  planCard: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  planName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  planStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  planStat: {
    alignItems: 'center',
    flex: 1,
  },
  planStatNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginTop: 4,
  },
  planStatLabel: {
    fontSize: 10,
    color: Colors.gray,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  viewPdfButton: {
    backgroundColor: Colors.primary,
    borderRadius: 6,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  viewPdfText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});