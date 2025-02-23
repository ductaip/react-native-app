import { getCurrentUser } from "@/lib/appwrite";
import React, { createContext, useContext, useEffect, useState } from "react";

interface GlobalContextInterface {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,

    user: any,
    setUser: React.Dispatch<React.SetStateAction<any>>,

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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then((res: any) => {
                if(res) {
                    setIsLoggedIn(true)
                    setUser(res)
                } else {
                    setIsLoggedIn(false)
                    setUser(null)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, isLoading, setIsLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider