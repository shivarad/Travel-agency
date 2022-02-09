import { Link } from "react-router-dom";
import { Button } from "../../components/CustomBtn/CustomBtnStyles";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
        alignItems: "center",
        width: "fit-content",
        height: "fit-content",
        background: " #ffebc8",
        padding:"20px",
        borderRadius:"8px",
        boxShadow:" 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24)",
      }}
    >
      <h1>Sorry!</h1>
      <h1> Page Not Found...</h1>
     <Link to={"/"}> <Button style={{ width: "fit-content" }}>Back to Home!</Button></Link>
    </div>
  );
};

export default NotFound;
