import styled, { keyframes } from "styled-components";

const ldsRollerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LdsRoller = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`;

export const LdsRollerItem = styled.div`
  animation: ${ldsRollerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3f5efb;
    margin: -4px 0 0 -4px;
  }
`;
