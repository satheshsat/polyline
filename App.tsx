import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
        initialRegion={{
          latitude: 37.8025259,
          longitude: -122.4351431,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          <Marker
            coordinate={{ latitude: 37.8025259, longitude: -122.4351431 }}
            image={{uri:"data:image/png;base64,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"}}
            style={{backgroundColor:'#ccc',transform: [{rotate: '90deg'}],}}  
          >
          </Marker>
          <Polyline
            coordinates={[
              { latitude: 37.8025259, longitude: -122.4351431 },
              { latitude: 37.7896386, longitude: -122.421646 },
              { latitude: 37.7665248, longitude: -122.4161628 },
              { latitude: 37.7734153, longitude: -122.4577787 },
              { latitude: 37.7948605, longitude: -122.4596065 },
              { latitude: 37.8025259, longitude: -122.4351431 }
            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000'
            ]}
            strokeWidth={6}
          />
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
