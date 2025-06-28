import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

interface TeamMember {
  name: string;
  title: string;
  phone: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Susan Borchini",
    title: "Broker/Owner",
    phone: "(407) 791-1789",
    email: "sborchini@gmail.com"
  },
  {
    name: "Charlie Borchini",
    title: "Broker Associate",
    phone: "(407) 552-7375",
    email: "charles.borchini@gmail.com"
  },
  {
    name: "Yamile Varrone",
    title: "Realtor",
    phone: "(315) 534-1966",
    email: "ycVarrone@gmail.com"
  },
  {
    name: "Edie Stauffer",
    title: "Realtor",
    phone: "(407) 791-1789",
    email: "EdieStauffer@gmail.com"
  }
];

export default function ContactScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleCall = (phoneNumber: string) => {
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    Linking.openURL(`tel:${cleanPhone}`);
  };

  const handleEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    const subject = `New Contact Form Message from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

    const mailtoLink = `mailto:WestviewHomeSales@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailtoLink);
  };

  const openMap = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    Linking.openURL(`https://maps.google.com/?q=${encodedAddress}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>
          Get in touch with our team about properties in Westview, Poinciana.
        </Text>
      </View>

      <View style={styles.content}>
        {/* Quick Contact Buttons */}
        <View style={styles.quickContactSection}>
          <TouchableOpacity 
            style={[styles.quickContactButton, { backgroundColor: Colors.success }]}
            onPress={() => handleCall('4075227375')}
          >
            <Ionicons name="call" size={24} color={Colors.white} />
            <Text style={styles.quickContactText}>Call Now</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.quickContactButton, { backgroundColor: Colors.primary }]}
            onPress={() => handleEmail('WestviewHomeSales@gmail.com')}
          >
            <Ionicons name="mail" size={24} color={Colors.white} />
            <Text style={styles.quickContactText}>Email Us</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Send Us a Message</Text>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name *</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
              placeholder="Your name"
              placeholderTextColor={Colors.gray}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email *</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
              placeholder="your.email@example.com"
              placeholderTextColor={Colors.gray}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone (optional)</Text>
            <TextInput
              style={styles.input}
              value={formData.phone}
              onChangeText={(text) => setFormData(prev => ({ ...prev, phone: text }))}
              placeholder="(123) 456-7890"
              placeholderTextColor={Colors.gray}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Message *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.message}
              onChangeText={(text) => setFormData(prev => ({ ...prev, message: text }))}
              placeholder="Write your message here..."
              placeholderTextColor={Colors.gray}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        {/* Office Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Office</Text>
          
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => openMap('345 Sorrento Rd, Kissimmee, FL 34759')}
          >
            <Ionicons name="location-outline" size={20} color={Colors.primary} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Address</Text>
              <Text style={styles.contactValue}>
                Borchini Realty{'\n'}
                345 Sorrento Rd.{'\n'}
                Kissimmee, FL 34759
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleCall('(407) 522-7375')}
          >
            <Ionicons name="call-outline" size={20} color={Colors.primary} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={[styles.contactValue, styles.linkText]}>(407) 522-7375</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleEmail('WestviewHomeSales@gmail.com')}
          >
            <Ionicons name="mail-outline" size={20} color={Colors.primary} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={[styles.contactValue, styles.linkText]}>WestviewHomeSales@gmail.com</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.contactItem}>
            <Ionicons name="time-outline" size={20} color={Colors.primary} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Office Hours</Text>
              <Text style={styles.contactValue}>
                Monday - Friday: 9:00 AM - 6:00 PM{'\n'}
                Saturday: 10:00 AM - 4:00 PM{'\n'}
                Sunday: By appointment only
              </Text>
            </View>
          </View>
        </View>

        {/* Team Members */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.teamMember}>
              <View style={styles.teamMemberInfo}>
                <Text style={styles.teamMemberName}>{member.name}</Text>
                <Text style={styles.teamMemberTitle}>{member.title}</Text>
              </View>
              <View style={styles.teamMemberActions}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleCall(member.phone)}
                >
                  <Ionicons name="call" size={16} color={Colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleEmail(member.email)}
                >
                  <Ionicons name="mail" size={16} color={Colors.primary} />
                </TouchableOpacity>
              </View>
            </View>
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
  quickContactSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  quickContactButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  quickContactText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text,
    backgroundColor: Colors.white,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  contactInfo: {
    marginLeft: 12,
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  linkText: {
    color: Colors.primary,
  },
  teamMember: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  teamMemberInfo: {
    flex: 1,
  },
  teamMemberName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  teamMemberTitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  teamMemberActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
  },
});