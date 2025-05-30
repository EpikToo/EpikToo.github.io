import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TerminalIcon, AboutIcon, ProjectsIcon, ExperienceIcon } from '../icons/Win98Icons';

const MenuItem = ({ title, onClick, className = "", icon }) => {
    const getIcon = () => {
        if (icon) return icon;

        switch (title) {
            case 'Terminal':
                return <TerminalIcon />;
            case 'À propos':
            case 'About':
                return <AboutIcon />;
            case 'Projets':
            case 'Projects':
                return <ProjectsIcon />;
            case 'Expérience':
            case 'Experience':
                return <ExperienceIcon />;
            default:
                return <TerminalIcon />;
        }
    };

    return (
        <button
            className={`w-full px-2 py-2 flex items-center gap-2 hover:bg-win98-window-title hover:text-white
                text-left text-xs md:text-sm ${className} touch-manipulation`}
            onClick={onClick}
        >
            <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                {getIcon()}
            </div>
            <span className="truncate">{title}</span>
        </button>
    );
};

const CloseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" className="inline-block">
        <path d="M2,2 L14,14 M2,14 L14,2" stroke="black" strokeWidth="1.5"/>
    </svg>
);

const StartMenu = ({ isOpen, onClose, windows, onWindowSelect }) => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const isMobileDevice = window.innerWidth < 768 ||
                (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    && navigator.maxTouchPoints > 0);
            setIsMobile(isMobileDevice);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isOpen) return null;

    const handleCloseClick = () => {
        window.open('', '_self').close();
        setTimeout(() => {
            window.location.href = 'about:blank';
            window.close();
        }, 100);
    };

    const mobileMenuStyle = {
        position: 'fixed',
        bottom: '40px',
        left: '1px',
        top: 'auto',
        zIndex: 9999,
        width: '160px',
        maxHeight: 'calc(100vh - 60px)',
        overflow: 'auto'
    };

    const desktopMenuStyle = {
        position: 'absolute',
        top: 'auto',
        zIndex: 9999,
        width: '240px',
        overflow: 'auto'
    };

    return (
        <div
            className="start-menu touch-manipulation"
            style={isMobile ? mobileMenuStyle : desktopMenuStyle}
        >
            <div className="bg-win98-taskbar border-2 border-white shadow-lg">
                <div className="border-2 border-win98-window-border-dark">
                    <div className="flex">
                        <div className="w-4 md:w-6 bg-win98-window-title h-full flex-shrink-0" />

                        <div className="flex-1 bg-win98-button-face">
                            {Object.entries(windows).map(([id, window]) => (
                                <MenuItem
                                    key={id}
                                    title={t(`windows.${id}.title`)}
                                    onClick={() => {
                                        onWindowSelect(id);
                                        onClose();
                                    }}
                                />
                            ))}

                            <div className="my-1 border-t border-win98-window-border-dark border-b border-white" />

                            <MenuItem
                                title={t('menu.close')}
                                className="font-bold"
                                onClick={handleCloseClick}
                                icon={<CloseIcon />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartMenu;