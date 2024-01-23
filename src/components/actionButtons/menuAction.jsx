import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TableGenerator from "../tableGenerator";
import { getCorrectDate } from "../../utilities/date";
import { axiosInstance, setAuthToken } from "../../utilities/axiosInstance";
import { baseUrl } from "../../utilities/baseURL";
export default function MenuAction({
  isOpen,
  closeHandler,
  modifyId,
  setIsOpen,
  formName,
}) {
  const [childData, setChildData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  let childLevel;
  if (formName === "state") childLevel = "district";
  else if (formName === "district") childLevel = "tehsil";
  else if (formName == "tehsil") childLevel = "panchayat";
  else childLevel = "member";
  function putinDummy(obj, d) {
    let dataItem = {};
    dataItem["USER ID"] = obj["userName"];
    dataItem.IMAGE =
      `${baseUrl}/` + obj["profilePictureLink"];
    dataItem.NAME = obj.name;
    dataItem.EMAIL = obj["email"];
    if (childLevel == "state")
      dataItem["Total District"] = obj["totalDistrict"];
    if (childLevel == "district") dataItem["Total Tehsil"] = obj["totalTehsil"];
    if (childLevel == "tehsil")
      dataItem["Total Panchayat"] = obj["totalPanchayat"];
    dataItem.DESIGNATION = obj["designation"];
    dataItem.DOB = getCorrectDate(obj["DOB"]);
    if (obj.joiningDate) dataItem.DATE = getCorrectDate(obj["joiningDate"]);
    d.push(dataItem);
  }
  const fetchList = async (listName) => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token

    // Set the token in the Axios headers before making the request
    setAuthToken(storedToken);
    // Make an authenticated request using axiosInstance
    let url = `/superadmin/crud/${childLevel}?${formName}ReferenceId=${modifyId}`;
    if (childLevel == "member")
      url = `/superadmin/crud/${childLevel}/?panchayatRefrenceId=${modifyId}`;
    console.log("url ", url);
    await axiosInstance
      .get(url)
      .then((response) => {
        console.log(response.data.data);
        let obj = response.data.data.response;
        let arr = Object.keys(obj);
        let dumm = [];
        arr.forEach((element) => {
          putinDummy(obj[element], dumm);
        });
        setChildData(dumm);
        setDataLoaded(true);
      })
      .catch((error) => {
        // Handle error, e.g., unauthorized access
        console.error(`Error fetching ${listName} data:`, error);
        setChildData([
          {
            "USER ID": null,
            IMAGE: null,
            NAME: null,
            EMAIL: null,
            DESIGNATION: null,
            DATE: null,
          },
        ]);
        setDataLoaded(true);
      });
  };
  useEffect(() => {
    setDataLoaded(false);
    console.log("fetching child Data");
    fetchList(formName);
  }, [isOpen]);
  if (!dataLoaded) return <>Loading....</>;
  return (
    <>
      <Modal
        size="8xl"
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={closeHandler}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{childLevel}s under him/her</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableGenerator
              data={childData}
              title={childLevel}
              setIsOpen={() => {}}
              setAction={() => {}}
              setId={() => {}}
              actionItems={[]}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeHandler}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
