import React, { createContext, useContext, useState, useCallback } from 'react';

const WindowManagerContext = createContext(null);

export const WindowManagerProvider = ({ children }) => {
    const [windows, setWindows] = useState([]);
    const [nextZIndex, setNextZIndex] = useState(10);

    const registerWindow = useCallback((id) => {
        setWindows(prev => [...prev, { id, zIndex: nextZIndex }]);
        setNextZIndex(prev => prev + 1);
        return nextZIndex;
    }, [nextZIndex]);

    const unregisterWindow = useCallback((id) => {
        setWindows(prev => prev.filter(w => w.id !== id));
    }, []);

    const bringToFront = useCallback((id) => {
        setWindows(prev => {
            const newWindows = prev.filter(w => w.id !== id);
            const newZIndex = nextZIndex + 5;
            setNextZIndex(newZIndex + 1);
            return [...newWindows, { id, zIndex: Math.min(newZIndex, 900) }];
        });
        return Math.min(nextZIndex + 5, 900);
    }, [nextZIndex]);

    return (
        <WindowManagerContext.Provider value={{
            registerWindow,
            unregisterWindow,
            bringToFront
        }}>
            {children}
        </WindowManagerContext.Provider>
    );
};

export const useWindowManager = () => {
    const context = useContext(WindowManagerContext);
    if (!context) {
        throw new Error('useWindowManager doit être utilisé dans un WindowManagerProvider');
    }
    return context;
};