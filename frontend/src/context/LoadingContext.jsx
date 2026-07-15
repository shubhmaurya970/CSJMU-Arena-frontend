import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();



export function LoadingProvider({ children }) {

    

    const [isLoading, setIsLoading] = useState(false);

    const [loadingMessage, setLoadingMessage] = useState(
        "Preparing your experience..."
    );

    const showLoader = (
        message = "Preparing your experience..."
    ) => {

        setLoadingMessage(message);

        setIsLoading(true);

    };

    const hideLoader = () => {

        setIsLoading(false);

    };
    const hideLoaderAfter = (delay = 150) => {

    setTimeout(() => {

        setIsLoading(false);

    }, delay);

};

    return (

        <LoadingContext.Provider
            value={{
    isLoading,
    loadingMessage,
    showLoader,
    hideLoader,
    hideLoaderAfter,
}}
        >

            {children}

        </LoadingContext.Provider>

    );

}

export function useLoading() {

    const context = useContext(LoadingContext);

    if (!context) {

        throw new Error(
            "useLoading must be used inside LoadingProvider"
        );

    }

    return context;

}