import { Pressable, StyleSheet, View, Text, ImageBackground } from "react-native";

export default function CategoryGridTile({title, color, imgPath}){
    return (
        <ImageBackground style={styles.parentCont}
        source={imgPath}
        resizeMode='cover'
        >
            <Pressable style={{flex: 1}}>
                <View style={styles.tileCont}>
                    <Text style={styles.tileTitle}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    parentCont: {flex: 1, margin: 8, borderRadius: 16, overflow: 'hidden'},
    tileCont: {height: 150, borderRadius: 16, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, 0.55)',},
    tileTitle: {textAlign: 'center', fontSize: 20, fontWeight: '600', color: 'white'},
});