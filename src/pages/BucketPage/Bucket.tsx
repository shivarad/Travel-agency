
import { Header,ListWrapper } from "./BucketStyles";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { Link } from "react-router-dom";
import BucketItem from "../../components/BucketItem/BucketItem";
import Data from "../../data";
const Bucket=()=>{

    return(
        <>
        <Header ><Link to="/" style={{textDecoration:"none"}}><CustomBtn label="Resorts List"/></Link></Header>
        <ListWrapper>
            {Data.map(item=><BucketItem key={item.id} item={item}/>)}
        </ListWrapper>
        </>


    )
    }
    
    export default Bucket;