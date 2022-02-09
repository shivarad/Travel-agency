import styled from "styled-components";



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
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
    padding:20px;
    margin-top:0;
    background-color: #f1f1f1;
    align-items:center;
    width:100%;
    @media screen and (max-width: 830px) {
        justify-content:center;
 
      }
`

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
    background:#558564;
    &:hover {
        background-color: #564946;
      }

`