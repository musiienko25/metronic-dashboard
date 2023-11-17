import { Route, Routes } from "react-router-dom";
import { Registration } from "./components/Registration";
import { ForgotPassword } from "./components/ForgotPassword";
import { Login } from "./components/Login";

const AuthPage = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route path="registration" element={<Registration />} />
    <Route path="forgot-password" element={<ForgotPassword />} />
    <Route index element={<Login />} />
  </Routes>
);

export { AuthPage };
