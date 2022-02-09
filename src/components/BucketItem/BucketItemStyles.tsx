import styled from "styled-components";

export const BucketItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-between;
  flex-wrap:no-wrap;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 5px 0;
  font-size: 1rem;
  font-weight:bold;
  text-align:center;
  align-items: center;
  @media screen and (max-width: 730px) {
      font-size:.8rem;
      font-weight:normal;
  }
  
`;

export const ImgContainer = styled.div`
  width: 30%;
  min-width:100px;
  padding-right: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.span`
  width: 60%;
`;
export const Price = styled.span`
  width: 8%;
  margin:10px;
`;
export const RemoveBtn = styled.div`
  cursor: pointer;
`;
