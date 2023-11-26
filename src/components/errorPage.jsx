import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "38px" }}>NOT YET IMPLEMENTED !!!!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
