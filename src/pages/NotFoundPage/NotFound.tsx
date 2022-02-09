import { Link } from "react-router-dom";
import { Button } from "../../components/CustomBtn/CustomBtnStyles";
import { PageWrapper,MessageWrapper } from "./NotFoundStyles";

const NotFound = () => {
  return (
    <PageWrapper>
    <MessageWrapper>
     
      <h2>Sorry!</h2>
      <h2> Page Not Found...</h2>
     <Link to={"/"}> <Button style={{ width: "fit-content" }}>Back to Home!</Button></Link>
     </MessageWrapper>
         </PageWrapper>
  );
};

export default NotFound;
