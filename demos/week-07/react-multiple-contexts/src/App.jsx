import NavBar from "./components/NavBar";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
export default function App() {
  return (
    <div>
      <ThemeProvider>
        <LanguageProvider>
        <NavBar />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  )
}