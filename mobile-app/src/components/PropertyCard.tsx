import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Share,
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

  const handleShare = async () => {
    const shareContent = {
      message: `Check out this ${property.beds} bed, ${property.baths} bath home in ${property.city}, ${property.state}. ${formatNumber(property.sqFt)} sq ft for ${formatPrice(property.price)}.`,
      url: property.moreDetailsUrl || '',
      title: `${formatPrice(property.price)} - ${property.address}`,
    };
    
    try {
      await Share.share(shareContent);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleCall = () => {
    Linking.openURL('tel:4075227375');
  };

  const handleEmail = () => {
    const subject = `Inquiry about ${property.address}`;
    const body = `I'm interested in learning more about the property at ${property.address}, ${property.city}, ${property.state} ${property.zip}.\n\nPrice: ${formatPrice(property.price)}\nBeds: ${property.beds}\nBaths: ${property.baths}\nSquare Feet: ${formatNumber(property.sqFt)}\n\nPlease contact me with more information.`;
    
    Linking.openURL(`mailto:WestviewHomeSales@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
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
            <View style={styles.contactButtons}>
              <TouchableOpacity style={styles.contactButton} onPress={handleCall}>
                <Ionicons name="call" size={16} color={Colors.white} />
                <Text style={styles.contactButtonText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactButton} onPress={handleEmail}>
                <Ionicons name="mail" size={16} color={Colors.white} />
                <Text style={styles.contactButtonText}>Email</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  listedText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  soldBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: Colors.success,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  soldText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  priceSection: {
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 6,
  },
  addressContainer: {
    flexDirection: 'column',
  },
  address: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  cityState: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingVertical: 12,
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 6,
  },
  statLabel: {
    fontSize: 10,
    color: Colors.gray,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  listedByContainer: {
    marginBottom: 16,
  },
  listedBy: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  listedByName: {
    fontWeight: '600',
    color: Colors.text,
  },
  buttonContainer: {
    gap: 10,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  contactButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  contactButton: {
    flex: 1,
    backgroundColor: Colors.success,
    borderRadius: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  contactButtonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});