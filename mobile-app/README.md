# Borchini Realty Mobile App

A React Native mobile application for Borchini Realty, featuring current property listings, sold properties, floor plans, and contact information for the Westview community in Poinciana, Florida.

## Features

- **Current Listings**: Browse active property listings with detailed information
- **Sold Properties**: View recently sold homes to understand market trends
- **Floor Plans**: Access floor plans from Taylor Morrison and Lennar builders
- **Contact**: Get in touch with the Borchini Realty team
- **Real-time Data**: Connects to Supabase for live property data
- **Native Features**: Phone calls, email, maps integration

## Tech Stack

- React Native with Expo
- TypeScript
- React Navigation
- Supabase for backend data
- Expo Vector Icons

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd mobile-app
   npm install
   ```

2. **Configure Supabase**
   - Update `src/services/supabase.ts` with your Supabase URL and anon key
   - These should match the credentials from your web application

3. **Run the App**
   ```bash
   # Start the development server
   npm start

   # Run on iOS simulator
   npm run ios

   # Run on Android emulator
   npm run android
   ```

## Environment Setup

Make sure you have the following installed:
- Node.js (v16 or later)
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio and emulator (for Android development)

## Building for Production

1. **Install EAS CLI**
   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Configure EAS**
   ```bash
   eas login
   eas build:configure
   ```

3. **Build for iOS**
   ```bash
   eas build --platform ios
   ```

4. **Build for Android**
   ```bash
   eas build --platform android
   ```

## App Store Deployment

1. **iOS App Store**
   ```bash
   eas submit --platform ios
   ```

2. **Google Play Store**
   ```bash
   eas submit --platform android
   ```

## Key Components

- **PropertyCard**: Reusable component for displaying property information
- **HomeScreen**: Current listings with pull-to-refresh
- **SoldScreen**: Recently sold properties
- **FloorPlansScreen**: Interactive floor plan browser
- **ContactScreen**: Contact form and team information

## Data Integration

The app uses the same Supabase backend as your web application:
- `westviewactive` table for current listings
- `whs2024` and `whs2025` tables for sold properties
- Real-time data synchronization
- Offline-friendly caching

## Customization

- Update colors in `src/constants/Colors.ts`
- Modify app icon and splash screen in `assets/`
- Adjust navigation structure in `App.tsx`
- Add new screens in `src/screens/`

## Features to Consider Adding

- Push notifications for new listings
- Saved favorites functionality
- Property comparison tool
- Mortgage calculator
- Virtual tour integration
- Dark mode support
- Offline property viewing

This mobile app provides a native experience for your real estate clients, allowing them to browse properties, access floor plans, and contact your team directly from their mobile devices.