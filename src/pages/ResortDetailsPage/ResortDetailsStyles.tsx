import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 92vh;
  background-color: #ffebc8;
  padding: 30px;
`;

export const Description = styled.p`
  text-align: justify;
  padding: 30px;
  padding-left: 10px;
  margin-right: 90px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  background-color: #fff;
`;

export const Details = styled.div`
  width: 50%;
`;

export const Image = styled.img`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  width: 50%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction:row-reverse;
  align-items:center;
  position: fixed;
  top: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  padding: 20px;
  margin: 0;
  background-color: #f1f1f1;
  width: 100%;
  left: -30px;
  height:40px;
`;


