import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction:row-reverse;
  align-items:center;
  position: fixed;
  top: 0;
  left:0;
  right:0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  padding: 20px;
  background-color: #f1f1f1;
  height:40px;
`;

export const ResortListBtn=styled.span`
    color:white;
    font-weight: bolder;
    background: #558564;
    padding:10px;
    border-radius:8px;
    margin:40px;
    &:hover{
        background-color:#564946
    }
`

export const ListWrapper=styled.div`
    top:100px;
    width:60%;
    margin:100px auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
    padding:10px;
    background-color: #ffebc8;


    
`