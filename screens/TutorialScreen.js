import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const tutorials = [
    { id: '1', title: '用ChatGPT写自媒体文章月入过万', content: '详细步骤：选题、写稿、润色、发布、引流。' },
    { id: '2', title: '用Claude-3做PPT代做服务', content: '接单平台+模板+AI生成内容，快速交付高质量PPT。' },
    { id: '3', title: 'DeepSeek做英文论文润色', content: '接留学生论文润色单，DeepSeek快速完成，附润色报告。' },
];

const TutorialScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>AI 赚钱教程</Text>
            <FlatList
                data={tutorials}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 10,
    },
    header: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#1e1e1e',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    content: {
        color: '#bbb',
        fontSize: 14,
    },
});

export default TutorialScreen;
