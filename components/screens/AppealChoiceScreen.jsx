import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// should be fetched by pointID - show only related appeals
const point_appeals = [
    { id: 'appealID01', description: 'I cant belive there is a 100ft hole in the midd...'},
    { id: 'appealID02', description: 'How is there a 200ft hole in the middle of the...'},
    { id: 'appealID03', description: 'there is a 300ft hole in the middle of the ...'},
    { id: 'appealID10', description: 'I literally just passed by a 400ft hole in th...'},
    { id: 'appealID11', description: 'A very dangerous and deep 500ft hole in the mi...'},
];

const AppealChoiceScreen = (
    navigation,
    route,
) => {
    // STILL DOESNT WORK
    //const {point, problem} = route.params;

    const handleClick = () => {navigation.navigate('AppealSuccess')};

    const renderItem = ({ item }) => {return (
        <View style={styles.entry}>
          <Text>{item.description}</Text>
          <View style={flex=1}>
            <Button style={styles.circle} onPress={() => handleClick}></Button>
          </View>
        </View>
    )};
    
    // use point to filter through appeals with problemType==problem

    return (
        <View style={styles.container}>
            <Text>Relevant to your problem</Text>
            <FlatList
                data={point_appeals}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <Button title='Add new'/>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    entry: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 8,
        backgroundColor: '#eee',
        borderRadius: 5,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'darkgreen',
      },
});


export default AppealChoiceScreen