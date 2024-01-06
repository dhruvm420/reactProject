import Letter from "../components/letter";

export default function MiniAppLetter() {
  const userData = JSON.parse(localStorage.getItem("userKaData"));
  if (userData["fatherName"]) userData.sonOf = userData["fatherName"];
  return <Letter data={userData} />;
}
