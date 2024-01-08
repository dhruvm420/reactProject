import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { getCorrectDate } from "./date";
export default function MiniTable({ data }) {
  const headers = Object.keys(data);
  let rows = headers.map((header, index) => {
    if (
      header == "profilePictureLink" ||
      header == "idProofPictureLink" ||
      header == "aadharPictureLink" ||
      header == "profilePictureLink" ||
      header == "isVerified" ||
      header == "panCardPictureLink" ||
      header == "idProofType" ||
      header == "_id" ||
      header == "stateResiding" ||
      header == "cityResiding" ||
      header == "stateReferenceId" ||
      header == "districtReferenceId" ||
      header == "isActivated" ||
      header == "tehsilReferenceId" ||
      header == "__v" ||
      header == "panchayatReferenceId"
    )
      return <></>;
    else if (header == "DOB" || header == "joiningDate")
      return (
        <>
          <Tr
            key={index}
            bg="white"
            fontSize={["12", "14", "18"]}
            _hover={{
              bg: "gray.200",
            }}
          >
            <Td>{header}</Td>
            <Td>{getCorrectDate(data[header])}</Td>
          </Tr>
        </>
      );
    return (
      <Tr
        key={index}
        bg="white"
        fontSize={["12", "14", "18"]}
        _hover={{
          bg: "gray.200",
        }}
      >
        <Td>{header}</Td>
        <Td w="1">{data[header]}</Td>
      </Tr>
    );
  });
  return (
    <Table variant="simple">
      <Tbody>{rows}</Tbody>
    </Table>
  );
}
