import React, { createContext, useContext, useEffect, useState } from "react";

interface GlobalContextInterface {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,

    user: null | any,
    setUser: React.Dispatch<React.SetStateAction<null | any>>,

    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const initialGlobalContext =  {
    isLoggedIn: false,
    setIsLoggedIn: () => {},

    user: null,
    setUser: () => {},

    isLoading: true,
    setIsLoading: () => {}
}

const GlobalContext = createContext<GlobalContextInterface>(initialGlobalContext)

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({children}: {children: React.ReactNode}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialGlobalContext.isLoggedIn)
    const [user, setUser] = useState(initialGlobalContext.user)
    const [isLoading, setIsLoading] = useState(initialGlobalContext.isLoading)

    useEffect(() => {
        
    }, [])

    return (
        <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, isLoading, setIsLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}