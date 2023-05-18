import { Route, Routes } from "react-router-dom";
import { ConditionalRoute } from "./components";
import { Dashboard, Landing, LogIn, SignUp } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ConditionalRoute
                            protectedElement={<Dashboard />}
                            unProtectedElement={<Landing />}
                        />
                    }
                />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;
