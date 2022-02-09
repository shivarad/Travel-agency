import styled from "styled-components";
import { colors } from "../../styles/variables";

export const BtnIcon = styled.span`
  transform: translateX(-100%);
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
`;
export const BtnTitle = styled.span`
  z-index: 3;
  font-weight: bolder;
  background: ${colors.green};
	border: 0;
	margin: 0;
`;

export const BtnPrice = styled.span`
transform: translateX(-10%);
 padding-right: 15px;
	border: 0;
	margin: 0;
`;

export const AddToBtn = styled.button`
transform: translateY(0px);
transition: 0.3s linear;
border-radius: 5px;
position: relative;
overflow: hidden;
cursor: pointer;
outline: none;
border: none;
color: #eee;
padding: 0;
margin: 0;
background: ${colors.brown};
border: 0;
margin: 0;
z-index: 3; font-weight: bolder;
&:hover{
    transform: translateY(-4px)
}

&:hover ${BtnPrice} {transform: translateX(-110%);}

&:hover ${BtnIcon} {transform: translateX(0%);}

span {
	font-family: 'Farsan', cursive;
	transition: transform 0.3s;
	display: inline-block;
    padding: 10px 20px;
	font-size: 1.2em;
	
`;
