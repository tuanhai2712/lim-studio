import React from "react";
import styled from "styled-components";
export default function Contact() {
  return (
    <Container>
      <p>ĐỊA CHỈ: Số 36 Láng Hạ - Đống Đa - Hà Nội</p>
      <p>EMAIL: lim.studio21@gmail.com</p>
      <p>PHONE : 091 616 77 69</p>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  > p {
    font-family: Open Sans;
    font-weight: 300;
    font-style: normal;
    line-height: 1.5em;
    font-size: 12px;
    text-transform: none;
    text-decoration: none;
    margin: 0 0 1em;
  }
`;
