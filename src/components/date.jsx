export function getCorrectDate(originalDate) {
  const dateObject = new Date(originalDate);

  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = dateObject.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
}
