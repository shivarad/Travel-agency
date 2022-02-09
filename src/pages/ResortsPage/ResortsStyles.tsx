import styled from "styled-components";
import { colors } from "../../styles/variables";



export const PageWrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;

`
export const FilterBar=styled.div`
    display:flex;
    top:0;
    left:0;
    right:0;
    flex-direction:row;
    justify-content:flex-start;
    gap:25px;
    flex-wrap:wrap;
    margin:20px auto;
    padding-left:20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
    margin-top:0;
    background-color:${colors.gray};
    align-items:center;
    width:100%;
    
    @media screen and (max-width: 830px) {
        justify-content:center;
        padding-left:0px;
        padding-top:15px;

 
      }
`






