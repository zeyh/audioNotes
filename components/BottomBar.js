import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Snackbar, IconButton} from "react-native-paper";


const BottonBar = ({navigation, entryID, isPlay, setIsPlay}) => {
    // const [isPlay, setIsPlay] = useState(true);
    const playEntry = () => {
        console.log("play the entry")
        setIsPlay(!isPlay);
    }
    const onDismissSnackBar = () => {null};
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />; //album image
    const RightContent = isPlay ? <IconButton icon="play-outline" onPress={playEntry}/> 
                        : <IconButton icon="pause" onPress={playEntry}/>//play button
    return (
        <View style={styles.container}>
        <Snackbar
        visible={true}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
            Hey there! I'm a Snackbar.
        </Snackbar>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
  });
  

export default BottonBar;