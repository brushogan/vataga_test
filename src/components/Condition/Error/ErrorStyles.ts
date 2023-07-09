import styled from "styled-components";

export const ErrorContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e6284f;
  font-size: 30px;
  font-family: "Inter", sans-serif;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(29, 96, 254, 0.6822429906542056) 100%
  );
`;

export const ErrorIcon = styled.img`
  width: 120px;
`;
