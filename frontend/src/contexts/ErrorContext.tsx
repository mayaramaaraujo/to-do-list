import React from "react";

export const ErrorContext = React.createContext<{
    handleError: {error: boolean, message: string}; 
    setHandleError: React.Dispatch<React.SetStateAction<{error: boolean, message: string}>>} | null>(null);