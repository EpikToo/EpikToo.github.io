import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const checkMobile = () => {
            const isMobileDevice = window.innerWidth < 768 ||
                (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    && navigator.maxTouchPoints > 0);
            setIsMobile(isMobileDevice);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const buttonStyles = {
        height: isMobile ? '20px' : '24px',
        padding: isMobile ? '0 4px' : '0 8px',
        fontSize: isMobile ? '10px' : 'inherit',
        minHeight: isMobile ? '20px' : '24px'
    };

    return (
        <div ref={menuRef} className="relative">
            <button
                className={`flex items-center gap-1 text-xs whitespace-nowrap
                    ${isOpen ? 'shadow-win98-btn-pressed' : 'shadow-win98-btn hover:shadow-win98-btn-pressed'}`}
                style={buttonStyles}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change language"
            >
                {i18n.language.toUpperCase()}
            </button>

            {isOpen && (
                <div className="absolute bottom-full right-0 mb-1 w-32 bg-win98-button-face border-2 border-white language-selector-dropdown">
                    <div className="border-2 border-win98-window-border-dark">
                        <div className="py-1">
                            <button
                                className="w-full px-2 py-1 text-left text-xs hover:bg-win98-window-title hover:text-white"
                                onClick={() => changeLanguage('fr')}
                            >
                                {t('language.fr')}
                            </button>
                            <button
                                className="w-full px-2 py-1 text-left text-xs hover:bg-win98-window-title hover:text-white"
                                onClick={() => changeLanguage('en')}
                            >
                                {t('language.en')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;