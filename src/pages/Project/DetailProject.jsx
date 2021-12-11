import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Image } from "antd";
import { useLocation } from "react-router-dom";
import allData from "./datasource";
import { DONE } from "@utils/constants";
export default function DetailProject() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const projectName = params.get("name");
  const [data, setData] = useState(null);
  useEffect(() => {
    if (projectName) {
      const findItemDetail = allData.find((item) => item.name === projectName);
      if (findItemDetail) {
        setData(findItemDetail);
      }
    }
  }, [projectName, data]);
  return (
    <Container>
      <Row>
        <div className="info-project">
          <span className="name">{projectName}</span>
          {data && (
            <div className="info">
              <p className="info-text time color_sub_title">{data.time}</p>
              <p className="info-text">{`Địa điểm: ${data.location}`}</p>
              <p className="info-text">{`Diện tích: ${data.area} m2`}</p>
              <p className="info-text">{`Trạng thái: ${
                data.status === DONE ? "Hoàn thành" : "Đang thi công"
              }`}</p>
            </div>
          )}
        </div>
      </Row>
      <Row gutter={8}>
        {data &&
          data.children &&
          data.children.map((img, idx) => {
            return (
              <Col span={6} style={{ padding: "20px" }} key={idx}>
                <Image src={img} height={200} />
                {/* <div
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    height: 200,
                  }}
                /> */}
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  font-family: Open Sans;
  .info-project {
    display: flex;
    flex-direction: column;
    .name {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: bold;
    }
    .info {
      display: flex;
      flex-direction: column;
      .time {
        font-size: 12px;
      }
    }
  }
`;
