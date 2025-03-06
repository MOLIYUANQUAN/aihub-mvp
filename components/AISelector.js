import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import aiList from '../data/aiList';
import { useAppContext } from '../hooks/AppContext';

const AISelector = () => {
    const { selectedAI, switchAI } = useAppContext();
    const [showAll, setShowAll] = useState(false);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.aiItem} onPress={() => switchAI(item)}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={[styles.name, selectedAI.id === item.id && styles.selectedName]}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>选择AI助手</Text>
            <FlatList
                data={showAll ? aiList : aiList.slice(0, 3)}  // 默认展示3个，展开显示全部
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={styles.list}
            />
            <TouchableOpacity onPress={() => setShowAll(!showAll)}>
                <Text style={styles.toggle}>{showAll ? '收起更多AI' : '显示更多AI'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: '#1e1e1e',
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    },
    list: {
        marginBottom: 5,
    },
    aiItem: {
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    icon: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    name: {
        color: '#ccc',
        fontSize: 12,
        marginTop: 4,
    },
    selectedName: {
        color: '#4caf50',
        fontWeight: 'bold',
    },
    toggle: {
        color: '#4caf50',
        textAlign: 'center',
        fontSize: 14,
        marginTop: 5,
    },
});

export default AISelector;
