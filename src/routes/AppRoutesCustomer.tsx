import { Route } from "react-router-dom";
import { CustomerLayout } from "../components/layout/Customer/CustomerLayout";
import MainPage from "../pages/Home/MainPage";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import { ProtectedRoute } from "./authroutes/ProtectedRoute";
import ProfilePage from "../pages/User/Profile/ProfilePage";

export const AppRoutesCustomer = ( 
    <Route element={<CustomerLayout/>}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* rotas protegidas */}
        <Route path="/profile" element={
            <ProtectedRoute>
                <ProfilePage />
            </ProtectedRoute>
        } />

        {/* <Route path="/orders" element={
            <ProtectedRoute>
                <OrdersPage />
            </ProtectedRoute>
        } /> */}
    </Route>
)
