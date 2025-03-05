import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import AI_CONFIG from '../utils/aiConfig';

export default function AISelector({ currentAI, onSelectAI }) {
    return (
        <View style={styles.container}>
            {Object.keys(AI_CONFIG).map(key => {
                const ai = AI_CONFIG[key];
                return (
                    <TouchableOpacity key={key} style={styles.button} onPress={() => onSelectAI(key)}>
                        <Image source={ai.logo} style={styles.logo} />
                        <Text style={[styles.text, key === currentAI && styles.activeText]}>
                            {ai.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', padding: 10, backgroundColor: '#1e1e1e' },
    button: { flex: 1, alignItems: 'center', paddingVertical: 10 },
    logo: { width: 24, height: 24, marginBottom: 5 },
    text: { color: '#888' },
    activeText: { color: '#fff', fontWeight: 'bold' }
});
<Image source={ai.logo} style={{ width: 32, height: 32, borderRadius: 16 }} />
