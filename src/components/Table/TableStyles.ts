import styled from "styled-components";

export const TableBlock = styled.table`
  height: 40vh;
  width: 80vw;
  background: #fcfcfe;
  box-shadow: 0px 9px 30px 0px #44486d0f;
  border-radius: 16px;
  padding: 0px 18px 18px 18px;
`;

export const TableHeadRow = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const TableRow = styled(TableHeadRow)`
  &:hover {
    background: #44486d12;
    border-radius: 4px;
  }
`;

export const Td = styled.td`
  height: 49px;
  display: flex;
  padding: 8px;
  gap: 4px;
  overflow: hidden;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  width: 100%;
  block-size: fit-content;
  text-align: left;
`;
