import { useNavigate } from "react-router-dom";
import { setAuthToken, axiosInstance } from "../components/axiosInstance.jsx";
import { useEffect } from "react";
export default function LogOut() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("myValues");
    setAuthToken(null);
    navigate("/");
  }, []);
}
