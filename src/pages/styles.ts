import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 7% 93%;
  grid-template-areas:
    "a b"
    "a c";
`;

export const Content = styled.div`
  flex: 1;
  grid-area: c;
  display: flex;
  flex-direction: column;
  margin: 40px;
`;
