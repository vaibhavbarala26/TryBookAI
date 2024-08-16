import { createContext, useEffect, useState } from "react";

const themeContext = createContext();
const getTheme = ()=>{
    const theme = localStorage.getItem("theme");
    if(!theme){
        localStorage.setItem("theme" , "dark");
        return "dark";
    }
    else{
        return theme;
    }
};
const ThemeProvider = ({children})=>{
    const [theme , setTheme] = useState(getTheme);
    const toogleTheme =()=>{
        if(theme === 'dark'){
            setTheme("light");
            console.log(theme);
        }
       else{
        setTheme('dark');
       }
    };
    useEffect(()=>{
        const refreshTheme=()=>{
            localStorage.setItem("theme" , theme);
        };
        refreshTheme();

    } , [theme])
return (
    <themeContext.Provider
    value={{
        theme, 
        setTheme,
        toogleTheme,
    }}>
        {children}
    </themeContext.Provider>
)

}
export {themeContext , ThemeProvider}