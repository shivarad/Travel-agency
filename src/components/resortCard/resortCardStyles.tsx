import styled from "styled-components";

export const CardWraper = styled.div`
  float: left;
  width: 450px;
  min-width: 300px;
  background-color: #f1f1f1;
  margin: 1.5%;
  padding: 2em 1em;
  box-sizing: border-box;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
  text-align: center;

  h1 {
    font-family: "Lato", sans-serif;
    font-weight: 200;
    font-size: 1.5em;
    letter-spacing: 0.15em;
    color: #333;
  }
`;

export const Image = styled.div<{ bgImg: string }>`
  position: relative;
  z-index: 2;
  width: 85%;
  height: 250px;
  margin: 0 auto -10em;
  background-size: cover;
  background-position: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  transition: all ease-in 0.15s;
  background-image:url(${props => props.bgImg});
  background-color:#f1f1f1;
  @media screen and (max-width: 390px) {
    height: 200px;
  }
`;

export const Detail = styled.div`
display:flex;
justify-content:space-around;
flex-direction:column;
  width: 95%;
  margin: 0 auto 2rem;
  padding-top: 10.5rem;
  padding-bottom: 1rem;
  height:430px;
  background-color: #ffebc8;
  color: #333;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  transition: all ease-in 0.15s;
  overflow:hidden;
  h1{
    font-family: "Bentham", serif;
    font-size: 1.5rem;
    color: #474747;
    height:fit-content;
    font-weight:bold;
    text-align:center;
    @media screen and (max-width: 390px) {
      font-size:1.3rem;

    }
  }
  p{
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 150;
    line-height:1.5rem;
    padding:0 15px;
    height:75px;
    text-align:justify;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

  }
`;
