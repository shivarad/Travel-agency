import { AddToBtn, BtnPrice, BtnIcon, BtnTitle } from "./addBtnStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Resort } from "../../interfaces";
import { useDispatch } from "react-redux";
import { addToBucket } from "../../redux/actionCreators";


const AddToBucketBtn = (params: { resort: Resort |null}) => {
  const dispatch = useDispatch();

  const onAdd= (resort: Resort|null) => {
    if(resort)
      dispatch(addToBucket(resort))
    
  };

  
  return (
    params.resort?
    <AddToBtn onClick={()=>onAdd(params.resort)}>
      <BtnPrice>{params.resort.price} </BtnPrice>
      <BtnIcon>
        <FontAwesomeIcon icon={faShoppingCart} />
      </BtnIcon>
      <BtnTitle >Add to Bucket</BtnTitle>
    </AddToBtn>:null
  );
};

export default AddToBucketBtn;
