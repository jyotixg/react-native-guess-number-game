import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import TitleText from './TitleText'

const Header = (props) => {
    return (
        <View style={styles.header} >
            <TitleText>{props.title}</TitleText>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: Color.primary,
        alignItems: "center",
        justifyContent: "center"
    },

    headerTitle: {
        color: "black",
        fontSize: 18,
        fontFamily: "open-sans-bold"
    }
})


export default Header