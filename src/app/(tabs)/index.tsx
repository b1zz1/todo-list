import { Text } from 'react-native'
import { ThemedView } from '@/src/components/ThemedView'
import { Colors } from '@/src/constants/Colors'
import FloatingActionButton from '@/src/components/action/FloatingActionButton'

export default function Index() {
    return (
        <ThemedView
            lightColor={Colors.light.background}
            darkColor={Colors.dark.background}
            style={{ flex: 1 }}
        >
            <Text>Olá, mundo!</Text>
            <FloatingActionButton />
        </ThemedView>
    )
}
