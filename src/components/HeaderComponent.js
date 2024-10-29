import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const HeaderComponent = ({
    hdrText
}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image 
            resizeMode='contain'
            style={{width: 24, height: 24}}
            source={require('../assets/icons/backArrow.png')}/>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 16}}>{hdrText}</Text>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({})
