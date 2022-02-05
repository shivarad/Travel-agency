
import {BucketItemWrapper,ImgContainer,Title,Price,RemoveBtn} from "./BucketItemStyles"
import { Resort } from "../../interfaces";

const BucketItem=(props:{item:Resort})=>{

    return(
        <BucketItemWrapper>
        <ImgContainer>
            <img src={props.item.imageUrl} alt='item'/>
        </ImgContainer>
        <Title>{props.item.title}</Title>
        
        <Price >{props.item.price}</Price>
        <RemoveBtn  >&#10005;</RemoveBtn>  {/*utf-8 dingbates */}

    </BucketItemWrapper>
    )
}

export default BucketItem;