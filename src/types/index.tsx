import { User, UserCredential } from "firebase/auth";

export interface AuthContextInterface {
    currentUser: User | null;
    signUp(email: string, password: string): Promise<UserCredential>;
    logIn(email: string, password: string): Promise<UserCredential>;
    logOut(): Promise<void>;
    forgotPassword(email: string): Promise<void>;
}
