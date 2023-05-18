import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../contexts";
import { AuthContextInterface } from "../types";

interface PropsInterface {
    route: string;
    protectedElement: React.ReactNode;
    unProtectedElement: React.ReactNode;
}

export const ConditionalRoute = ({
    route,
    protectedElement,
    unProtectedElement,
}: PropsInterface) => {
    const authContext = useContext(AuthContext) as AuthContextInterface;
    const { currentUser } = authContext;

    return (
        <Route
            path={route}
            element={
                currentUser !== null ? protectedElement : unProtectedElement
            }
        />
    );
};
