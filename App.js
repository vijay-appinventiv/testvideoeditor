import React from 'react';
import { VESDK } from 'react-native-videoeditorsdk';
import ImagePicker from 'react-native-image-crop-picker';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const passVideoToEditor = (video) => {
    VESDK.openEditor(video.path).then(
      result => {
        if (result) {
          console.log("result", result)
        }
      },
      _ => {
        console.log("error in editing", _)
      },
    );
  }

  const openEditor = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
      compressVideoPreset: 'Passthrough',
    })
      .then((video) => {
        passVideoToEditor(video);
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={openEditor} style={styles.pressBtn}>
        <Text>{"Open Editor"}</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  pressBtn: {
    height: 40,
    width: 100,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  }
});

