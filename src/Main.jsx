import React from "react";
import { Layout } from "antd";

import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routeConfig";
import HomePage from "./pages/HomePage/HomePage";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import { Row, Col, Divider } from "antd";
export default function Main() {
  return (
    <MainWrapper>
      <Layout>
        <Routes>
          <Route key={"/"} path={"/"} exact element={<HomePage />} />
          {routes.map(({ path, component: Component }) => {
            return (
              <Route
                key={path}
                path={path}
                exact
                element={
                  <ContentWrapper>
                    <Row>
                      <Col span={24}>
                        <HeaderComponent />
                        <Divider dashed />
                        <Component />
                        <Divider dashed />
                        <FooterComponent />
                      </Col>
                    </Row>
                  </ContentWrapper>
                }
              />
            );
          })}
        </Routes>
      </Layout>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  height: 100vh;
  .ant-layout {
    height: 100%;
    background: #fff;
  }
`;
const ContentWrapper = styled.div`
  height: 100%;
  max-width: 1400px;
  width: 1400px;
  margin: 0px auto;
  padding: 100px;
`;
