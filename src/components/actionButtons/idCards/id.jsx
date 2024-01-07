import IDCard from "./idCard";
import MemberId from "./memberID";
import { useParams } from "react-router-dom";
export default function Id() {
  const { listName, userId } = useParams();
  if (listName == "member")
    return <MemberId userId={userId} listName={listName} />;
  return <IDCard userId={userId} listName={listName} />;
}
