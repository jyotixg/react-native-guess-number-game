import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BodyText = (props) => {
    return (
        <Text style={styles.title} >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    body: {
        fontFamily: "open-sans-bold",
        fontSize: 18
    }
})

export default BodyText