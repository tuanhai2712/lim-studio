import React from "react";
import styled from "styled-components";
export default function Career() {
  return (
    <Container>
      <h1>{`JOB OPPORTUNITIES & INTERNSHIPS`}</h1>
      <p>
        Mọi nhu cầu ứng tuyển (kiến trúc sư/ thực tập sinh) xin gửi về địa chỉ:
        lim.studio21@gmail.com
      </p>
      <p>1. Resume/CV</p>
      <p>2. Portfolio (below 10MB)</p>
      <p>3. Current and expected salary</p>
      <p>4. Available start date</p>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  > h1 {
    color: #000 !important;
  }
  font-family: Open Sans;
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
