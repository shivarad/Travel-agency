import styled from "styled-components";

export const BucketItemWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.span`
  width: 46%;
`;
export const Price = styled.span`
  width: 23%;
  text-align:center;
`;
export const RemoveBtn = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
