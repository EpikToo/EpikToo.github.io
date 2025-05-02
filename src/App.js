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

const TASKBAR_HEIGHT = 40; // Définir explicitement la hauteur de la taskbar

const AppContent = () => {
    const { t } = useTranslation();
    const [isBooting, setIsBooting] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
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
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });

            const isMobileDevice = window.innerWidth < 768 ||
                (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    && navigator.maxTouchPoints > 0);

            setIsMobile(isMobileDevice);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
        if (isMobile) {
            return { x: 0, y: 0 };
        }

        const positions = [
            { x: 50, y: 50 },
            { x: 120, y: 40 },
            { x: 180, y: 100 },
            { x: 80, y: 120 }
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
            // Calculer la hauteur disponible exacte en soustrayant la hauteur de la taskbar
            const availableHeight = windowDimensions.height - TASKBAR_HEIGHT;

            return {
                width: windowDimensions.width,
                height: availableHeight
            };
        }

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

    // Calculer explicitement la hauteur disponible pour le contenu principal
    const mainHeight = windowDimensions.height - TASKBAR_HEIGHT;

    return (
        <div className="h-screen flex flex-col overflow-hidden bg-win98-desktop cursor-win98-default">
            {/* Définir une hauteur fixe pour le contenu principal, exactement égale à la hauteur de l'écran moins la taskbar */}
            <main
                className="relative"
                style={{
                    height: `${mainHeight}px`,
                    overflow: 'hidden',
                    flexShrink: 0
                }}
            >
                {windows.terminal.isOpen && (
                    <Window
                        title={t('windows.terminal.title')}
                        onClose={() => handleClose('terminal')}
                        onMinimize={() => handleMinimize('terminal')}
                        isMinimized={windows.terminal.isMinimized}
                        defaultPosition={getWindowPosition(0)}
                        defaultSize={getWindowSize('terminal')}
                        className={`win98-window ${windows.terminal.isActive ? 'active' : ''}`}
                        parentHeight={mainHeight}
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
                        className={`win98-window ${windows.about.isActive ? 'active' : ''}`}
                        parentHeight={mainHeight}
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
                        className={`win98-window ${windows.projects.isActive ? 'active' : ''}`}
                        parentHeight={mainHeight}
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
                        className={`win98-window ${windows.experience.isActive ? 'active' : ''}`}
                        parentHeight={mainHeight}
                    >
                        <ExperienceWindow />
                    </Window>
                )}
            </main>

            <Taskbar
                windows={windows}
                onWindowClick={handleTaskbarClick}
                onStartMenuSelect={handleStartMenuClick}
                style={{ height: `${TASKBAR_HEIGHT}px`, flexShrink: 0 }}
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