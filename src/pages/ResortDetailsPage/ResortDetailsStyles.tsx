import styled from "styled-components";
import { colors } from "../../styles/variables";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    margin: 0 auto;
    padding: 15px 0;
    @media screen and (max-width: 1140px) {
      text-align: center;
    }
  }
`;
export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height:calc(100vh-110px);
  padding: 50px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  background: ${colors.pink};
  @media screen and (max-width: 1140px) {
    justify-content: center;
    padding: 30px;
  }
  @media screen and (max-width: 350px) {
    margin: 0px;
  }
`;
export const Description = styled.p`
  text-align: justify;
  padding: 30px;
  line-height: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  background-color: #fff;
  font-family: sans-serif;

`;

export const Details = styled.div`
  width: 40%;
  min-width: 300px;
  h2{
    font-family: "Bentham", serif;
  }
  @media screen and (max-width: 1140px) and (min-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const Image = styled.img`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  width: 50%;
  min-width: 300px;
  @media screen and (max-width: 1140px) and (min-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  top: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  padding: 20px;
  background-color: ${colors.gray};
  left: 0;
  right: 0;
  height: 70px;
  
`;
