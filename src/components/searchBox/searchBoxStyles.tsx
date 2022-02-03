import styled from "styled-components";


export const SearchInput=styled.input`

height:30px;
width:50%;
font-size:1rem;
padding:8px;
border:1px solid gray;
border-radius:8px;
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