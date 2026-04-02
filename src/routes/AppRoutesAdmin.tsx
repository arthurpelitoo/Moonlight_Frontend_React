import { Route } from "react-router-dom";
import { ProtectedRoute } from "./authroutes/ProtectedRoute";
import { AdminLayout } from "../components/layout/Admin/AdminLayout";
import { AdminMainPage } from "../pages/Admin/AdminMainPage";

export const AppRoutesAdmin = (
    <Route element={
        <ProtectedRoute adminOnly>
            <AdminLayout/>
        </ProtectedRoute>
    }>
        

        {/* rota só para admin */}
        <Route path="/admin" element={
            <ProtectedRoute adminOnly>
                <AdminMainPage />
            </ProtectedRoute>
        } />
    </Route>
)
