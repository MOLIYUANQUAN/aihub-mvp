import React from 'react';
import { AppProvider } from './hooks/AppContext';
import MainLayout from './navigation/MainLayout';

export default function App() {
    return (
        <AppProvider>
            <MainLayout />
        </AppProvider>
    );
}
