import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  PageWrapper,
  Description,
  Details,
  Image,
  Header,
} from "./ResortDetailsStyles";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import Data from "../../data";
import { Resort } from "../../interfaces";
import AddToCardBtn from "../../components/AddToCardBtn/addBtn";

type ResortParams = {
  ResortId: string;
};
const ResortDetail: React.FC = () => {
  const { ResortId } = useParams<ResortParams>();

  const [ResortDetail, setResortDetails] = useState<Resort | null>(null);

  useEffect(() => {
    if (ResortId)
      setResortDetails(
        Data.filter((item) => item.id === parseInt(ResortId))[0]
      );
  }, []);
  return (
    <>
      <PageWrapper>
        <Header>
          <Link to="/bucket" style={{textDecoration:"none"}}>
            <CustomBtn label="My Bucket List" />
          </Link>
        </Header>
        <Image src={ResortDetail?.imageUrl} />
        <Details>
          <h1>{ResortDetail?.title}</h1>
          <Description>{ResortDetail?.description}</Description>
          <AddToCardBtn price={ResortDetail?.price ? ResortDetail.price : ""} />
        </Details>
      </PageWrapper>
    </>
  );
};

export default ResortDetail;
