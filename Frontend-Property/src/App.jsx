import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Register/Login";
import SignUp from "./Components/Register/SignUp";
import RoutesSection from "./Components/RoutesSection";

export default function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RoutesSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


