import { Button } from "./CustomBtnStyles"


const CustomBtn=(props:{label:string,onClick?:()=>void})=>{

    return(
        <Button onClick={props.onClick}>{props.label}</Button>
    )
}

export default CustomBtn;