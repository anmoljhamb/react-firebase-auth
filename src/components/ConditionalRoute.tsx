import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../contexts";
import { AuthContextInterface } from "../types";

interface PropsInterface {
    protectedElement: React.ReactNode;
    unProtectedElement: React.ReactNode;
}

export const ConditionalRoute = ({
    protectedElement,
    unProtectedElement,
}: PropsInterface) => {
    const authContext = useContext(AuthContext) as AuthContextInterface;
    const { currentUser } = authContext;

    if (currentUser) {
        return <>{protectedElement}</>;
    }

    return <>{unProtectedElement}</>;
};
