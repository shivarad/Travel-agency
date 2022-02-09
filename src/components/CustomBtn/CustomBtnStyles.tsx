import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Button = styled.button`
  color: white;
  height:50px;
  font-weight: bolder;
  font-size:1rem;
  background: ${colors.green};
  padding: 10px;
  border-radius: 8px;
  margin: 20px;
  &:hover {
    background-color: ${colors.brown};
  }
`;
