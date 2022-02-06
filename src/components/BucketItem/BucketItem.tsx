
import {BucketItemWrapper,ImgContainer,Title,Price,RemoveBtn} from "./BucketItemStyles"
import { Resort } from "../../interfaces";
import { useDispatch } from "react-redux";
import { removeFromBucket } from "../../redux/actionCreators";

const BucketItem=(props:{item:Resort})=>{

    const dispatch=useDispatch();
    const onDelete=(resort:Resort)=>{
        dispatch(removeFromBucket(resort))
    }
    return(
        <BucketItemWrapper>
        <ImgContainer>
            <img src={props.item.imageUrl} alt='item'/>
        </ImgContainer>
        <Title>{props.item.title}</Title>
        
        <Price >{props.item.price}</Price>
        <RemoveBtn onClick={()=>onDelete(props.item)} >&#10005;</RemoveBtn>  {/*utf-8 dingbates */}

    </BucketItemWrapper>
    )
}

export default BucketItem;