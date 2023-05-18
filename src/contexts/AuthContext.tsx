import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
    User,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { AuthContextInterface } from "../types";

interface PropsInterface {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: PropsInterface) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const forgotPassword = (email: string) => {
        return sendPasswordResetEmail(auth, email);
    };

    const logOut = () => {
        return signOut(auth);
    };

    return (
        <>
            <AuthContext.Provider
                value={{
                    currentUser,
                    signUp,
                    logIn,
                    forgotPassword,
                    logOut,
                }}
            >
                {!loading && children}
            </AuthContext.Provider>
        </>
    );
};
