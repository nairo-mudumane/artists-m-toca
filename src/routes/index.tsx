import { Route, Routes } from "react-router-dom";
import { ForgotPassword, Login, Overview, SignUp } from "../pages";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/new" element={<SignUp />} />
    </Routes>
  );
}
