import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setAuthToken } from "../components/axiosInstance";
export default function MiniLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("userKaData");
    setAuthToken(null);
    navigate("/");
  }, []);
}
