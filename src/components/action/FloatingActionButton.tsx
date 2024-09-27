import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from '@/src/components/Icon'
import { useThemeColor } from '@/src/hooks/useThemeColor'

export type FloatingActionButtonProps = {
    onPress?: () => void
    lightColor?: string
    darkColor?: string
}

const FloatingActionButton = ({
    onPress,
    lightColor,
    darkColor,
}: FloatingActionButtonProps) => {
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        'background'
    )

    return (
        <TouchableOpacity style={styles.absolute}>
            <Icon />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    absolute: {
        width: 80,
        height: 80,
        borderRadius: 16,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
})

export default FloatingActionButton
