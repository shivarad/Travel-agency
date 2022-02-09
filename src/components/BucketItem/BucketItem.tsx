
import {BucketItemWrapper,ImgContainer,Title,Price,RemoveBtn} from "./BucketItemStyles"
import { Resort } from "../../interfaces";
import { useDispatch } from "react-redux";
import { removeFromBucket } from "../../redux/actionCreators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadComponent } from "react-lazy-load-image-component";


const BucketItem=(props:{item:Resort})=>{

    const dispatch=useDispatch();
    const onDelete=(resort:Resort)=>{
        dispatch(removeFromBucket(resort))
    }
    return(
        <BucketItemWrapper>
        <LazyLoadComponent>
        <ImgContainer>
            <img src={props.item.imageUrl} alt='item'/>
        </ImgContainer>
        </LazyLoadComponent>
        <Title>{props.item.title}</Title>
        
        <Price >{props.item.price}</Price>
        <RemoveBtn onClick={()=>onDelete(props.item)} ><FontAwesomeIcon icon={faTrash} />
</RemoveBtn>  {/*utf-8 dingbates */}

    </BucketItemWrapper>
    )
}

export default BucketItem;