import styled from "styled-components";
import { colors } from "../../styles/variables";

export const PaginationWrapper=styled.div`
    display:flex;
    width:fit-content;
    margin:20px;
    align-items:center;
    & p{
        font-size:1rem;
        font-weight:bold;
        padding:20px;
    }

`

export const PaginationButton=styled.button`
    width:50px;
    height:50px;
    color:white;
    background:${colors.green};
    &:hover {
        background-color: ${colors.brown};
      }

`