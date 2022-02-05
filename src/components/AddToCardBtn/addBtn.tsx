import { AddToBtn, BtnPrice, BtnIcon, BtnTitle } from "./addBtnStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const AddToCardBtn = (params: { price: string }) => {
  return (
    <AddToBtn>
      <BtnPrice>{params.price} </BtnPrice>
      <BtnIcon>
        <FontAwesomeIcon icon={faShoppingCart} />
      </BtnIcon>
      <BtnTitle>Add to Bucket</BtnTitle>
    </AddToBtn>
  );
};

export default AddToCardBtn;
