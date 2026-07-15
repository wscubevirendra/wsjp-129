import React, { createContext, useEffect, useState } from "react";

const storeContext = createContext();

export default function ThemeContext({ children }) {

    const [toggle, setToggle] = useState("light");


    useEffect(() => {
        const html = document.documentElement;

        if (toggle === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }

    }, [toggle]);


    const toggleHandler = () => {
        const theme = toggle === "light" ? "dark" : "light"
        setToggle(theme)
    };


    return (
        <storeContext.Provider
            value={{
                toggle,
                toggleHandler
            }}
        >
            {children}
        </storeContext.Provider>
    );
}


export { storeContext };