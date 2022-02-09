import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  PageWrapper,
  Description,
  Details,
  Image,
  Header,
  DetailWrapper,
} from "./ResortDetailsStyles";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import Data from "../../data";
import { Resort } from "../../interfaces";
import AddToBucketBtn from "../../components/AddToBucketBtn/addBtn";

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
    <PageWrapper>
      <Header>
        <Link to="/bucket" style={{ textDecoration: "none" }}>
          <CustomBtn label="My Bucket List" />
        </Link>
      </Header>
      {ResortDetail?

      <DetailWrapper>
        <Image src={ResortDetail?.imageUrl} />
        <Details>
          <h2>{ResortDetail?.title}</h2>
          <Description>{ResortDetail?.description}</Description>
          <AddToBucketBtn resort={ResortDetail} />
        </Details>
      </DetailWrapper>:<h3>No Such Resort Exists!</h3>}
    </PageWrapper>
  );
};

export default ResortDetail;
