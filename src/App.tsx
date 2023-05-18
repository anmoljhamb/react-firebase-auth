import { Routes } from "react-router-dom";
import { ConditionalRoute } from "./components";
import { Dashboard, Landing } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <ConditionalRoute
                    route="/"
                    protectedElement={<Dashboard />}
                    unProtectedElement={<Landing />}
                />
            </Routes>
        </>
    );
}

export default App;
