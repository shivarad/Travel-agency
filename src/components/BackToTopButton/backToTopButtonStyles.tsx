import styled from "styled-components";


export const ToTopBtn=styled.div`
display:flex;
justify-content:center;
border-radius:50%;
width:70px;
height:70px;
background:#564946;
color:white;
font-size:2.5rem;
align-item:center;
position:fixed;
right:20px;
bottom:20px;
text-align:center;
padding:10px;
cursor:pointer;
z-index:1000;
@media screen and (max-width: 1140px) {
    width:40px;
    height:40px;
    font-size:1.8rem;
    padding:3px;


  }
`