import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, StatusBar, Platform } from 'react-native';
import PagerView from 'react-native-pager-view';
import HomeScreen from '../screens/HomeScreen';
import TutorialScreen from '../screens/TutorialScreen';

const { width } = Dimensions.get('window');

const MainLayout = () => {
    const pagerRef = useRef(null);

    return (
        <SafeAreaView style={styles.safeContainer}>
            {/* 确保状态栏颜色和背景一致 */}
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />

            <PagerView
                ref={pagerRef}
                style={styles.container}
                initialPage={0}
            >
                <View style={styles.page} key="1">
                    <HomeScreen pagerRef={pagerRef} />
                </View>
                <View style={styles.page} key="2">
                    <TutorialScreen />
                </View>
            </PagerView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#f9f9f9', // 确保背景色和状态栏一致
    },
    container: {
        flex: 1,
    },
    page: {
        width,
        flex: 1,
    },
});

export default MainLayout;
