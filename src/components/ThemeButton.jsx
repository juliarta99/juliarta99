import Cookies from "js-cookie"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const darkCookie = Cookies.get('darkMode');
        if(darkCookie == '1') {
            setDarkMode(true);
        }
    }, [])

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
      
        Cookies.set('darkMode', darkMode ? '1' : '', { secure: true, expires: 365 });
    }, [darkMode])

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <button onClick={toggleTheme} className="cursor-pointer flex p-2 items-center rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                {darkMode ? 
                    (<FontAwesomeIcon icon={faSun} className="text-slate-300 w-5 h-5"></FontAwesomeIcon>) 
                    : (<FontAwesomeIcon icon={faMoon} className="w-5 h-5"></FontAwesomeIcon>)
                }
            </button>
        </>
    ) 
}

export default ThemeButton