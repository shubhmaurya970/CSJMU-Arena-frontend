import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {

    const [isVisible, setIsVisible] = useState(false);

    const [toast, setToast] = useState({
        title: "",
        message: "",
        type: "success",
    });

   const showToast = (

    title,

    message,

    type = "success"

) => {

    setToast({

        title,

        message,

        type,

    });

    setIsVisible(true);

    setTimeout(() => {

        setIsVisible(false);

    }, 4000);

};

    const hideToast = () => {

        setIsVisible(false);

    };

    return (

        <ToastContext.Provider
            value={{
                isVisible,
                toast,
                showToast,
                hideToast,
            }}
        >

            {children}

        </ToastContext.Provider>

    );

}

export function useToast() {

    const context = useContext(ToastContext);

    if (!context) {

        throw new Error(
            "useToast must be used inside ToastProvider"
        );

    }

    return context;

}