import { View, FlatList, Button, StyleSheet } from 'react-native';

const problems = [
    { id: 1, name: 'animals'},
    { id: 2, name: 'roads'},
    { id: 3, name: 'trash'},
    { id: 4, name: 'crime'},
    { id: 5, name: 'the usual'},
];

const AppealMakeScreen = ({
    navigation,
}) => {
    const handleAppealPress = (item) => {
        navigation.navigate("AppealLocation", { problem: item });
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Button title={item.name} onPress={() => handleAppealPress(item)} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={problems}
                renderItem={renderItem}
                keyExtractor={(item, _) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        flexDirection: 'row',
        marginBottom: 30,
        gap: 20,
    },
    itemText: {
        marginLeft: 10,
    },
});


export default AppealMakeScreen;