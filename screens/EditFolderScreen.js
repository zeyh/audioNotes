import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Appbar } from "react-native-paper";



const EditFolderScreen = ({ route, navigation }) => {
    const entryID = route.params.entryID;
    const Header = () => {
        return (
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title={entryID + " entry"} />
            </Appbar.Header>
        );
    };

    return (
        <SafeAreaView>
            <View><Header /></View>
            <Text>Edit Existing card entry(folder) {entryID}</Text>
        </SafeAreaView>
    );
}

export default EditFolderScreen;