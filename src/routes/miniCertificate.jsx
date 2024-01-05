import MakeCertificate from "../components/makeCertificate";

export default function MiniCertificate() {
  const userData = JSON.parse(localStorage.getItem("userKaData"));
  return <MakeCertificate data={userData} />;
}
