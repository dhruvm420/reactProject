import { useParams } from "react-router-dom";
import MakeCertificate from "../components/makeCertificate";
import MemberCertificate from "../components/membCertificate";

export default function MiniCertificate() {
  const userData = JSON.parse(localStorage.getItem("userKaData"));
  const {type} = useParams();
  if(type == "member")  return <MemberCertificate data= {userData} />
  return <MakeCertificate data={userData} type = {type} />;
}
