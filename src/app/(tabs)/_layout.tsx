import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Stack} from "expo-router";

import {useColorScheme} from '@/src/hooks/useColorScheme';


export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="index"/>
            </Stack>
        </ThemeProvider>
    );
}
