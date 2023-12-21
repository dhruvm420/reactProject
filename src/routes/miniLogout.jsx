import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setAuthToken } from "../components/axiosInstance";
export default function MiniLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("name");
    localStorage.removeItem("DOB");
    localStorage.removeItem("aadharNumber");
    localStorage.removeItem("joiningDate");
    localStorage.removeItem("mobileNumber");
    localStorage.removeItem("designation");
    localStorage.removeItem("profilePictureLink");
    setAuthToken(null);
    navigate("/");
  }, []);
}
