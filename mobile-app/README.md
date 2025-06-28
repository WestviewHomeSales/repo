# Borchini Realty Mobile App

A React Native mobile application for Borchini Realty, featuring current property listings, sold properties, floor plans, and contact information for the Westview community in Poinciana, Florida.

## Features

- **Current Listings**: Browse active property listings with detailed information, sorting, and filtering
- **Sold Properties**: View recently sold homes to understand market trends
- **Floor Plans**: Access floor plans from Taylor Morrison and Lennar builders
- **Contact**: Get in touch with the Borchini Realty team with integrated calling and email
- **Real-time Data**: Connects to Supabase for live property data
- **Native Features**: Phone calls, email, maps integration, and native sharing

## Tech Stack

- React Native with Expo
- TypeScript
- React Navigation (Bottom Tabs)
- Supabase for backend data
- Expo Vector Icons

## Setup Instructions

### Prerequisites

Make sure you have the following installed:
- Node.js (v16 or later)
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio and emulator (for Android development)

### Installation

1. **Navigate to the mobile app directory**
   ```bash
   cd mobile-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Supabase**
   - Update `src/services/supabase.ts` with your Supabase URL and anon key
   - These should match the credentials from your web application

4. **Run the App**
   ```bash
   # Start the development server
   npm start

   # Run on iOS simulator
   npm run ios

   # Run on Android emulator
   npm run android
   ```

## Building for Production

### Setup EAS Build

1. **Install EAS CLI**
   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```

3. **Configure EAS**
   ```bash
   eas build:configure
   ```

### Build Apps

1. **Build for iOS**
   ```bash
   eas build --platform ios
   ```

2. **Build for Android**
   ```bash
   eas build --platform android
   ```

### Submit to App Stores

1. **iOS App Store**
   ```bash
   eas submit --platform ios
   ```

2. **Google Play Store**
   ```bash
   eas submit --platform android
   ```

## App Structure

```
mobile-app/
├── src/
│   ├── components/
│   │   └── PropertyCard.tsx       # Reusable property display component
│   ├── constants/
│   │   └── Colors.ts              # App color scheme
│   ├── screens/
│   │   ├── HomeScreen.tsx         # Current listings with sorting
│   │   ├── SoldScreen.tsx         # Recently sold properties
│   │   ├── FloorPlansScreen.tsx   # Interactive floor plan browser
│   │   └── ContactScreen.tsx      # Contact form and team info
│   ├── services/
│   │   └── supabase.ts            # Supabase client and API calls
│   ├── types/
│   │   └── Property.ts            # TypeScript interfaces
│   └── utils/
│       ├── formatters.ts          # Utility functions for formatting
│       └── propertyMapper.ts      # Data transformation utilities
├── App.tsx                        # Main app component with navigation
├── app.json                       # Expo configuration
├── eas.json                       # EAS Build configuration
└── package.json                   # Dependencies and scripts
```

## Key Features

### Property Listings
- Real-time data from Supabase
- Sorting by date, price, and square footage
- Pull-to-refresh functionality
- Native sharing capabilities
- Direct calling and email integration

### Enhanced UI/UX
- Modern, clean design with consistent color scheme
- Smooth animations and transitions
- Responsive layout for different screen sizes
- Native iOS and Android design patterns

### Contact Integration
- One-tap calling to real estate agents
- Pre-filled email templates for property inquiries
- Interactive contact forms
- Team member directory with direct contact options

### Floor Plans
- Organized by builder (Taylor Morrison, Lennar)
- PDF viewing with external link integration
- Detailed specifications for each plan
- Easy navigation between neighborhoods

## Data Integration

The app uses the same Supabase backend as your web application:
- `westviewactive` table for current listings
- `whs2024` and `whs2025` tables for sold properties
- Real-time data synchronization
- Offline-friendly error handling

## Customization

- **Colors**: Update `src/constants/Colors.ts` for brand colors
- **App Icon**: Replace files in `assets/` directory
- **Navigation**: Modify `App.tsx` for different tab structure
- **Screens**: Add new screens in `src/screens/`
- **Components**: Create reusable components in `src/components/`

## Environment Variables

The app expects the following Supabase configuration in `src/services/supabase.ts`:
- `supabaseUrl`: Your Supabase project URL
- `supabaseAnonKey`: Your Supabase anonymous key

## Deployment Checklist

Before deploying to app stores:

1. **Update app.json**
   - Set correct bundle identifier
   - Update version numbers
   - Configure app icons and splash screens

2. **Test on Physical Devices**
   - Test on both iOS and Android
   - Verify all features work correctly
   - Test network connectivity scenarios

3. **Configure Store Listings**
   - Prepare app screenshots
   - Write app descriptions
   - Set up app store metadata

4. **Submit for Review**
   - Follow platform-specific guidelines
   - Respond to review feedback promptly

## Future Enhancements

Consider adding these features:
- Push notifications for new listings
- Saved favorites functionality
- Property comparison tool
- Mortgage calculator
- Virtual tour integration
- Dark mode support
- Offline property viewing
- Advanced search filters
- Property alerts and notifications

This mobile app provides a native experience for your real estate clients, allowing them to browse properties, access floor plans, and contact your team directly from their mobile devices.