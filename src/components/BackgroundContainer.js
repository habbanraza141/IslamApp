import React, { Children } from 'react'
import { StyleSheet, Text, View , SafeAreaView} from 'react-native'

const BackgroundContainer = ({
    children
}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1}} >
                {children}
            </SafeAreaView>
        </View>
    )
}

export default BackgroundContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 22

    },
})
