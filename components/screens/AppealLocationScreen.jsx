import map from '../../assets/map.png';
import { View, ImageBackground, TouchableWithoutFeedback, StyleSheet } from 'react-native';

// should be fetched by problemID - draw only relevant points
const points = [
    { id: 1, problemID: 1, coordinate: { latitude: 37.78825, longitude: -122.4324 } },
    { id: 2, problemID: 1, coordinate: { latitude: 37.75825, longitude: -122.4624 } },
];

const AppealLocationScreen = ({
    navigation,
    route,
}) => {
    const {problem} = route.params;
    // fetch points by problemID

    const randHW = () => { 
        const hmax= 500; 
        const wmax = 800; 
        const randH = 
            Math.floor(Math.random() * (hmax + 1)); 
        const randW = 
            Math.floor(Math.random() * (wmax + 1));
        return {top: randH + 'px', left: randW + 'px'}
    };

    const handlePointPress = (point) => {
        navigation.navigate("AppealChoice", { point: point, problem: problem});
    }

    const drawpoints = points.map((point, _) => ( // randHW in style is a MAJOR stub for coordinate use
    <TouchableWithoutFeedback key={point.id} onPressIn={() => handlePointPress(point)}>
        <View style={[styles.circle, randHW()]}></View>
    </TouchableWithoutFeedback>
    ))

    return (
        <View>
            <ImageBackground
                source={map}>
            { drawpoints }
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    circle: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: 'darkblue',
      position: 'absolute',
    },
})
export default AppealLocationScreen