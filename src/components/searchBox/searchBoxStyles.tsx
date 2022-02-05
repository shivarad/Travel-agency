import styled from "styled-components";


export const SearchInput=styled.input`

height:30px;
width:50%;
font-size:1rem;
padding:8px;
border:1px solid gray;
border-radius:8px 0 0 8px ;
outline: none;
  &:focus{
    border: 1px solid #008ABF;
    transition: 0.35s ease;
    color: #008ABF;
    &::-webkit-input-placeholder{
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
`

export const SearchBtn=styled.button`
height:50px;
width:45px;
color:white;
background:#558564;
padding:8px;
border-radius:0 8px 8px 0;
font-size:1rem;

`