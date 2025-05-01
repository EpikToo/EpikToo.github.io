import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import './win98.css';
import './mobile.css';
import Window from './components/Window/Window';
import Terminal from './components/Terminal/Terminal';
import AboutWindow from './components/AboutWindow/AboutWindow';
import ProjectsWindow from './components/ProjectsWindow/ProjectsWindow';
import ExperienceWindow from './components/ExperienceWindow/ExperienceWindow';
import Taskbar from './components/Taskbar/Taskbar';
import BootAnimation from './components/BootAnimation/BootAnimation';
import { WindowManagerProvider } from './contexts/WindowManager';

const AppContent = () => {
    const { t } = useTranslation();
    const [isBooting, setIsBooting] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [windows, setWindows] = useState({
        terminal: {
            isOpen: false,
            isMinimized: false,
            isActive: false,
            title: t('windows.terminal.title')
        },
        about: {
            isOpen: true,
            isMinimized: false,
            isActive: true,
            title: t('windows.about.title')
        },
        projects: {
            isOpen: false,
            isMinimized: false,
            isActive: false,
            title: t('windows.projects.title')
        },
        experience: {
            isOpen: false,
            isMinimized: false,
            isActive: false,
            title: t('windows.experience.title')
        }
    });

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleBootComplete = () => {
        setIsBooting(false);
    };

    const handleTaskbarClick = (windowId) => {
        setWindows(prev => {
            const newWindows = { ...prev };

            if (newWindows[windowId].isMinimized) {
                Object.keys(newWindows).forEach(key => {
                    newWindows[key].isActive = false;
                });

                newWindows[windowId] = {
                    ...newWindows[windowId],
                    isMinimized: false,
                    isActive: true
                };
            }
            else if (newWindows[windowId].isActive) {
                newWindows[windowId] = {
                    ...newWindows[windowId],
                    isMinimized: true,
                    isActive: false
                };
            }
            else {
                Object.keys(newWindows).forEach(key => {
                    newWindows[key].isActive = false;
                });

                newWindows[windowId] = {
                    ...newWindows[windowId],
                    isActive: true
                };
            }

            return newWindows;
        });
    };

    const handleTerminalCommand = (command) => {
        setWindows(prev => {
            const newWindows = { ...prev };

            Object.keys(newWindows).forEach(key => {
                newWindows[key].isActive = false;
            });

            if (newWindows[command]) {
                newWindows[command] = {
                    ...newWindows[command],
                    isOpen: true,
                    isMinimized: false,
                    isActive: true
                };
            }

            return newWindows;
        });
    };

    const handleStartMenuClick = (windowId) => {
        setWindows(prev => {
            const newWindows = { ...prev };

            // On mobile, close all other windows to avoid clutter
            if (isMobile) {
                Object.keys(newWindows).forEach(key => {
                    if (key !== windowId) {
                        newWindows[key].isOpen = false;
                    }
                    newWindows[key].isActive = false;
                });
            } else {
                Object.keys(newWindows).forEach(key => {
                    newWindows[key].isActive = false;
                });
            }

            newWindows[windowId] = {
                ...newWindows[windowId],
                isOpen: true,
                isMinimized: false,
                isActive: true
            };

            return newWindows;
        });
    };

    const handleMinimize = (windowId) => {
        setWindows(prev => ({
            ...prev,
            [windowId]: {
                ...prev[windowId],
                isMinimized: true,
                isActive: false
            }
        }));
    };

    const handleClose = (windowId) => {
        setWindows(prev => ({
            ...prev,
            [windowId]: {
                ...prev[windowId],
                isOpen: false,
                isMinimized: false,
                isActive: false
            }
        }));
    };

    const getWindowPosition = (index) => {
        // For mobile, position windows at top
        if (isMobile) {
            return { x: 0, y: 0 };
        }

        const positions = [
            { x: 50, y: 50 },    // Terminal
            { x: 120, y: 40 },   // About
            { x: 180, y: 100 },  // Projects
            { x: 80, y: 120 }    // Experience
        ];

        if (index < positions.length) {
            return positions[index];
        }

        const randomX = Math.floor(Math.random() * 200) + 50;
        const randomY = Math.floor(Math.random() * 150) + 50;

        return { x: randomX, y: randomY };
    };

    const getWindowSize = (windowId) => {
        if (isMobile) {
            // Get screen dimensions and return appropriate size for fullscreen
            const width = window.innerWidth;
            // Subtract taskbar (40px) and a small amount for padding at bottom (8px)
            const height = window.innerHeight - 48;
            return { width, height };
        }

        // Default sizes for desktop
        const sizes = {
            terminal: { width: 600, height: 400 },
            about: { width: 750, height: 550 },
            projects: { width: 700, height: 550 },
            experience: { width: 700, height: 500 }
        };

        return sizes[windowId] || { width: 600, height: 400 };
    };

    if (isBooting) {
        return <BootAnimation onBootComplete={handleBootComplete} />;
    }

    return (
        <div className="h-screen flex flex-col overflow-hidden bg-win98-desktop cursor-win98-default">
            <main className="flex-1 relative">
                {windows.terminal.isOpen && (
                    <Window
                        title={t('windows.terminal.title')}
                        onClose={() => handleClose('terminal')}
                        onMinimize={() => handleMinimize('terminal')}
                        isMinimized={windows.terminal.isMinimized}
                        defaultPosition={getWindowPosition(0)}
                        defaultSize={getWindowSize('terminal')}
                        className="win98-window"
                    >
                        <Terminal onCommandExecuted={handleTerminalCommand} />
                    </Window>
                )}

                {windows.about.isOpen && (
                    <Window
                        title={t('windows.about.title')}
                        onClose={() => handleClose('about')}
                        onMinimize={() => handleMinimize('about')}
                        isMinimized={windows.about.isMinimized}
                        defaultPosition={getWindowPosition(1)}
                        defaultSize={getWindowSize('about')}
                        className="win98-window"
                    >
                        <AboutWindow />
                    </Window>
                )}

                {windows.projects.isOpen && (
                    <Window
                        title={t('windows.projects.title')}
                        onClose={() => handleClose('projects')}
                        onMinimize={() => handleMinimize('projects')}
                        isMinimized={windows.projects.isMinimized}
                        defaultPosition={getWindowPosition(2)}
                        defaultSize={getWindowSize('projects')}
                        className="win98-window"
                    >
                        <ProjectsWindow />
                    </Window>
                )}

                {windows.experience.isOpen && (
                    <Window
                        title={t('windows.experience.title')}
                        onClose={() => handleClose('experience')}
                        onMinimize={() => handleMinimize('experience')}
                        isMinimized={windows.experience.isMinimized}
                        defaultPosition={getWindowPosition(3)}
                        defaultSize={getWindowSize('experience')}
                        className="win98-window"
                    >
                        <ExperienceWindow />
                    </Window>
                )}
            </main>

            <Taskbar
                windows={windows}
                onWindowClick={handleTaskbarClick}
                onStartMenuSelect={handleStartMenuClick}
            />
        </div>
    );
};

function App() {
    return (
        <WindowManagerProvider>
            <AppContent />
        </WindowManagerProvider>
    );
}

export default App;