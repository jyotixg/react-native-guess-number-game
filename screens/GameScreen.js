import { View, Text, StyleSheet, Button, Alert, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import defaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
// import { Ionicons } from '@expo/vector-icons'; // not working for few icons
import { AntDesign } from '@expo/vector-icons';
import BodyText from '../components/BodyText';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum == exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem} >
        <BodyText >#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
)

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            // console.log("right guess");
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if (
            (direction == "lower" && currentGuess < props.userChoice) ||
            (direction == "greater" && currentGuess > props.userChoice)
        ) {
            Alert.alert("Don\'t lie!", "You know this is wrong...!", [
                { text: "Sorry", style: "cancel" }
            ])
            return
        }

        if (direction === "lower") {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(currRounds => currRounds + 1);
        setPastGuesses(currPassGues => [nextNumber.toString(), ...currPassGues])
    }

    return (
        <View style={styles.screen} >
            <Text style={defaultStyles.bodyText} >Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer} >
                <MainButton title='LOWER' onPress={nextGuessHandler.bind(this, "lower")} >
                    {/* <Ionicons name="md-remove" size={20} /> */} {/* not working for few icons */}
                    <AntDesign name="minus" size={20} />
                </MainButton>
                <MainButton title='GREATER' onPress={nextGuessHandler.bind(this, "greater")} >
                    <AntDesign name="plus" size={20} />
                </MainButton>
            </Card>

            <View style={styles.listContainer} >
                {/* <ScrollView contentcontainerstyle={styles.list} >
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}

                <FlatList
                    keyExtractor={item => item}
                    data={pastGuesses}
                    renderItem={renderListItem.bind(this, pastGuesses.length)}
                    contentContainerStyle={styles.list}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "90%"
    },
    listContainer: {
        flex: 1,
        width: "80%"
    },
    list: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    listItem: {
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
})

export default GameScreen