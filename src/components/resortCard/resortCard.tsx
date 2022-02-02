import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
  CardWraper,
  Detail,
  Image,
  AddToBtn,
  BtnPrice,
  BtnIcon,
  BtnTitle,
} from "./resortCardStyles";
import { Resort } from '../../interfaces';

const ResortCard:React.FC<Resort> = ({id,title,price,imageUrl,description}:Resort) => {
  return (
    <CardWraper key={id}>
      <Image bgImg={imageUrl} />
      <Detail>
        <h1>{title}</h1>
        <p>{description}</p>
      </Detail>
      <AddToBtn>
        <BtnPrice>{price} </BtnPrice>
        <BtnIcon>
        <FontAwesomeIcon icon={faShoppingCart} />
                </BtnIcon>
        <BtnTitle>Add to Cart</BtnTitle>
      </AddToBtn>
    </CardWraper>
  );
};

export default ResortCard;
