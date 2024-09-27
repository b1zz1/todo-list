import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Icon = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/icons/add.svg')}
                style={{ width: 50, height: 50 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Icon
