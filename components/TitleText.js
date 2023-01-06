import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TitleText = (props) => {
    return (
        <Text style={{ ...props.style, ...styles.title }} >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 18
    }
})

export default TitleText