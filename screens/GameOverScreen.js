import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Color from '../constants/Color'
import MainButton from '../components/MainButton'

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
            {/* <BodyText>Number of rounds: {props.roundNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText> */}

            <View style={styles.resultContainer} >
                <BodyText style={styles.resultText} >Your phone needed {""}
                    <Text style={styles.highlight} >{props.roundNumber} </Text>
                    rounds to guess the number {""}
                    <Text style={styles.highlight} >{props.userNumber} </Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart} >New Game</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 20
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
    },
    highlight: {
        color: Color.primary,
        fontFamily: "open-sans-bold"
    },
    resultText: {
        textAlign: "center",
        fontSize: 20
    }
})

export default GameOverScreen