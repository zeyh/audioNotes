import React from "react";
import { SafeAreaView } from "react-native";
import { Searchbar, Text } from 'react-native-paper';
import FolderCard from "../components/FolderCard";

const HomeScreen = ({ route, navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView>
            <Text> Audio Notes</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <FolderCard />
        </SafeAreaView>
    );
}

export default HomeScreen;