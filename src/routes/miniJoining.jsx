import { useParams } from "react-router-dom";
import JoinLetter from "../components/makeJoiningLetter";
export default function MiniJoinLetter() {
  const { type } = useParams();
  const userData = JSON.parse(localStorage.getItem("userKaData"));
  if (userData["fatherName"]) userData.sonOf = userData["fatherName"];
  return <JoinLetter data={userData} type={type} />;
}