// import { View, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

const points = [
    { id: 1, problemID: 1, coordinate: { latitude: 37.78825, longitude: -122.4324 } },
    { id: 2, problemID: 1, coordinate: { latitude: 37.75825, longitude: -122.4624 } },
];

const AppealLocationScreen = ({
    navigation,
    problem,
}) => {
    // return (
    //   <View style={styles.container}>
    //     <MapView style={styles.map} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
    //       {points.map(point => (
    //         <Marker
    //           key={point.id}
    //           coordinate={point.coordinate}
    //         />
    //       ))}
    //     </MapView>
    //   </View>
    // );
    return <></>
};
  
// const styles = StyleSheet.create({
// container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
// },
// map: {
//     ...StyleSheet.absoluteFillObject,
// },
// });

export default AppealLocationScreen