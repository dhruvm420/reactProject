import Letter from "../components/letter";

export default function MiniAppLetter() {
  const userData = JSON.parse(localStorage.getItem("userKaData"));
  return <Letter data={userData} />;
}
