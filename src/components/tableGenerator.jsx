import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  TableContainer,
} from "@chakra-ui/react";
import Action from "./action";
export default function TableGenerator({
  data,
  title,
  setIsOpen,
  parent,
  setAction,
  setId,
  actionItems,
}) {
  let name = title;
  let headers = Object.keys(data[0]);
  headers = headers.filter((element) => {
    return element != "USER ID";
  });

  let noData = data == null || data[0][headers[0]] == null;
  let rows;
  if (noData) {
    rows = (
      <Tr fontSize={["5", "9", "13"]}>
        <Td
          colSpan={actionItems.length ? headers.length + 1 : headers.length}
          textAlign="center"
        >
          No Registered {title} found
        </Td>
      </Tr>
    );
  } else {
    rows = data.map((dataItem, index) => (
      <Tr
        fontSize={["5", "9", "13"]}
        key={index}
        bg="white"
        _hover={{
          bg: "gray.200",
        }}
      >
        {headers.map((header, i) => (
          <Td key={i} px={["1", "1", "2"]}>
            {header === "IMAGE" || header === "TIMELINE POST" ? (
              title == "objective" ? (
                <img
                  crossorigin="anonymous"
                  src={dataItem[header]}
                  alt=""
                  width="150px"
                  height="150px"
                  p="0"
                />
              ) : title == "slider" ? (
                <img
                  crossorigin="anonymous"
                  src={dataItem[header]}
                  alt=""
                  width="350px"
                  height="350px"
                  p="0"
                />
              ) : (
                <img
                  crossorigin="anonymous"
                  src={dataItem[header]}
                  alt=""
                  className="profile-pic"
                  p="0"
                />
              )
            ) : (
              dataItem[header]
            )}
          </Td>
        ))}
        {actionItems.length > 0 && (
          <Td px={["1", "1", "2"]}>
            <Action
              name={title}
              parent={parent}
              id={dataItem["USER ID"]}
              setIsOpen={setIsOpen}
              setId={setId}
              setAction={setAction}
              items={actionItems}
            />
          </Td>
        )}
      </Tr>
    ));
  }

  return (
    <TableContainer
      border="1px"
      borderColor="gray.800"
      bg="white"
      borderRadius="xl"
      color="gray.500"
      overflowX="auto"
    >
      <Table variant="striped" colorScheme="white">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index} px={["1", "1", "2"]} fontSize={["7", "9", "13"]}>
                {header}
              </Th>
            ))}
            {actionItems.length > 0 && (
              <Th fontSize={["7", "9", "13"]} p="0">
                ACTION
              </Th>
            )}
          </Tr>
        </Thead>
        <Tbody>{rows}</Tbody>
      </Table>
    </TableContainer>
  );
}
