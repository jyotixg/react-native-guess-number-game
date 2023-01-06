import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen} >
            <TitleText>The Game is over!</TitleText>
            <View style={styles.imageContainer} >
                <Image
                    // source={require('../assets/success.png')}
                    
                    fadeDuration={1000}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGd_z8xW6cBQMHfdTjv3Mz07KSCulqePREmqHjYbuNg&s"
                    }}  
                    style={styles.image}
                    resizeMode="cover"
                />
                </View>
            <BodyText>Number of rounds: {props.roundNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title='New Game' onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical: 30
    },
    image: {
        height: "100%",
        width: "100%"
    }
})

export default GameOverScreen