import { AuthProvider } from "./context/AuthProvider";
import { OperationProvider } from "./context/OperationProvider";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
    return (
        <AuthProvider>
            <OperationProvider>
                <AppRouter />
            </OperationProvider>
        </AuthProvider>
    )
}
