import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
export default function Research() {
  const navigate = useNavigate();
  return (
    <Container>
      <Row gutter={8}>
        <Col span={6} style={{ padding: "20px" }}>
          <ImageContainer
            style={{
              backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/57613d051d07c0ae9836a524/1491467323577-7A4Q33XAYFLSSMP3PUEE/military+museum.jpg?format=500w')`,
              backgroundSize: "cover",
              height: 200,
            }}
            onClick={() =>
              navigate(`/nghien-cuu/chi-tiet?name=doi-xung-hay-phi-doi-xung`)
            }
          />
          <div className="title-image">Đối xứng hay phi đối xứng</div>
        </Col>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  .title-image {
    font-family: Open Sans;
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
    text-decoration: none;
    text-align: left;
    color: #000;
    margin-top: 20px;
  }
`;

const ImageContainer = styled.div`
  :hover {
    cursor: pointer;
  }
`;
