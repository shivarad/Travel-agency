
import {
  CardWraper,
  Detail,
  Image,
} from "./resortCardStyles";
import { Resort } from '../../interfaces';
import { Link } from 'react-router-dom';
import AddToCardBtn from "../AddToCardBtn/addBtn";

const ResortCard:React.FC<Resort> = ({id,title,price,imageUrl,description}:Resort) => {
  return (
    <CardWraper key={id}>
      <Image bgImg={imageUrl} />
      <Detail>
        <Link style={{textDecoration:"none"}} to={`/resorts/${id}`}><h1 >{title}</h1></Link>
        <p>{description}</p>
      </Detail>
      <AddToCardBtn price={price}/>
    </CardWraper>
  );
};

export default ResortCard;
