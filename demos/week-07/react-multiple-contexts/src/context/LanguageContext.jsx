import { createContext, useState, useContext } from "react";


const LanguageContext = createContext(null)


export function LanguageProvider ({children}) {
    const [language, setLanguage] = useState('en')

    function toggleLanguage() {
        setLanguage(prev => prev === 'en' ? 'es' : 'en')
    }

    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}


// 4) create my own hook 

export const useLanguage = () => {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error('Use this in a child to the language provider or else! ')
    }
    return context
}