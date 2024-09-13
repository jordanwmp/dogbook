import { View, Text, FlatList, ImageBackground, ScrollView, StyleSheet, SectionList } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import HorizontalCard from '../../components/HorizontalCard/HorizontalCard'

import data from '../../data/data'
import ListCard from '../../components/Listcard'


function Dogs() {

    const navigation = useNavigation()

    function callDetail() {
        navigation.navigate('Detalhes', { name: 'Husk Siberiano' })
    }

    const sections = [
        {
            title: 'Recommended',
            horizontal: true,
            data: data,
        },
        {
            title: 'Our pets',
            horizontal: false,
            data: data,
        },
    ];

    const renderSectionHeader = ({ section: { title, horizontal, data } }) => {
        if (horizontal) {
            return (
                <View>
                    <Text style={styles.label}>{title}</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => <HorizontalCard dog={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            );
        } else {
            return <Text style={styles.label}>{title}</Text>;
        }
    };

    const renderItem = ({ item, section }) => {
        if (!section.horizontal) {
            return <ListCard dog={item} />;
        }
        return null;
    };

    return (
        <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            style={{paddingHorizontal: 8}}
        />

    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
});

export default Dogs