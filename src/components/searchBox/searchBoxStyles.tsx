import styled from "styled-components";
import { colors } from "../../styles/variables";

export const SearchInput = styled.input`
height:45px;
width:clamp(200px,50%,300px);
font-size:1rem !important;
padding:8px;
border:1px solid gray;
border-radius:8px 0 0 8px ;
outline: none;
margin-right:0 !important;
  &:focus{
    border: 1px solid ${colors.brown};
    transition: 0.35s ease;
    &::-webkit-input-placeholder{
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    
`;

export const SearchBtn = styled.button`
  height: 45px;
  width: 45px;
  color: white;
  background: ${colors.green};
  padding: 8px;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
  margin-left: 0 !important;
  &:hover {
    background-color: ${colors.brown};
  }
`;
