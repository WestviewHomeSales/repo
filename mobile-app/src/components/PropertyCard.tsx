import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Property } from '../types/Property';
import { formatPrice, formatNumber, formatDate } from '../utils/formatters';
import { Colors } from '../constants/Colors';

interface PropertyCardProps {
  property: Property;
  isSoldPage?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, isSoldPage = false }) => {
  const handleMoreDetails = () => {
    if (property.moreDetailsUrl) {
      Linking.openURL(property.moreDetailsUrl);
    } else {
      Alert.alert('Info', 'More details URL not available');
    }
  };

  const handlePhotoGallery = () => {
    if (property.photoGalleryUrl) {
      Linking.openURL(property.photoGalleryUrl);
    } else {
      Alert.alert('Info', 'Photo gallery URL not available');
    }
  };

  const handleShare = () => {
    const shareText = `Check out this ${property.beds} bed, ${property.baths} bath home in ${property.city}, ${property.state}. ${formatNumber(property.sqFt)} sq ft for ${formatPrice(property.price)}.`;
    
    // You can implement native sharing here
    Alert.alert('Share Property', shareText);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: property.imageUrl }}
          style={styles.image}
          defaultSource={{ uri: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg' }}
        />
        
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={16} color={Colors.darkGray} />
        </TouchableOpacity>

        {!isSoldPage && (
          <View style={styles.listedBadge}>
            <Text style={styles.listedText}>Listed: {formatDate(property.listedDate)}</Text>
          </View>
        )}

        {isSoldPage && property.soldDate && (
          <View style={styles.soldBadge}>
            <Text style={styles.soldText}>Sold: {formatDate(property.soldDate)}</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.priceSection}>
          <Text style={styles.price}>{formatPrice(property.price)}</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{property.address}</Text>
            <Text style={styles.cityState}>{property.city}, {property.state} {property.zip}</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Ionicons name="bed-outline" size={16} color={Colors.gray} />
            <Text style={styles.statNumber}>{property.beds}</Text>
            <Text style={styles.statLabel}>BEDS</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="water-outline" size={16} color={Colors.gray} />
            <Text style={styles.statNumber}>{property.baths}</Text>
            <Text style={styles.statLabel}>BATHS</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="resize-outline" size={16} color={Colors.gray} />
            <Text style={styles.statNumber}>{formatNumber(property.sqFt)}</Text>
            <Text style={styles.statLabel}>SQ FT</Text>
          </View>
        </View>

        {!isSoldPage && (
          <View style={styles.listedByContainer}>
            <Text style={styles.listedBy}>
              Listed by: <Text style={styles.listedByName}>{property.listedBy}</Text>
            </Text>
          </View>
        )}

        {!isSoldPage && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton} onPress={handleMoreDetails}>
              <Text style={styles.primaryButtonText}>More Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={handlePhotoGallery}>
              <Text style={styles.secondaryButtonText}>Photo Gallery</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  shareButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 8,
  },
  listedBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: Colors.success,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  listedText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  soldBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: Colors.success,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  soldText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  content: {
    padding: 16,
  },
  priceSection: {
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  addressContainer: {
    flexDirection: 'column',
  },
  address: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  cityState: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginTop: 4,
  },
  statLabel: {
    fontSize: 10,
    color: Colors.gray,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  listedByContainer: {
    marginBottom: 16,
  },
  listedBy: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  listedByName: {
    fontWeight: '500',
    color: Colors.text,
  },
  buttonContainer: {
    gap: 8,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  secondaryButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});