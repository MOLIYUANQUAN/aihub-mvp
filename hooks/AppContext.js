import React, { createContext, useContext, useState } from 'react';

// 初始化上下文
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedAI, setSelectedAI] = useState({
        id: 'gpt4o',
        name: 'ChatGPT-4o',
        version: '4o',
        description: '最强大的多模态AI',
    });

    const [chatHistories, setChatHistories] = useState({
        gpt4o: [],
        claude3: [],
        deepseekV1: []
    });

    const switchAI = (ai) => {
        setSelectedAI(ai);
    };

    const addMessageToHistory = (aiId, message) => {
        setChatHistories((prev) => {
            const updatedHistory = { ...prev };
            if (!updatedHistory[aiId]) {
                updatedHistory[aiId] = [];
            }
            updatedHistory[aiId].push(message);
            return updatedHistory;
        });
    };

    return (
        <AppContext.Provider value={{ selectedAI, switchAI, chatHistories, addMessageToHistory }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
