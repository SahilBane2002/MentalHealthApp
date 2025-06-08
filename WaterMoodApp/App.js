import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar,
  Alert 
} from 'react-native';

export default function App() {
  const [isPressed, setIsPressed] = useState(false);

  const handleWelcomePress = () => {
    Alert.alert(
      "🌊 Welcome!",
      "Your emotional journey starts here. Let's create beautiful ripples together!",
      [{ text: "Let's Begin!", style: "default" }]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2C5282" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>🌊 Water Mood 🌊</Text>
        <Text style={styles.subtitle}>Your Emotional Journey</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Welcome to a space where your feelings flow freely like water
        </Text>
        
        <Text style={styles.description}>
          Track your daily emotions with beautiful water metaphors and 
          discover patterns in your mental wellness journey.
        </Text>
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.startButton,
            isPressed && styles.startButtonPressed
          ]}
          onPress={handleWelcomePress}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>🌊 Begin Your Journey</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Like gentle waves, every feeling has its place
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F3FF', // Light blue background
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C5282', // Deep blue
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#BEE3F8', // Light blue
    textAlign: 'center',
    fontStyle: 'italic',
  },
  content: {
    flex: 3,
    paddingHorizontal: 30,
    paddingTop: 40,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#2C5282',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 32,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  startButton: {
    backgroundColor: '#3182CE',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  startButtonPressed: {
    backgroundColor: '#2C5282',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flex: 0.5,
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  footerText: {
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});