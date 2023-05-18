import { Route, Routes } from "react-router-dom";
import { ConditionalRoute } from "./components";
import { Dashboard, Landing } from "./pages";

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
            </Routes>
        </>
    );
}

export default App;
