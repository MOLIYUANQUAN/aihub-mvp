import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SideMenu = ({ visible, onClose }) => (
    <Modal
        visible={visible}
        animationType="slide"
        transparent
        onRequestClose={onClose}
    >
        <View style={styles.overlay}>
            <View style={styles.menu}>
                <Text style={styles.title}>个人中心</Text>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.close}>关闭</Text>
                </TouchableOpacity>
                {/* 未来在这里加用户头像、昵称、历史记录等 */}
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-start',
    },
    menu: {
        width: 250,
        height: '100%',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    close: {
        color: 'blue',
    },
});

export default SideMenu;
