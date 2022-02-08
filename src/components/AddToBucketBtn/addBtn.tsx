import { AddToBtn, BtnPrice, BtnIcon, BtnTitle } from "./addBtnStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Resort } from "../../interfaces";
import { useDispatch } from "react-redux";
//import { AppDispatch } from "../../redux/store";
import { addToBucket } from "../../redux/actionCreators";
import { ToastContainer,toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (title:string) =>{
  toast.success(`${title} Added to Bucket`, {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition:Slide,
  style:{width:"300px",fontWeight:"600",border:"none",color:"white",
  background:" rgba(62, 57, 57, 0.79)",boxShadow:"none", 
  backdropFilter: "blur(4px)",borderRadius:"8px"
}
  });
}

const AddToBucketBtn = (params: { resort: Resort |null}) => {
 // const dispatch = useDispatch<AppDispatch>();
 const dispatch = useDispatch();

  const onAdd= (resort: Resort|null) => {
    console.log("Add")
    if(resort){
      dispatch(addToBucket(resort))
      notify(resort.title)
    }
    
  };

  
  return (
    <>
    {params.resort?
    <AddToBtn onClick={()=>onAdd(params.resort)}>
      <BtnPrice>{params.resort.price} </BtnPrice>
      <BtnIcon>
        <FontAwesomeIcon icon={faShoppingCart} />
      </BtnIcon>
      <BtnTitle >Add to Bucket</BtnTitle>
    </AddToBtn>:null}
    <ToastContainer/>
    </>
  );
};

export default AddToBucketBtn;
