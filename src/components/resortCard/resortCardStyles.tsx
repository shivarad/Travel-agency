import styled from "styled-components";

export const CardWraper = styled.div`
  float: left;
  width: 30%;
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
`;

export const Detail = styled.div`
  width: 95%;
  margin: 0 auto 2em;
  padding-top: 10.5em;
  padding-bottom: 1em;
  height:300px;
  background-color: #ffebc8;
  color: #333;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  transition: all ease-in 0.15s;
  overflow:hidden;
  h1{
    font-family: "Bentham", serif;
    font-size: 1.5em;
    color: #474747;
    font-weight:bold;
    padding:15px;
    padding-bottom:0;
  }
  p{
    font-family: sans-serif;
    font-size: 1em;
    font-weight: 200;
    padding:15px;
    padding-top:10px;
    text-align:justify;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;

  }
`;
