import {createContext, useContext, useEffect, useState } from "react"


//1.5) CREATE A CONTEXT FIRST

export const ThemeContext = createContext('light')

// 2) Write out our provider - this provider will hold any state information or functions ect. 
// Using children in our theme provider parameters will allows use to warp the rest of our application in this providers.

export function ThemeProvider({children}) {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
       if (theme === 'dark') {
        document.documentElement.classList.add('dark') 
       } else {
        document.documentElement.classList.remove('dark') 
       }
    }, [])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark': 'light')
    }

    // We're always going return whatever context we made before. They will always have this provider property
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// 3) We dont have to do this but why not 
// create a custom hook. 

export const useTheme = () => {
    const context = useContext(ThemeContext)
    // just incase this is being used somewhere without access to this provider.
    if (!context) {
        throw new Error('useTheme must be used with a ThemeProvider child')
    }
    return context
}





// export function Button({chidlren}) {
//     return <button>{chidlren}</button>
// }


// export function AppExample() {
//     return (
//         <div>
//             <Button>
//                 <h2>Hello!</h2>   
//                 <div></div>
//                 <ButtonTwo />
//             </Button>
//         </div>
//     )
// }