import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from "react-native-paper";


const FolderCard = ({ navigation, entryID }) => {
    const [playModalVisible, setPlayModalVisible] = useState(false);
    const [isPlay, setIsPlay] = useState(false);

    const playEntry = () => {
        console.log("play the entry")
        setPlayModalVisible(true);
        setIsPlay(!isPlay);
    }


    const LeftContent = props => <Avatar.Icon {...props} icon="folder" /> //album image
    const RightContent = isPlay ? <IconButton icon="play-outline" onPress={playEntry} />
        : <IconButton icon="pause" onPress={playEntry} />//play button
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Card onPress={() => navigation.navigate("EditFolderScreen", { entryID }) }  >
                    <Card.Title title="Card Title" subtitle="Card Subtitle 12321" right={() => RightContent} />
                </Card>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 1,
    },
    container: {
        flex: 1,
    },
});

export default FolderCard;