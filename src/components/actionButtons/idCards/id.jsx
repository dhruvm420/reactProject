import IDCard from "./idCard";
import MemberId from "./memberID";
import { useState } from "react";
import { useParams } from "react-router-dom";
export default function Id() {
  const { listName, userId } = useParams();
  const [userData, setUserData] = useState(false);
  let dummyData;
  if (listName == "verified members")
    dummyData = {
      NAME: "RUPA BAI MARKAM",
      IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
      "Id No.": "0226",
      "Blood Group": "O+",
      Mobile: "8889906109",
      "Valid From": "01-Jun-2023",
      "Valid To": "01-Sep-2033",
      "S/D/W of": "MUKHIRAM MARKAM",
      DOB: "01-Jan-1971",
      Address:
        "VIL-CHILAMKHODRA PO.ODIYA KHURD TH.LOHARA, Kawardha , Chhattisgarh - 491995",
    };
  else
    dummyData = {
      NAME: "RUPA BAI MARKAM",
      IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
      "Id No.": "64fc24a1d4a6a",
      Designation: "state co.ordinator CG",
      DOB: "29-10-1991",
      Mobile: "9691658557",
      "Register Date": "26-Sep-2022",
      "S/D/W of": "SAHEB DAS MANIKPURI",
      Address:
        "vill.+post.odiya khurd tah.s/lohara dist.kabirdham, , Chhattisgarh",
    };
  function fetchData() {
    // according to listName & userId , set user Data
    if (userData != false) return;
    setUserData(dummyData);
  }
  fetchData();
  if (listName == "verified members") return <MemberId userData={userData} />;
  return <IDCard userData={userData} />;
}
