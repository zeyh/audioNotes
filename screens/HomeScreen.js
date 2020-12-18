import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar, Text } from 'react-native-paper';
import FolderCard from "../components/FolderCard";
import BottomBar from "../components/BottomBar";

const HomeScreen = ({ route, navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isPlay, setIsPlay] = useState(false);

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView style={styles.container}> 
            <ScrollView style={styles.contents}>
                <Text> Audio Notes</Text>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                <FolderCard navigation={navigation} entryID={0}/>
                <FolderCard navigation={navigation} entryID={1}/>
            </ScrollView>
            <View style={styles.bottomBar}>
                <BottomBar navigation={navigation} entryID={0} isPlay={isPlay} setIsPlay={setIsPlay} />
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    contents:{
        flex:0.9
    },
    bottomBar:{
        margin:-10,
        flex:0.1
        // position:"absolute",
        // bottom:2
    },
});

export default HomeScreen;