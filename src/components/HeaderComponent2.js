import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderComponent2 = ({
    hdrText
}) => {
    return (
        <View >
            <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 16}}>{hdrText}</Text>
        </View>
    )
}

export default HeaderComponent2

const styles = StyleSheet.create({})
