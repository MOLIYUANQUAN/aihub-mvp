import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ProfileScreen = () => {
    const handleLogout = () => {
        Alert.alert('提示', '暂未实现账号系统，这里未来可以接入登录/登出功能。');
    };

    const handleRecharge = () => {
        Alert.alert('提示', '暂未接入充值功能，未来对接微信支付/支付宝/Stripe。');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>个人中心</Text>
            
            <View style={styles.infoCard}>
                <Text style={styles.infoText}>用户名：普通用户</Text>
                <Text style={styles.infoText}>会员状态：普通用户</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRecharge}>
                <Text style={styles.buttonText}>充值会员</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>退出登录</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    header: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoCard: {
        backgroundColor: '#1e1e1e',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    infoText: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#4caf50',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProfileScreen;
