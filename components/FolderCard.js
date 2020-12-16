import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph} from "react-native-paper";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const FolderCard = () => {
    return (
        <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FolderCard;