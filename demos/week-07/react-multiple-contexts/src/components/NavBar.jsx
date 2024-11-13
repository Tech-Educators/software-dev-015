// import { useTheme } from "../context/ThemeContext";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function NavBar() {
    
    // const {theme, toggleTheme} = useTheme()

    const {language, toggleLanguage} = useLanguage()
    const {theme, toggleTheme} = useContext(ThemeContext)


    return (
        <nav style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My context app</h1>
                <div>
                    <button style={{ marginRight: '1rem' }} onClick={toggleTheme}>
                        Switch to {theme === 'light' ? 'dark' : 'light'} mode
                    </button>
                    <button onClick={toggleLanguage}>
                        Switch to {language === 'en' ? 'Spanish' : 'English'}
                    </button>
                </div>
            </div>
            <p>Current Language: {language}</p>
        </nav>
    );
}
