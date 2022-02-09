
import { Header,ListWrapper } from "./BucketStyles";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { Link } from "react-router-dom";
import BucketItem from "../../components/BucketItem/BucketItem";
import { useTypedSelector } from "../../redux/useTypeSelector";
import { shallowEqual } from "react-redux";

const Bucket=()=>{
    const {bucket} = useTypedSelector
    ((state) => state.bucket,shallowEqual);

    return(
        <>
        <Header ><Link to="/" style={{textDecoration:"none"}}><CustomBtn label="Resorts List"/></Link></Header>
        
        <ListWrapper>
            {bucket.length>0?bucket.map(item=><BucketItem key={item.id} item={item}/>):"Your Bucket is Empty!"}
        </ListWrapper>
        </>


    )
    }
    
    export default Bucket;