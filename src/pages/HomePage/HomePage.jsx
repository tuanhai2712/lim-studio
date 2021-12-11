import React, { Fragment } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Container>
        <div className="text-center">
          <h1 className="title">LIM STUDIO</h1>
          <h1 className="description">Interior Design - Architecture</h1>
          <p>… telling endless architectural narrative …</p>
          <div className="btn-container">
            <div className="btn" onClick={() => navigate("/du-an")}>
              <span>Welcome Back</span>
            </div>
          </div>
        </div>
      </Container>
      <FooterStyled>
        <div className="item">
          <FaFacebook size={24} color="#fff" />
        </div>
        <div className="item">
          <FaGoogle size={24} color="#fff" />
        </div>
        <div className="item">
          <FaInstagram size={24} color="#fff" />
        </div>
        <div className="item">
          <FaYoutube size={24} color="#fff" />
        </div>
      </FooterStyled>
    </Fragment>
  );
}

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  background: #000;
  .item {
    margin: 0px 5px;
    :hover {
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  height: 100%;
  color: #fff;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
      font-weight: 700;
      font-style: normal;
      font-size: 32px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #F26433 !important;
    }
  }

  .description {
    font-family: brandon-grotesque;
    font-size: 33px;
    font-weight: 400;
    font-style: normal;
    text-transform: none;
    letter-spacing: 0em;
    line-height: 1em;
    color: #F26433 !important;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      font-weight: 700;
      font-style: normal;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: .2em;
      background: #fff;
      color: #000;
      padding-top: 1em;
      padding-right: 1.44em;
      padding-bottom: 1em;
      padding-left: 1.44em;
      margin: 10px;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
