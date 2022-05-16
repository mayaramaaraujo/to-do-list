import React from "react";

export const SuccessContext = React.createContext<{
    handleSuccess: {success: boolean, message: string}; 
    setHandleSuccess: React.Dispatch<React.SetStateAction<{success: boolean, message: string}>>} | null>(null);