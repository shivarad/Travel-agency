import { useState } from "react";
import {Resort} from "../../interfaces";
import ResortsList from "../../components/resortsList/resortsList";
import Data  from "../../data";

import SearchBox from "../../components/searchBox/searchBox";

const Resorts=()=>{
    const [resorts,setResorts]=useState<Resort[]>(Data);

  
return(
    <>
    <div style={{height:"200px",margin:"20px"}}>
        <SearchBox  data={Data} setData={setResorts}/>    

    </div>
       <ResortsList resorts={resorts}/>
    </>
)
}

export default Resorts;
