import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
`;

export const PagNumber = styled.div`
  height: 20px;
  min-width: 20px;
  display: flex;
  align-items: center;
  padding: 2px;
  justify-content: center;
  border-radius: 4px;
  color: #44486d;
  cursor: pointer;
  &:hover {
    background: #44486d1f;
  }
`;

export const PagIcon = styled.img`
  cursor: pointer;
`;
