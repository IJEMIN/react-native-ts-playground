import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';

// default prop
interface ScreenProps {
    children: React.ReactNode;
    style ?: object;
}

const Screen: React.FC<ScreenProps> = ({children, style}) => {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ 
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

export default Screen;