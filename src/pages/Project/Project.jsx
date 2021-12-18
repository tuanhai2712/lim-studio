import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import allData from "./datasource";
export default function Project() {
  const navigate = useNavigate();
  return (
    <Container>
      <Row gutter={8}>
        {allData.map((item, idx) => {
          return (
            <Col span={6} style={{ padding: "20px" }} key={idx}>
              <ImageContainer
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                  height: 200,
                }}
                onClick={() => navigate(`/du-an/chi-tiet?name=${item.name}`)}
              />
              <div className="title-image">{item.name}</div>
            </Col>
          );
        })}
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
