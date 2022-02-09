import { CardWraper, Detail, Image } from "./resortCardStyles";
import { Resort } from "../../interfaces";
import { Link } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import AddToBucketBtn from "../AddToBucketBtn/addBtn";

const ResortCard = (params: { resort: Resort }) => {
  return (
    <CardWraper key={params.resort.id}>
      <LazyLoadComponent>
        <Image bgImg={params.resort.imageUrl} />
      </LazyLoadComponent>

      <Detail>
        <Link
          style={{ textDecoration: "none" }}
          to={`/resorts/${params.resort.id}`}
        >
          <h1>{params.resort.title}</h1>
        </Link>
        <p>{params.resort.description}</p>
      </Detail>
      <AddToBucketBtn resort={params.resort} />
    </CardWraper>
  );
};

export default ResortCard;
